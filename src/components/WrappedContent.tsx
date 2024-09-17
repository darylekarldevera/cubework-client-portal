import React from 'react';

interface WrappedContentProps {
  children: React.ReactNode;
  className?: string;
}

function WrappedContent({ children, className = '' }: WrappedContentProps) {
  return (
    <div className="h-full w-[100vw] max-w-full  overflow-y-auto ">
      <div className={`h-full w-full px-16`}>{children}</div>
    </div>
  );
}

export default WrappedContent;
