import React from 'react';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';

interface CustomDropdownProps {
  label?: string;
  error?: string;
  required?: boolean;
  parentClassName?: string;
  triggerClassName?: string;
  contentClassName?: string;
  options: {
    label: string;
    value: string;
  }[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
}

const CustomDropdown = React.forwardRef<HTMLButtonElement, CustomDropdownProps>(
  (
    {
      label,
      error,
      required,
      parentClassName,
      triggerClassName,
      contentClassName,
      options,
      value,
      onChange,
      placeholder = 'Select an option',
    },
    ref,
  ) => {
    const selectedOption = options.find((option) => option.value === value);

    return (
      <div className={cn('w-full font-ibm-plex-sans', parentClassName)}>
        {label && (
          <label className='block text-white text-base'>
            {label}
            {required && <span className='text-red-500 ml-1'>*</span>}
          </label>
        )}
        <DropdownMenu>
          <DropdownMenuTrigger
            ref={ref}
            className={cn(
              'w-full flex items-center justify-between bg-transparent text-lg border-0 border-b border-[#31383C] rounded-none shadow-none text-white placeholder:text-[#6F6F70] py-2.5 px-0 font-ibm-plex-sans transition-colors',
              'focus:border-white py-1 focus-visible:outline-0 focus-visible:ring-0 focus-visible:ring-offset-0',
              error && 'border-red-500 focus:border-red-500',
              triggerClassName,
            )}
          >
            <span className={!selectedOption ? 'text-[#6F6F70]' : ''}>
              {selectedOption ? selectedOption.label : placeholder}
            </span>
            <ChevronDown className='h-4 w-4' />
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className={cn(
              'bg-[#1A1A1A] border border-[#31383C] text-white',
              contentClassName,
            )}
          >
            {options.map((option) => (
              <DropdownMenuItem
                key={option.value}
                className='hover:bg-[#31383C] cursor-pointer'
                onClick={() => onChange?.(option.value)}
              >
                {option.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        {error && (
          <p className='mt-1 text-sm text-red-500 font-medium font-ibm-plex-sans'>
            {error}
          </p>
        )}
      </div>
    );
  },
);

CustomDropdown.displayName = 'CustomDropdown';

export default CustomDropdown;
