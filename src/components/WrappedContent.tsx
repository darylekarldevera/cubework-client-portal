import React from 'react';

interface WrappedContentProps {
  children: React.ReactNode;
  className?: string;
}

function WrappedContent({ children, className = '' }: WrappedContentProps) {
  return (
    <div className={`h-full flex justify-center w-full sm:max-w-[100vw] md:max-w-[80vw] lg:max-w-[100vw] m-auto ${className}`}>
      <div className="flex flex-col justify-around h-[100%] flex-grow xxs:max-w-[95%] md:max-w-[80%]">
        {children}
      </div>
    </div>
  );
}

export default WrappedContent;