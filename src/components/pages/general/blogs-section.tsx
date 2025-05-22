import SectionHeader from '@/components/header/section-header';
import { ArrowRight, ArrowRightIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const blogsContent = [
  {
    image: '/images/blogs/robot.svg',
    alt: 'Robot',
    date: 'August 6, 2022',
    title: 'Trends, Insights, and Innovations Shaping Tomorrow',
    tag: ['Image generate', 'AI support'],
  },
  {
    image: '/images/blogs/ai-technology.svg',
    alt: 'AI Technology',
    date: 'August 6, 2022',
    title: 'Transforming Business Operations with AI Technology',
    tag: ['Image generate', 'AI support'],
  },
  {
    image: '/images/blogs/ai-solution.svg',
    alt: 'AI Solution',
    date: 'August 6, 2022',
    title: 'Revolutionizing Business Efficiency with AI Solutions',
    tag: ['Image generate', 'AI support'],
  },
];

const BlogsSection = () => {
  return (
    <section className='pt-16 pb-25 relative overflow-hidden bg-[#1b1b1b]'>
      <div className='max-w-[1396px] mx-auto flex flex-col px-4 md:px-8 items-center justify-center'>
        <SectionHeader name='Blogs' />
        <div className='space-y-8 mt-5'>
          <h1 className='text-[28px] sm:text-4xl md:text-5xl text-center font-normal font-hanuman text-white leading-tight transition-all duration-300'>
            Keep your finger on the pulse of <br className='hidden sm:block' />
            <span className='gradient-color'> trends, tools</span> and
            <span className='gradient-color'> innovations.</span>
          </h1>

          <div className='flex justify-center'>
            <Link
              aria-label='read more'
              href='/'
              className='text-[#1BA1E3] font-medium uppercase text-[20px] hover:text-white transition-all duration-300 ease-in-out leading-normal font-ibm-plex-sans flex gap-2 items-center group relative'
            >
              Read More
              <ArrowRightIcon className='w-6 h-6 text-[#1BA1E3] group-hover:translate-x-1  group-hover:text-white transition-all duration-300 ease-in-out' />
              <span className='absolute -bottom-2 left-0 w-0 h-[1px] bg-white transition-all duration-300 ease-in-out group-hover:w-full'></span>
            </Link>
          </div>

          <div className='font-ibm-plex-sans grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[24px] pt-2 md:pt-6'>
            {blogsContent.map((blog, index) => (
              <div
                key={index}
                className='p-5 rounded-[20px] border border-[#464646] space-y-6 group hover:border-gray-500 transition-all duration-300'
              >
                <div className='relative overflow-hidden rounded-lg'>
                  {/* Image container with hover effect */}
                  <div className='relative aspect-video w-full h-[220px] sm:h-[292px] overflow-hidden'>
                    <Image
                      src={blog.image || '/placeholder.svg'}
                      alt={blog.alt}
                      width={250}
                      height={292}
                      className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                    />
                    {/* Overlay that appears on hover */}
                    <div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300 flex items-center justify-center'></div>
                  </div>
                </div>
                <div className='text-white'>
                  <p className='text-base leading-[21px] font-[500] text-[#c0c0c0]'>
                    {blog.date}
                  </p>
                  <p className='pt-2 text-xl md:text-2xl leading-[25px] font-[500] text-white'>
                    {blog.title}
                  </p>
                  <div className='py-4 flex flex-wrap gap-4'>
                    {blog.tag.map((tag, tagIndex) => (
                      <p
                        key={tagIndex}
                        className='px-3 py-[6px] bg-[#292929] rounded-full text-sm text-white'
                      >
                        {tag}
                      </p>
                    ))}
                  </div>
                  <Link
                    aria-label='read more'
                    href=''
                    className='flex relative items-center gap-2 text-[#1BA1E3] font-medium text-md hover:text-white transition-all duration-300 group w-fit'
                  >
                    READ MORE
                    <ArrowRight className='w-4 h-4 -rotate-45 group-hover:translate-x-1 transition-transform duration-300' />
                    <span className='absolute -bottom-1 left-0 w-[84%] h-[1px] bg-[#1BA1E3] transition-all duration-300 ease-in-out group-hover:w-full group-hover:bg-white'></span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;
