import { Platform } from '@/interface';
import { cn } from '@/lib/utils';
import RotateArrowButton from '../rotate-arrow-button';

// Platform button for mobile view
export const PlatformButtonMobile = ({
  platform,
  isActive,
  onClick,
}: {
  platform: Platform;
  isActive: boolean;
  onClick: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        'group w-full flex items-center justify-between px-6 py-4 rounded-[20px] transition-all duration-300 border-[1px] border-[#2E2E2E]',
        isActive
          ? 'bg-[#1BA1E3] text-white'
          : 'bg-transparent text-white hover:bg-[#1BA1E3]',
      )}
    >
      <div className='flex items-center gap-4'>
        <span className='text-xl font-medium'>{platform.number}</span>
        <span className='text-xl'>{platform.title}</span>
      </div>

      {isActive ? (
        <RotateArrowButton
          buttonClassName='bg-black/20 rotate-45'
          imageClassName='rotate-45'
        />
      ) : (
        <RotateArrowButton
          buttonClassName='bg-black/20 group-hover:bg-gradient-to-r group-hover:from-[#1f84fc] group-hover:to-[#c846e4]'
          imageClassName='group-hover:rotate-45'
        />
      )}
    </div>
  );
};
