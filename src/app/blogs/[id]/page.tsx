'use client';

import Footer from '@/components/footer/footer';
import Loader from '@/components/shared/loaders';
import { getSingleHashnodePost } from '@/lib/hashnode';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { HashNodeSinglePost } from '@/interface';
import BlogHeader from '@/components/pages/blogs/blog-header';
import { codeBlockStyles } from './blog-style';
import BlogsSection from '@/components/pages/general/blogs-section';
import MarkdownRenderer from '@/components/pages/blogs/markdown-renderer';

const BlogPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState<HashNodeSinglePost | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      const post = await getSingleHashnodePost(id as string);
      console.log(post.publication.post);
      setPost(post.publication.post);
    };
    fetchPost();
  }, [id]);

  // Update meta tags when post loads
  useEffect(() => {
    if (post) {
      const cleanBrief =
        post.brief?.replace(/<[^>]*>/g, '')?.substring(0, 160) ||
        'Read this insightful article about AI, technology, and innovation from Softcolon.';

      document.title = `${post.title} | Softcolon Blog`;

      // Update meta description
      let metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', cleanBrief);
      } else {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        metaDescription.setAttribute('content', cleanBrief);
        document.head.appendChild(metaDescription);
      }

      // Update Open Graph meta tags
      const updateMetaTag = (property: string, content: string) => {
        let metaTag = document.querySelector(`meta[property="${property}"]`);
        if (metaTag) {
          metaTag.setAttribute('content', content);
        } else {
          metaTag = document.createElement('meta');
          metaTag.setAttribute('property', property);
          metaTag.setAttribute('content', content);
          document.head.appendChild(metaTag);
        }
      };

      updateMetaTag('og:title', `${post.title} | Softcolon Blog`);
      updateMetaTag('og:description', cleanBrief);
      updateMetaTag('og:type', 'article');
      if (post.coverImage?.url) {
        updateMetaTag('og:image', post.coverImage.url);
      }
      updateMetaTag('og:url', `https://softcolon.com/blogs/${id}`);

      // Update Twitter Card meta tags
      const updateTwitterTag = (name: string, content: string) => {
        let metaTag = document.querySelector(`meta[name="${name}"]`);
        if (metaTag) {
          metaTag.setAttribute('content', content);
        } else {
          metaTag = document.createElement('meta');
          metaTag.setAttribute('name', name);
          metaTag.setAttribute('content', content);
          document.head.appendChild(metaTag);
        }
      };

      updateTwitterTag('twitter:card', 'summary_large_image');
      updateTwitterTag('twitter:title', `${post.title} | Softcolon Blog`);
      updateTwitterTag('twitter:description', cleanBrief);
      if (post.coverImage?.url) {
        updateTwitterTag('twitter:image', post.coverImage.url);
      }
    }
  }, [post, id]);

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
                <MarkdownRenderer markdown={post.content.markdown} />
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
