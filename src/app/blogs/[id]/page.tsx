import Footer from '@/components/footer/footer';
import React from 'react';
import BlogHeader from '@/components/pages/blogs/blog-header';
import './blog-styles.css';
import BlogsSection from '@/components/pages/general/blogs-section';
import MarkdownRenderer from '@/components/pages/blogs/markdown-renderer';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getServerSideBlogPost } from './actions';

// Enable static generation and revalidation
export const revalidate = 3600; // Revalidate every hour

// Optimize for performance
export const fetchCache = 'force-cache';

interface BlogPageProps {
  params: Promise<{
    id: string;
  }>;
}

// Generate metadata for SEO (server-side)
export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  try {
    const resolvedParams = await params;
    const post = await getServerSideBlogPost(resolvedParams.id);

    if (!post?.publication?.post) {
      return {
        title: 'Blog Not Found | Softcolon',
        description: 'The requested blog post could not be found.',
      };
    }

    const blogPost = post.publication.post;
    const cleanBrief =
      blogPost.brief?.replace(/<[^>]*>/g, '')?.substring(0, 160) ||
      'Read this insightful article about AI, technology, and innovation from Softcolon.';

    return {
      title: `${blogPost.title} | Softcolon Blog`,
      description: cleanBrief,
      openGraph: {
        title: `${blogPost.title} | Softcolon Blog`,
        description: cleanBrief,
        type: 'article',
        images: blogPost.coverImage?.url ? [blogPost.coverImage.url] : [],
        url: `https://softcolon.com/blogs/${resolvedParams.id}`,
      },
      twitter: {
        card: 'summary_large_image',
        title: `${blogPost.title} | Softcolon Blog`,
        description: cleanBrief,
        images: blogPost.coverImage?.url ? [blogPost.coverImage.url] : [],
      },
    };
  } catch {
    return {
      title: 'Blog Not Found | Softcolon',
      description: 'The requested blog post could not be found.',
    };
  }
}

export default async function BlogPage({ params }: BlogPageProps) {
  // Fetch post data on server-side
  const resolvedParams = await params;

  try {
    const postData = await getServerSideBlogPost(resolvedParams.id);

    if (!postData?.publication?.post) {
      notFound(); // This will show the 404 page
    }

    const post = postData.publication.post;

    return (
      <div className='relative overflow-x-hidden bg-black text-white font-[family-name:var(--font-ibm-plex-sans)] pt-[64px]'>
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
  } catch (error) {
    console.error('Error fetching blog post:', error);
    notFound();
  }
}
