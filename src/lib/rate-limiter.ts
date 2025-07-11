import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

// Rate limit status interface
interface RateLimitStatus {
  allowed: boolean;
  remaining: number;
  resetTime?: number;
  message?: string;
}

// Initialize Redis connection safely
let redis: Redis | null = null;

try {
  if (
    process.env.UPSTASH_REDIS_REST_URL &&
    process.env.UPSTASH_REDIS_REST_TOKEN
  ) {
    redis = new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL,
      token: process.env.UPSTASH_REDIS_REST_TOKEN,
    });
  } else {
    console.warn(
      '⚠️ Upstash Redis credentials not found in environment variables',
    );
  }
} catch (error) {
  console.error('❌ Failed to initialize Redis connection:', error);
  redis = null;
}

class ChatRateLimiter {
  private readonly MAX_MESSAGES = 10;
  private rateLimit: Ratelimit | null = null;

  constructor() {
    // Initialize Upstash rate limiter
    try {
      if (redis) {
        this.rateLimit = new Ratelimit({
          redis: redis,
          limiter: Ratelimit.slidingWindow(this.MAX_MESSAGES, '24 h'),
          analytics: true,
          prefix: 'chat_limit',
        });
      } else {
        console.error(
          '❌ Cannot initialize rate limiter: Redis connection failed',
        );
      }
    } catch (error) {
      console.error('❌ Failed to initialize Upstash rate limiter:', error);
      this.rateLimit = null;
    }
  }

  private getClientKey(ip: string, userAgent?: string): string {
    // Create a unique key combining IP and user agent for better identification
    return `${ip}_${userAgent?.slice(0, 100) || 'unknown'}`;
  }

  async checkLimit(ip: string, userAgent?: string): Promise<RateLimitStatus> {
    const identifier = this.getClientKey(ip, userAgent);

    // If Upstash rate limiter is not available, allow all requests
    if (!this.rateLimit) {
      console.warn('Rate limiter not available - allowing request');
      return {
        allowed: true,
        remaining: this.MAX_MESSAGES - 1,
      };
    }

    try {
      const result = await this.rateLimit.limit(identifier);

      if (!result.success) {
        const resetTime = result.reset
          ? new Date(result.reset).getTime()
          : undefined;
        const hoursLeft = resetTime
          ? Math.ceil((resetTime - Date.now()) / (60 * 60 * 1000))
          : 24;

        return {
          allowed: false,
          remaining: 0,
          resetTime,
          message: `You have exceeded the message limit (${this.MAX_MESSAGES} messages per day). Your IP address has been temporarily blocked for ${hoursLeft} hour(s). Please contact our sales team for extended access.`,
        };
      }

      return {
        allowed: true,
        remaining: result.remaining,
        resetTime: result.reset ? new Date(result.reset).getTime() : undefined,
      };
    } catch (error) {
      console.error('Rate limit check error:', error);

      // In case of error, allow the request but log it
      return {
        allowed: true,
        remaining: this.MAX_MESSAGES - 1,
      };
    }
  }

  async getStatus(
    ip: string,
    userAgent?: string,
  ): Promise<{
    messageCount: number;
    remaining: number;
    blocked: boolean;
    resetTime?: number;
    dailyResetTime?: number;
  }> {
    const identifier = this.getClientKey(ip, userAgent);

    if (!this.rateLimit) {
      return {
        messageCount: 0,
        remaining: this.MAX_MESSAGES,
        blocked: false,
      };
    }

    try {
      // Use limit with a test identifier to get status without actually consuming
      // const result = await this.rateLimit.limit(`${identifier}:status`);

      // If we can't get the actual remaining count, try a different approach
      // Use a dummy limit call to see if we're blocked
      const testResult = await this.rateLimit.limit(identifier);

      const remaining = testResult.success ? testResult.remaining : 0;
      const messageCount = this.MAX_MESSAGES - remaining;

      return {
        messageCount: Math.max(0, messageCount),
        remaining: Math.max(0, remaining),
        blocked: !testResult.success,
        resetTime: testResult.reset
          ? new Date(testResult.reset).getTime()
          : undefined,
      };
    } catch (error) {
      console.error('Get status error:', error);
      return {
        messageCount: 0,
        remaining: this.MAX_MESSAGES,
        blocked: false,
      };
    }
  }

  async unblockIP(ip: string, userAgent?: string): Promise<boolean> {
    const identifier = this.getClientKey(ip, userAgent);

    if (!this.rateLimit || !redis) {
      console.warn('Rate limiter or Redis not available for unblock operation');
      return false;
    }

    try {
      // Reset the rate limit for this identifier by deleting the key
      const key = `chat_limit:${identifier}`;
      await redis.del(key);

      console.log(`✅ Successfully unblocked IP: ${ip}`);
      return true;
    } catch (error) {
      console.error('Unblock IP error:', error);
      return false;
    }
  }
}

// Export singleton instance
export const rateLimiter = new ChatRateLimiter();
