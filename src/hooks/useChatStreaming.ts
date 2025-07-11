import { useState, useCallback, useRef } from 'react';

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

interface UseChatStreamingProps {
  onNewMessage?: (message: Message) => void;
  onStreamingStart?: () => void;
  onStreamingEnd?: () => void;
  onError?: (error: string) => void;
}

export const useChatStreaming = ({
  onNewMessage,
  onStreamingStart,
  onStreamingEnd,
  onError,
}: UseChatStreamingProps = {}) => {
  const [isStreaming, setIsStreaming] = useState(false);
  const abortControllerRef = useRef<AbortController | null>(null);
  const [streamingContent, setStreamingContent] = useState('');

  const sendMessage = useCallback(
    async (messages: Message[], model: string = 'gpt-4o-mini') => {
      if (isStreaming) {
        console.log('Already streaming, ignoring duplicate call');
        return;
      }

      const requestId = Date.now();
      console.log('Starting new chat request:', requestId);

      setIsStreaming(true);
      setStreamingContent('');
      onStreamingStart?.();

      // Create abort controller for cancellation
      abortControllerRef.current = new AbortController();

      try {
        const response = await fetch('/api/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            messages: messages.map((msg) => ({
              role: msg.isUser ? 'user' : 'assistant',
              content: msg.content,
            })),
            model,
          }),
          signal: abortControllerRef.current.signal,
        });

        if (!response.ok) {
          // Handle rate limiting
          if (response.status === 429) {
            const errorData = await response.json();
            throw new Error(
              errorData.message ||
                'Rate limit exceeded. Please try again later.',
            );
          }
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const reader = response.body?.getReader();
        const decoder = new TextDecoder();
        let fullContent = '';

        if (reader) {
          while (true) {
            const { done, value } = await reader.read();

            if (done) break;

            const chunk = decoder.decode(value, { stream: true });
            const lines = chunk.split('\n');

            for (const line of lines) {
              if (line.startsWith('data: ')) {
                const data = line.slice(6);

                if (data === '[DONE]') {
                  // Stream is complete
                  const finalMessage: Message = {
                    id: Date.now().toString(),
                    content: fullContent,
                    isUser: false,
                    timestamp: new Date(),
                  };
                  onNewMessage?.(finalMessage);
                  setStreamingContent('');
                  break;
                }

                try {
                  const parsed = JSON.parse(data);
                  if (parsed.content) {
                    fullContent += parsed.content;
                    setStreamingContent(fullContent);
                  }
                } catch (e) {
                  console.log('Error parsing chunk:', e);
                  // Ignore parsing errors for incomplete chunks
                }
              }
            }
          }
        }
      } catch (error) {
        if (error instanceof Error) {
          if (error.name === 'AbortError') {
            console.log('Request was aborted');
          } else {
            console.error('Streaming error:', error);
            onError?.(error.message);
          }
        } else {
          console.error('Unknown error:', error);
          onError?.('An unknown error occurred');
        }
      } finally {
        setIsStreaming(false);
        setStreamingContent('');
        onStreamingEnd?.();
        abortControllerRef.current = null;
      }
    },
    [isStreaming, onNewMessage, onStreamingStart, onStreamingEnd, onError],
  );

  const cancelStream = useCallback(() => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
  }, []);

  return {
    sendMessage,
    isStreaming,
    streamingContent,
    cancelStream,
  };
};
