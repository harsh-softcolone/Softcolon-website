'use client';

import { useEffect, useState } from 'react';
import { Home, FileText } from 'lucide-react';
import type { HashnodePost } from '@/interface';
import { SitemapSkeleton } from '@/components/sitemap/sitemap-skeleton';
import { SitemapSearch } from '@/components/sitemap/sitemap-search';
import { SitemapSection } from '@/components/sitemap/sitemap-section';

interface BlogListResponse {
  success: boolean;
  posts: HashnodePost[];
  pageInfo?: {
    hasNextPage: boolean;
    endCursor: string;
  };
}

export default function SitemapPage() {
  const [posts, setPosts] = useState<HashnodePost[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchAllPosts = async () => {
    let allPosts: HashnodePost[] = [];
    let after: string | undefined = undefined;

    try {
      while (true) {
        const url: string = after
          ? `/api/blog-list?after=${encodeURIComponent(after)}`
          : '/api/blog-list';

        const res: Response = await fetch(url);
        const data: BlogListResponse = await res.json();

        if (!data.success) break;

        allPosts = [...allPosts, ...data.posts];
        if (!data.pageInfo?.hasNextPage) break;
        after = data.pageInfo.endCursor;
      }

      setPosts(allPosts);
    } catch (error) {
      console.error('Error fetching sitemap data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllPosts();
  }, []);

  // Filter posts based on search term
  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (post.brief &&
        post.brief.toLowerCase().includes(searchTerm.toLowerCase())),
  );

  // Static pages
  const staticPages = [
    {
      href: '/',
      title: 'Home',
      description:
        'Welcome to our AI solutions platform - creating smarter, faster and better next-gen solutions',
    },
    {
      href: '/about-us',
      title: 'About Us',
      description:
        "Discover Softcolon's journey in building intelligent AI solutions. From our vision to become a global leader in AI-powered development to our proven 6-step workflow, explore how our 7+ years of excellence, 50+ happy clients, and 30+ AI specialists deliver transformative solutions across FinTech, Healthcare, EdTech, and 6+ other industries. Learn about our achievements, human-centric AI approach, and why we're the top choice for scalable, ethical AI development.",
    },
    {
      href: '/contact-us',
      title: 'Contact Us',
      description:
        'Get in touch with Softcolon - we are always here to help you with your AI needs',
    },
    {
      href: '/career',
      title: 'Career',
      description:
        'Join the Softcolon team - we are always looking for talented individuals to join our team',
    },
    {
      href: '/our-team',
      title: 'Our Team',
      description:
        'Meet the team behind Softcolon - a group of developers, designers, and entrepreneurs who are passionate about creating smarter, faster and better next-gen solutions',
    },
  ].filter(
    (page) =>
      page.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      page.description.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  // Convert posts to link format
  const blogLinks = filteredPosts.map((post) => ({
    href: `/blog/${post.slug}`,
    title: post.title,
    description: post.brief,
    publishedAt: post.publishedAt,
  }));

  const allFilteredPages = staticPages.length + filteredPosts.length;

  return (
    <main className='min-h-screen bg-gradient-to-br from-[#0d0d0d] via-[#0d0d0d] to-[#0c3c54]'>
      <div className='max-w-4xl mx-auto py-12 px-4'>
        {/* Header */}
        <div className='text-center mb-12'>
          <h1 className='text-4xl font-bold text-white mb-4'>
            Site{' '}
            <span className='bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent'>
              Navigation
            </span>
          </h1>
          <p className='text-gray-300 text-lg max-w-2xl mx-auto mt-4 sm:mt-10'>
            Explore all pages and content on our platform. Use the search below
            to quickly find what you&apos;re looking for.
          </p>

          {!loading && (
            <div className='flex items-center justify-center gap-6 mt-6 text-sm text-gray-500'>
              <div className='flex items-center gap-2'>
                <div className='w-2 h-2 bg-blue-500 rounded-full'></div>
                <span>{posts.length} Blog Posts</span>
              </div>
              <div className='flex items-center gap-2'>
                <div className='w-2 h-2 bg-purple-500 rounded-full'></div>
                <span>{staticPages.length} Static Pages</span>
              </div>
            </div>
          )}
        </div>

        {loading ? (
          <SitemapSkeleton />
        ) : (
          <>
            <SitemapSearch
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              totalPosts={posts.length + 1} // +1 for home page
              filteredCount={allFilteredPages}
            />

            <div className='space-y-8'>
              <SitemapSection
                title='Main Pages'
                description='Core pages and navigation'
                links={staticPages}
                icon={<Home className='h-6 w-6' />}
              />

              <SitemapSection
                title='Blog Posts'
                description='Latest articles and insights'
                links={blogLinks}
                icon={<FileText className='h-6 w-6' />}
              />

              {searchTerm && allFilteredPages === 0 && (
                <div className='text-center py-12'>
                  <div className='text-gray-400 mb-4'>
                    <FileText className='h-12 w-12 mx-auto mb-4 opacity-50' />
                    <p className='text-lg'>
                      No pages found for &quot;{searchTerm}&quot;
                    </p>
                    <p className='text-sm'>Try adjusting your search terms</p>
                  </div>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </main>
  );
}
