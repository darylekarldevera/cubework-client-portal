import React from 'react';

interface WrappedContentProps {
  children: React.ReactNode;
}

function WrappedContent({ children }: WrappedContentProps) {
  return (
    <div className="h-full overflow-y-auto overflow-x-hidden relative">
      <div className={`h-full w-full xxs:px-5 px-16 relative`}>{children}</div>
    </div>
  );
}

export default WrappedContent;
