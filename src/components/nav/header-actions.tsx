'use client';
import { useRouter } from 'next/navigation';
import AnimatedSearchButton from '../buttons/animated-search-button';
import GradientConnectButton from '../buttons/gradient-connect-button';

const HeaderActions = () => {
  const router = useRouter();
  return (
    <div className='hidden items-center gap-2 xl:gap-4 xl:flex'>
      <AnimatedSearchButton />
      <GradientConnectButton handleClick={() => router.push('/contact-us')} />
    </div>
  );
};

export default HeaderActions;
