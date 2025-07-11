import React from 'react';
import { useAnimatedSuggestions } from '@/hooks/useAnimatedSuggestions';

interface AnimatedPlaceholderProps {
  show: boolean;
  defaultText?: string;
  className?: string;
}

const AnimatedPlaceholder: React.FC<AnimatedPlaceholderProps> = ({
  show,
  defaultText,
  className = '',
}) => {
  const { currentSuggestion, isTyping } = useAnimatedSuggestions();

  if (!show) return null;

  return (
    <div
      className={`absolute inset-0 pointer-events-none flex items-center px-4 ${className}`}
    >
      <span className='text-white/50 font-normal text-sm md:text-lg leading-normal font-ibm-plex-sans'>
        {currentSuggestion || defaultText}
        {isTyping && <span className='animate-pulse'>|</span>}
      </span>
    </div>
  );
};

export default AnimatedPlaceholder;
