import React, { memo } from 'react';

interface MemoWrapperProps {
  children: React.ReactNode;
}

const MemoWrapper = memo(({ children }: MemoWrapperProps) => {
  return <>{children}</>;
});

MemoWrapper.displayName = 'MemoWrapper';

export default MemoWrapper;
