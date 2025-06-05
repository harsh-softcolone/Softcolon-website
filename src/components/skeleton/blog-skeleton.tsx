const BlogSkeleton = () => {
  return (
    <div className='p-5 rounded-[20px] border border-[#464646] animate-pulse flex flex-col h-full'>
      <div>
        {/* Image skeleton - matches the aspect-video and responsive heights */}
        <div className='relative aspect-video w-full h-[220px] sm:h-[292px] overflow-hidden'>
          <div className='w-full h-full bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 bg-[length:200%_100%] animate-[shimmer_2s_infinite] rounded-lg'></div>
        </div>

        {/* Text content skeleton */}
        <div className='py-4 space-y-3'>
          {/* Date skeleton */}
          <div className='h-[21px] bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 bg-[length:200%_100%] animate-[shimmer_2s_infinite] rounded w-24'></div>

          {/* Title skeleton - two lines to match line-clamp-2 */}
          <div className='space-y-2'>
            <div className='h-6 md:h-[30px] bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 bg-[length:200%_100%] animate-[shimmer_2s_infinite] rounded w-full'></div>
            <div className='h-6 md:h-[30px] bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 bg-[length:200%_100%] animate-[shimmer_2s_infinite] rounded w-3/4'></div>
          </div>
        </div>
      </div>

      {/* Read more link skeleton - matches mt-auto positioning */}
      <div className='flex items-center gap-2 mt-auto'>
        <div className='h-4 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 bg-[length:200%_100%] animate-[shimmer_2s_infinite] rounded w-32'></div>
        <div className='w-4 h-4 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 bg-[length:200%_100%] animate-[shimmer_2s_infinite] rounded'></div>
      </div>
    </div>
  );
};

export default BlogSkeleton;
