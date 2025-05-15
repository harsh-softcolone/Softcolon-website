'use client';

import React, { useState, ButtonHTMLAttributes } from 'react';

interface GradientButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  fromColor?: string;
  toColor?: string;
  textColor?: string;
  hoverTextColor?: string;
  particleCount?: number;
  className?: string;
}

const GradientConnectButton = ({
  text = "Let's connect",
  fromColor = 'from-blue-500',
  toColor = 'to-purple-600',
  textColor = 'text-black',
  hoverTextColor = 'text-white',
  particleCount = 6,
  className = '',
  ...props
}: GradientButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className={`relative overflow-hidden rounded-full py-2.5 px-4 font-ibm-plex-sans font-medium text-sm leading-normal transition-all duration-300 cursor-pointer
        ${isHovered ? hoverTextColor : `${textColor} bg-white`}
        ${className}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      <span className='relative z-10'>{text}</span>

      <div
        className={`absolute inset-0 bg-gradient-to-r ${fromColor} ${toColor} transition-transform duration-500 ease-out
          ${isHovered ? 'translate-x-0' : '-translate-x-full'}
        `}
      />

      {isHovered && (
        <div className='absolute inset-0 flex items-center justify-center'>
          {[...Array(particleCount)].map((_, i) => (
            <div
              key={i}
              className='absolute w-1 h-1 bg-white rounded-full opacity-70 animate-ping'
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 0.5}s`,
                animationDuration: `${0.8 + Math.random() * 1}s`,
              }}
            />
          ))}
        </div>
      )}
    </button>
  );
};

export default GradientConnectButton;
