'use client';

import Footer from '@/components/footer/footer';
import Loader from '@/components/shared/loaders';
import { getSingleHashnodePost } from '@/lib/hashnode';
import { useParams } from 'next/navigation';
import React, {
  ComponentPropsWithoutRef,
  useEffect,
  useState,
  useRef,
} from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';
import { HashNodeSinglePost } from '@/interface';
import BlogHeader from '@/components/pages/blogs/blog-header';
import 'highlight.js/styles/github-dark.css';
import { codeBlockStyles } from './blog-style';
import BlogsSection from '@/components/pages/general/blogs-section';

const BlogPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState<HashNodeSinglePost | null>(null);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  console.log(post);

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

  useEffect(() => {
    const fetchPost = async () => {
      const post = await getSingleHashnodePost(id as string);
      console.log(post.publication.post);
      setPost(post.publication.post);
    };
    fetchPost();
  }, [id]);

  return (
    <div className='relative overflow-x-hidden bg-black text-white font-[family-name:var(--font-ibm-plex-sans)]'>
      <style jsx global>{`
        ${codeBlockStyles}
      `}</style>

      {post ? (
        <div className=''>
          <div className='max-w-7xl mx-auto'>
            <BlogHeader post={post} />
            <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 lg:pb-12'>
              <div
                className='prose prose-lg dark:prose-invert max-w-none overflow-hidden [&_a]:text-blue-400 [&_a]:underline [&_a]:hover:text-blue-300 [&_blockquote]:my-8 [&_blockquote]:border-l-4 [&_blockquote]:border-[#3f3f46] [&_blockquote]:pl-6 [&_blockquote]:italic [&_blockquote]:text-gray-300 [&_code]:rounded [&_code]:bg-[#24292e] [&_code]:px-2 [&_code]:py-1 [&_code]:text-sm [&_code]:before:content-none [&_code]:after:content-none [&_code]:text-[#EEEEEE] [&_li]:my-2 [&_ol]:my-6 [&_p]:my-6 [&_pre]:my-8 [&_pre]:w-full [&_pre]:max-w-full [&_pre]:overflow-x-auto [&_pre]:break-words [&_pre]:rounded-lg [&_pre]:border [&_pre]:border-gray-700 [&_pre]:bg-[#1a1a1a] [&_pre]:p-6 [&_pre_code]:whitespace-pre-wrap [&_pre_code]:break-words [&_pre_code]:!bg-transparent [&_pre_code]:!p-0 [&_ul]:my-6 [&_table]:my-8 [&_table]:w-full [&_table]:border-collapse [&_thead]:bg-[#24292e] [&_th]:border [&_th]:border-gray-600 [&_th]:p-3 [&_th]:text-left [&_th]:font-semibold [&_th]:text-white [&_td]:border [&_td]:border-gray-600 [&_td]:p-3 [&_td]:text-gray-300 [&_tbody_tr:nth-child(even)]:bg-gray-900/30'
                style={{
                  color: '#d1d5db',
                  overflowWrap: 'break-word',
                  wordBreak: 'break-word',
                  width: '100%',
                  maxWidth: '100%',
                  fontFamily: 'var(--font-ibm-plex-sans)',
                  lineHeight: '1.7',
                }}
              >
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeHighlight]}
                  components={{
                    pre: CodeBlock,
                    hr: ({ ...props }) => <hr className='my-8' {...props} />,
                    li: ({ children, ...props }) => (
                      <li
                        className='text-white ml-2 text-lg font-ibm-plex-sans after:content-[""] after:w-2 after:h-2 after:bg-white after:rounded-full after:inline-block after:mr-2 relative after:absolute after:left-0 after:top-1/2 after:-translate-y-1/2 pl-6'
                        {...props}
                      >
                        {children}
                      </li>
                    ),
                    a: ({ children, ...props }) => (
                      <a
                        className='!text-white !underline font-ibm-plex-sans'
                        target='_blank'
                        {...props}
                      >
                        {children}
                      </a>
                    ),
                    p: ({ children, ...props }) => (
                      <p
                        className='text-white text-lg font-ibm-plex-sans my-6'
                        {...props}
                      >
                        {children}
                      </p>
                    ),
                    // h1: ({ children, ...props }) => (
                    //   <h1 className='text-2xl font-bold' {...props}>
                    //     {children}
                    //   </h1>
                    // ),
                    h2: ({ children, ...props }) => (
                      <h2
                        className='text-3xl font-semibold font-ibm-plex-sans mt-14 mb-8 text-white'
                        {...props}
                      >
                        {children}
                      </h2>
                    ),
                    h3: ({ children, ...props }) => (
                      <h3
                        className='text-2xl  mt-10 mb-4 font-bold font-ibm-plex-sans text-white'
                        {...props}
                      >
                        {children}
                      </h3>
                    ),
                    // h4: ({ children, ...props }) => (
                    //   <h4 className='text-base font-bold' {...props}>
                    //     {children}
                    //   </h4>
                    // ),
                    // h5: ({ children, ...props }) => (
                    //   <h5 className='text-sm font-bold' {...props}>
                    //     {children}
                    //   </h5>
                    // ),
                    // h6: ({ children, ...props }) => (
                    //   <h6 className='text-xs font-bold' {...props}>
                    //     {children}
                    //   </h6>
                    // ),
                    code: ({
                      className,
                      children,
                      ...props
                    }: ComponentPropsWithoutRef<'code'> & {
                      inline?: boolean;
                    }) => {
                      const match = /language-(\w+)/.exec(className || '');
                      const isInline = 'inline' in props ? props.inline : false;
                      return !isInline && match ? (
                        <code
                          className={`${className} whitespace-pre-wrap break-words text-gray-300 font-ibm-plex-sans !text-[16px] sm:!text-[20px] leading-relaxed`}
                          {...props}
                        >
                          {children}
                        </code>
                      ) : (
                        <code
                          className='break-words font-ibm-plex-sans rounded bg-[#24292E] px-2 py-1 !text-[16px] sm:!text-[20px] text-[#EEEEEE]'
                          {...props}
                        >
                          {children}
                        </code>
                      );
                    },
                  }}
                >
                  {post.content.markdown}
                </ReactMarkdown>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className='min-h-[50vh] flex items-center justify-center bg-black'>
          <Loader />
        </div>
      )}
      <BlogsSection
        title={
          <h3 className='text-white mb-1 text-2xl font-medium font-ibm-plex-sans text-center'></h3>
        }
        isRemoveHeader
        isMoreBlogs={true}
        sectionClassName='mt-0 mb-10'
      />
      <Footer />
    </div>
  );
};

export default BlogPage;
