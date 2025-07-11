'use client';

import { useState, useEffect, useRef, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Send, Sparkle, Square } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useChatStreaming } from '@/hooks/useChatStreaming';
import { MarkdownMessage } from '@/components/chat/MarkdownMessage';
import { RateLimitMessage } from '@/components/chat/RateLimitMessage';

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

interface RateLimitState {
  isRateLimited: boolean;
  message: string;
  resetTime?: number;
}

const ChatPage = () => {
  const searchParams = useSearchParams();
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [rateLimitState, setRateLimitState] = useState<RateLimitState>({
    isRateLimited: false,
    message: '',
  });
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const initialPromptProcessed = useRef(false);

  const { sendMessage, isStreaming, streamingContent, cancelStream } =
    useChatStreaming({
      onNewMessage: (message) => {
        setMessages((prev) => [...prev, message]);
      },
      onError: (error) => {
        console.error('Chat error:', error);

        // Check if this is a rate limit error
        if (
          error.includes('Rate limit exceeded') ||
          error.includes('exceeded the message limit')
        ) {
          setRateLimitState({
            isRateLimited: true,
            message: error,
          });
        }
      },
    });

  // Check rate limit status on component mount
  useEffect(() => {
    const checkRateLimit = async () => {
      try {
        const response = await fetch('/api/chat');
        const data = await response.json();

        if (data.blocked) {
          setRateLimitState({
            isRateLimited: true,
            message: `You have exceeded the message limit (${data.limit} messages per session). Your IP address has been temporarily blocked. Please contact our sales team for extended access.`,
            resetTime: data.resetTime,
          });
        }
      } catch (error) {
        console.error('Error checking rate limit:', error);
      }
    };

    checkRateLimit();
  }, []);

  // Get initial prompt from URL params
  useEffect(() => {
    const initialPrompt = searchParams.get('prompt');

    // Only process if we have a prompt and haven't processed it yet
    if (initialPrompt && !initialPromptProcessed.current) {
      initialPromptProcessed.current = true;

      const initialMessage: Message = {
        id: '1',
        content: initialPrompt,
        isUser: true,
        timestamp: new Date(),
      };
      setMessages([initialMessage]);

      // Send to AI automatically after a short delay
      setTimeout(() => {
        sendMessage([initialMessage]);
      }, 500);
    }

    // Cleanup function to reset on unmount
    return () => {
      // Reset the ref when component unmounts or URL changes
      if (!searchParams.get('prompt')) {
        initialPromptProcessed.current = false;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, streamingContent]);

  const handleSendMessage = () => {
    if (!inputValue.trim() || isStreaming || rateLimitState.isRateLimited)
      return;

    const newMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      isUser: true,
      timestamp: new Date(),
    };

    const updatedMessages = [...messages, newMessage];
    setMessages(updatedMessages);
    setInputValue('');

    // Reset textarea height after clearing input
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = '48px';
    }

    // Send to AI
    sendMessage(updatedMessages);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);

    // Auto-resize textarea
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height =
        Math.min(textareaRef.current.scrollHeight, 128) + 'px';
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className='flex h-screen overflow-hidden bg-black'>
      {/* Main Chat Area */}
      <div className='relative z-10 flex h-full w-full flex-col bg-black'>
        {/* Messages Area */}
        <div className='flex flex-1 flex-col overflow-hidden'>
          <div className='h-full w-full flex-1 overflow-y-auto p-4 pt-24 sm:pt-28 pb-0 lg:px-8 scrollbar-hide'>
            <div className='mx-auto w-full max-w-4xl space-y-6 pb-20'>
              {/* Welcome Header */}
              {messages.length === 0 &&
                !isStreaming &&
                !rateLimitState.isRateLimited && (
                  <div className='text-center py-8'>
                    <div className='w-16 h-16 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center mx-auto mb-4 shadow-lg'>
                      <Sparkle className='h-8 w-8 text-white' />
                    </div>
                    <h1 className='text-2xl font-semibold text-white mb-2'>
                      AI Strategy Assistant
                    </h1>
                    <p className='text-gray-400 max-w-md mx-auto'>
                      Hi! I&apos;m your AI assistant powered by ChatGPT. I can
                      help you develop business strategies, create project
                      plans, and provide innovative solutions. What would you
                      like to explore today?
                    </p>
                  </div>
                )}

              <AnimatePresence>
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className={`flex w-full ${
                      message.isUser ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    <MarkdownMessage
                      content={message.content}
                      isUser={message.isUser}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Streaming Message */}
              {isStreaming && streamingContent && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className='flex w-full justify-start'
                >
                  <MarkdownMessage
                    content={streamingContent}
                    isUser={false}
                    isStreaming={true}
                  />
                </motion.div>
              )}

              {/* Typing Indicator */}
              {isStreaming && !streamingContent && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className='flex w-full justify-start'
                >
                  <div className='max-w-[90%] bg-[#1a1a1a] text-white rounded-2xl px-4 py-3'>
                    <div className='flex space-x-1'>
                      <div className='w-2 h-2 bg-gray-400 rounded-full animate-bounce'></div>
                      <div
                        className='w-2 h-2 bg-gray-400 rounded-full animate-bounce'
                        style={{ animationDelay: '0.1s' }}
                      ></div>
                      <div
                        className='w-2 h-2 bg-gray-400 rounded-full animate-bounce'
                        style={{ animationDelay: '0.2s' }}
                      ></div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Rate Limit Message */}
              {rateLimitState.isRateLimited && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className='flex w-full justify-start'
                >
                  <RateLimitMessage />
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Input Area */}
          <div className='bg-black p-4 pt-0'>
            <div className='mx-auto max-w-4xl'>
              <div className='flex items-center gap-3 rounded-3xl bg-[#27272a] p-2 md:p-4'>
                <Textarea
                  ref={textareaRef}
                  value={inputValue}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyPress}
                  placeholder='Ask Something...'
                  className='max-h-[80px] min-h-[48px] flex-1 resize-none border-0 bg-transparent py-2 text-white placeholder:text-gray-400 [-ms-overflow-style:none] [scrollbar-width:none] focus-visible:ring-0 focus-visible:ring-offset-0 [&::-webkit-scrollbar]:hidden'
                  disabled={isStreaming || rateLimitState.isRateLimited}
                  rows={1}
                />

                {isStreaming ? (
                  <Button
                    onClick={cancelStream}
                    size='icon'
                    className='flex h-10 w-10 items-center justify-center rounded-full bg-red-600 hover:bg-red-700 transition-all duration-300 hover:scale-105 flex-shrink-0'
                  >
                    <Square className='h-4 w-4' />
                  </Button>
                ) : (
                  <Button
                    onClick={handleSendMessage}
                    disabled={
                      !inputValue.trim() || rateLimitState.isRateLimited
                    }
                    size='icon'
                    className='flex h-10 w-10 items-center justify-center rounded-full gradient-bg hover:opacity-80 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:scale-105 flex-shrink-0'
                  >
                    <Send className='h-4 w-4' />
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Simple loading component for Suspense fallback
const ChatLoading = () => (
  <div className='flex h-screen items-center justify-center bg-black'>
    <div className='text-center'>
      <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-4'></div>
      <p className='text-white'>Loading...</p>
    </div>
  </div>
);

// Wrapped component with Suspense
const ChatPageWithSuspense = () => (
  <Suspense fallback={<ChatLoading />}>
    <ChatPage />
  </Suspense>
);

export default ChatPageWithSuspense;
