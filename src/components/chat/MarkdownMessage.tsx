/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';

interface MarkdownMessageProps {
  content: string;
  isUser: boolean;
  isStreaming?: boolean;
}

export const MarkdownMessage: React.FC<MarkdownMessageProps> = ({
  content,
  isUser,
  isStreaming = false,
}) => {
  return (
    <div
      className={`rounded-2xl px-4 py-3 ${
        isUser
          ? 'bg-[#27272a] text-white max-w-[75%]'
          : 'bg-transparent text-white w-full'
      } relative`}
    >
      <div className='text-md leading-relaxed'>
        {isUser ? (
          <p className='whitespace-pre-wrap break-words'>{content}</p>
        ) : (
          <>
            <style>
              {`
                    pre {
                    background-color: #1a1a1a;
                    padding: 16px;
                    border-radius: 8px;
                    overflow-x: auto;
                    border: transparent;
                    }
                    .hljs-string {
                        color: #ce9178;
                    }
                    .hljs-number {
                        color: #b5cea8;
                    }
                    .hljs-function {
                        color: #dcdcaa;
                    }
                    .hljs-comment {
                        color: #6a9955;
                        font-style: italic;
                    }
                `}
            </style>
            <div className='prose prose-sm dark:prose-invert [&_pre]:scrollbar-thin [&_pre]:scrollbar-thumb-border [&_pre]:scrollbar-track-transparent max-w-none overflow-hidden [&_a]:text-blue-500 [&_a]:underline [&_a]:hover:text-blue-600 [&_blockquote]:my-4 [&_blockquote]:border-l-4 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-muted-foreground [&_code]:rounded [&_code]:bg-muted/50 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:text-sm [&_code]:before:content-none [&_code]:after:content-none [&_code]:dark:bg-muted/30 [&_li]:my-1 [&_ol]:my-2 [&_p]:my-2 [&_pre]:my-4 [&_pre]:w-full [&_pre]:max-w-full [&_pre]:overflow-x-auto [&_pre]:break-words [&_pre]:rounded-lg [&_pre]:border [&_pre]:border-border/50 [&_pre]:bg-[#1a1a1a] [&_pre]:p-4 [&_pre_code]:whitespace-pre-wrap [&_pre_code]:break-words [&_pre_code]:!bg-transparent [&_pre_code]:!p-0 [&_ul]:my-2'>
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeHighlight, rehypeRaw]}
                components={{
                  h1: ({ children }) => (
                    <h1 className='text-xl font-bold text-white mb-3 mt-4 first:mt-0'>
                      {children}
                    </h1>
                  ),
                  h2: ({ children }) => (
                    <h2 className='text-lg font-semibold text-white mb-2 mt-3 first:mt-0'>
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className='text-md font-medium text-white mb-2 mt-3 first:mt-0'>
                      {children}
                    </h3>
                  ),
                  p: ({ children }) => (
                    <p className='text-white mb-2 last:mb-0'>{children}</p>
                  ),
                  ul: ({ children }) => (
                    <ul className='text-white mb-2 pl-4 space-y-1 list-disc'>
                      {children}
                    </ul>
                  ),
                  ol: ({ children }) => (
                    <ol className='text-white mb-2 pl-4 space-y-1 list-decimal'>
                      {children}
                    </ol>
                  ),
                  li: ({ children }) => (
                    <li className='text-white'>{children}</li>
                  ),
                  code: ({ className, children, ...props }: any) => {
                    const match = /language-(\w+)/.exec(className || '');
                    const inline = !match;
                    return !inline && match ? (
                      <code className={className} {...props}>
                        {children}
                      </code>
                    ) : (
                      <code
                        className='bg-black/50 text-blue-300 px-1 py-0.5 rounded text-sm font-mono'
                        {...props}
                      >
                        {children}
                      </code>
                    );
                  },
                  blockquote: ({ children }) => (
                    <blockquote className='border-l-4 border-blue-400 pl-4 my-2 text-gray-300 italic'>
                      {children}
                    </blockquote>
                  ),
                  strong: ({ children }) => (
                    <strong className='font-semibold text-white'>
                      {children}
                    </strong>
                  ),
                  em: ({ children }) => (
                    <em className='italic text-gray-300'>{children}</em>
                  ),
                  a: ({ href, children }) => (
                    <a
                      href={href}
                      className='text-blue-400 hover:text-blue-300 underline'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      {children}
                    </a>
                  ),
                  table: ({ children }) => (
                    <div className='my-2 overflow-x-auto'>
                      <table className='min-w-full border border-white/20 rounded-md'>
                        {children}
                      </table>
                    </div>
                  ),
                  th: ({ children }) => (
                    <th className='border border-white/20 px-3 py-2 bg-white/10 text-white font-medium text-left'>
                      {children}
                    </th>
                  ),
                  td: ({ children }) => (
                    <td className='border border-white/20 px-3 py-2 text-white'>
                      {children}
                    </td>
                  ),
                }}
              >
                {content}
              </ReactMarkdown>
              {isStreaming && (
                <span className='inline-block w-2 h-4 bg-white/60 animate-pulse ml-1' />
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};
