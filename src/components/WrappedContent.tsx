import React from 'react';

interface WrappedContentProps {
  children: React.ReactNode;
  className?: string;
}

function WrappedContent({ children, className = '' }: WrappedContentProps) {
  return (
    <div className={`h-full flex justify-center w-full x-sm:max-w-[100vw] x-md:max-w-[80vw] x-lg:max-w-[100vw] m-auto ${className}`}>
      <div className="flex flex-col justify-around h-[100%] flex-grow
        x-xxs:max-w-[95%] x-md:max-w-[80%]
        px-12
      ">
        {children}
      </div>
    </div>
  );
}

export default WrappedContent;