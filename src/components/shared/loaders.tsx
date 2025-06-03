import { Loader2 } from 'lucide-react';
import React from 'react';

const Loader = () => {
  return (
    <div className='flex justify-center items-center py-3'>
      <Loader2 className='w-10 h-10 animate-spin text-white' />
    </div>
  );
};

export default Loader;
