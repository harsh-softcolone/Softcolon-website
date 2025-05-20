import { Badge } from '@/components/ui/badge';
import { Sparkle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import React from 'react';
import { Button } from '@/components/ui/button';
const AIGenerationInput = () => {
  const tags = ['Business', 'AI Strategy', 'Intelligence', 'Technology'];

  return (
    <div className='flex flex-col items-center justify-center space-y-7.5'>
      <p className='text-lg lg:text-xl text-center text-paragraph font-normal leading-normal font-ibm-plex-sans'>
        Turn simple imagination into full proof plan with our lightning-fast AI
        content engine.
      </p>

      <div className='w-full max-w-3xl space-y-6'>
        {/* Search bar and generate button */}
        <div className='flex w-full items-center space-x-2'>
          <div className='relative flex-1 max-w-[600px] mx-auto'>
            <Input
              placeholder='Describe your idea and get ready to make it live.'
              className='w-full bg-[#242E34] border-[#2a2e35] text-white h-14 pl-4 pr-4 rounded-full font-ibm-plex-sans font-normal text-lg leading-normal placeholder:text-[#56636C] placeholder:font-normal placeholder:text-lg placeholder:leading-normal placeholder:font-ibm-plex-sans'
            />
            <Button className='absolute right-3 h-10 text-white rounded-full px-2 py-2 top-1/2 -translate-y-1/2 gradient-bg hover:bg-amber-300 font-ibm-plex-sans font-medium text-lg leading-normal transition-all duration-300 cursor-pointer w-fit'>
              <span className='hidden lg:block'>Generate</span>
              <Sparkle className='text-white' />
            </Button>
          </div>
        </div>

        {/* Tags */}
        <div className='flex flex-wrap gap-2 max-w-[600px] mx-auto justify-center'>
          <div className='flex flex-wrap gap-2 items-center'>
            {/* Show only 2 tags on mobile and all on larger screens */}
            {tags.slice(0, 2).map((tag, index) => (
              <Badge
                key={index}
                variant='outline'
                className='border-[#2a2e35] bg-transparent cursor-pointer text-sm font-ibm-plex-sans text-white py-2 px-4 rounded-full transition-colors duration-200 hover:bg-[#2a2e35] hover:text-white hover:border-gray-500'
              >
                {tag}
              </Badge>
            ))}

            {/* Show remaining tags only on larger screens */}
            {tags.slice(2).map((tag, index) => (
              <Badge
                key={index + 2}
                variant='outline'
                className='border-[#2a2e35] bg-transparent cursor-pointer text-sm font-ibm-plex-sans text-white py-2 px-4 rounded-full hidden sm:inline-block transition-colors duration-200 hover:bg-[#2a2e35] hover:text-white hover:border-gray-500'
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIGenerationInput;
