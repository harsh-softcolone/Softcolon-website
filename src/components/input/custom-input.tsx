'use client';

import * as React from 'react';
import { Input } from '@/components/ui/input'; // shadcn Input
import { cn } from '@/lib/utils';

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  required?: boolean;
  parentClassName?: string;
}

const CustomInput = React.forwardRef<HTMLInputElement, CustomInputProps>(
  ({ label, error, required, className, parentClassName, ...props }, ref) => {
    return (
      <div className={cn('mb-6 w-full font-ibm-plex-sans', parentClassName)}>
        {label && (
          <label className='block text-white text-base'>
            {label}
            {required && <span className='text-red-500 ml-1'>*</span>}
          </label>
        )}

        <Input
          ref={ref}
          className={cn(
            'bg-transparent text-lg border-0 border-b border-[#31383C] rounded-none shadow-none text-white placeholder:text-[#6F6F70] py-2.5 px-0 font-ibm-plex-sans transition-colors',
            'focus:border-white focus-visible:ring-0 focus-visible:ring-offset-0',
            error && 'border-red-500 focus:border-red-500',
            className,
          )}
          aria-invalid={!!error}
          {...props}
        />
        {error && (
          <p className='mt-1 text-sm text-red-500 font-medium font-ibm-plex-sans'>
            {error}
          </p>
        )}
      </div>
    );
  },
);

CustomInput.displayName = 'CustomInput';

export default CustomInput;
