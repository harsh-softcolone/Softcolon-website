'use client';

import React, { ComponentPropsWithoutRef, useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';
import 'highlight.js/styles/github-dark.css';

interface MarkdownRendererProps {
  markdown: string;
}

const MarkdownRenderer = ({ markdown }: MarkdownRendererProps) => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedCode(text);
      setTimeout(() => setCopiedCode(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const CodeBlock = ({
    children,
    ...props
  }: ComponentPropsWithoutRef<'pre'>) => {
    const preRef = useRef<HTMLPreElement>(null);

    const handleCopy = () => {
      if (preRef.current) {
        const textContent = preRef.current.textContent || '';
        copyToClipboard(textContent);
      }
    };

    return (
      <div className='relative group pt-6 sm:pt-[64px]'>
        <pre
          ref={preRef}
          className='relative bg-[#1a1a1a] border border-gray-700 rounded-lg overflow-x-auto my-8 p-6'
          {...props}
        >
          {children}
        </pre>
        <button
          onClick={handleCopy}
          className='absolute top-4 cursor-pointer right-4 p-2 rounded-md bg-[#24292e] hover:bg-gray-700 border border-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200'
          title='Copy code'
        >
          {copiedCode === preRef.current?.textContent ? (
            <svg
              className='w-4 h-4 text-green-400'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M5 13l4 4L19 7'
              />
            </svg>
          ) : (
            <svg
              className='w-4 h-4 text-gray-300'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z'
              />
            </svg>
          )}
        </button>
      </div>
    );
  };

  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeHighlight]}
      components={{
        pre: CodeBlock,
        h2: ({ children, ...props }) => (
          <h2
            className='text-3xl font-semibold mt-14 mb-8 text-white'
            {...props}
          >
            {children}
          </h2>
        ),
        h3: ({ children, ...props }) => (
          <h3 className='text-2xl mt-10 mb-4 font-bold text-white' {...props}>
            {children}
          </h3>
        ),
        p: ({ children, ...props }) => (
          <p className='text-white text-lg my-6' {...props}>
            {children}
          </p>
        ),
        a: ({ children, ...props }) => (
          <a
            className='!text-white !underline'
            target='_blank'
            rel='noopener noreferrer'
            {...props}
          >
            {children}
          </a>
        ),
        li: ({ children, ...props }) => (
          <li className='text-white ml-2 text-lg relative pl-6' {...props}>
            {children}
          </li>
        ),
        code: ({
          className,
          children,
          ...props
        }: ComponentPropsWithoutRef<'code'> & { inline?: boolean }) => {
          const match = /language-(\w+)/.exec(className || '');
          const isInline = 'inline' in props ? props.inline : false;

          return !isInline && match ? (
            <code
              className={`${className} whitespace-pre-wrap break-words text-gray-300`}
              {...props}
            >
              {children}
            </code>
          ) : (
            <code
              className='break-words rounded bg-[#24292E] px-2 py-1 text-[#EEEEEE]'
              {...props}
            >
              {children}
            </code>
          );
        },
      }}
    >
      {markdown}
    </ReactMarkdown>
  );
};

export default MarkdownRenderer;
