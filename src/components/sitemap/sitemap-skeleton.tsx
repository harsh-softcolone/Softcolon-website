export function SitemapSkeleton() {
  return (
    <div className='space-y-8'>
      {/* Search skeleton */}
      <div className='h-14 bg-gray-800/50 rounded-xl animate-pulse' />

      {/* Sections skeleton */}
      {[1, 2].map((section) => (
        <div key={section} className='space-y-4'>
          <div className='flex items-center gap-3'>
            <div className='h-6 w-6 bg-gray-800 rounded animate-pulse' />
            <div className='h-7 w-32 bg-gray-800 rounded animate-pulse' />
            <div className='ml-auto h-6 w-16 bg-gray-800 rounded-full animate-pulse' />
          </div>

          <div className='space-y-3'>
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className='p-4 bg-gray-900/30 border border-gray-800 rounded-lg'
              >
                <div className='h-5 w-3/4 bg-gray-800 rounded animate-pulse mb-2' />
                <div className='h-4 w-full bg-gray-800 rounded animate-pulse mb-1' />
                <div className='h-4 w-2/3 bg-gray-800 rounded animate-pulse mb-3' />
                <div className='flex gap-4'>
                  <div className='h-3 w-20 bg-gray-800 rounded animate-pulse' />
                  <div className='h-3 w-16 bg-gray-800 rounded animate-pulse' />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
