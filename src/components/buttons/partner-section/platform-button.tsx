import { cn } from '@/lib/utils';
import RotateArrowButton from '../rotate-arrow-button';
import { Platform } from '@/interface';

// Platform button for desktop view
export const PlatformButton = ({
  platform,
  isActive,
  onClick,
}: {
  platform: Platform;
  isActive: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'group w-full cursor-pointer flex items-center justify-between p-5 rounded-[20px] transition-colors duration-400 border-[1px] border-[#2E2E2E]',
        isActive
          ? 'bg-[#1BA1E3] text-white'
          : 'bg-transparent text-white hover:bg-[#1BA1E3]',
      )}
    >
      <div className='flex items-center gap-4 text-2xl font-medium leading-normal font-ibm-plex-sans'>
        <span>{platform.number}</span>
        <span>{platform.title}</span>
      </div>

      <RotateArrowButton
        buttonClassName='group-hover:bg-[#1C1C1C]'
        imageClassName='transition-transform duration-500 ease-in-out'
        isActive={isActive}
      />
    </button>
  );
};
