'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export const Logo = () => {
  const router = useRouter();
  return (
    <div
      className='flex items-center gap-4 cursor-pointer'
      onClick={() => router.push('/')}
    >
      <Image
        src='/logo.svg'
        alt='logo'
        width={120}
        height={100}
        className='w-[150px] h-auto md:w-[180px] lg:w-[200px] transition-all duration-300'
      />
    </div>
  );
};
