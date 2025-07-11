import { NextRequest, NextResponse } from 'next/server';
import { rateLimiter } from '@/lib/rate-limiter';

export async function POST(request: NextRequest) {
  try {
    const { adminKey, action, ip, userAgent } = await request.json();

    // Check admin authentication
    if (!adminKey || adminKey !== process.env.ADMIN_SECRET_KEY) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    if (action === 'unblock') {
      if (!ip) {
        return NextResponse.json(
          { error: 'IP address is required for unblock action' },
          { status: 400 },
        );
      }

      const success = await rateLimiter.unblockIP(ip, userAgent);

      return NextResponse.json({
        success,
        message: success
          ? 'IP unblocked successfully'
          : 'IP not found or already unblocked',
      });
    }

    if (action === 'status') {
      if (!ip) {
        return NextResponse.json(
          { error: 'IP address is required for status action' },
          { status: 400 },
        );
      }

      const status = await rateLimiter.getStatus(ip, userAgent);

      return NextResponse.json({
        ip,
        userAgent,
        ...status,
      });
    }

    return NextResponse.json(
      { error: 'Invalid action. Use "unblock" or "status"' },
      { status: 400 },
    );
  } catch (error) {
    console.error('Admin rate limit error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    );
  }
}
