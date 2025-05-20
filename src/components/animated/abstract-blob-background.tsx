import { cn } from '@/lib/utils';

const AbstractBlobBackground = ({
  fill = '#1FB3FD',
  className,
}: {
  fill?: string;
  className?: string;
}) => {
  return (
    <>
      <div
        className={cn(
          '-z-10 w-md h-full flex items-center justify-center blur-[200px] absolute',
          className,
        )}
      >
        <svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'>
          <path
            fill={fill}
            d='M48.9,-27.6C58.5,-11.7,57.9,10.7,48,26.7C38.2,42.7,19.1,52.3,0.6,52C-17.9,51.6,-35.8,41.3,-48.8,23.5C-61.7,5.7,-69.8,-19.6,-60.8,-35.1C-51.9,-50.6,-25.9,-56.3,-3.1,-54.5C19.7,-52.7,39.4,-43.4,48.9,-27.6Z'
            transform='translate(100 100)'
          />
        </svg>
      </div>
    </>
  );
};

export default AbstractBlobBackground;
