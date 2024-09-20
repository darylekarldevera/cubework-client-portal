import React from 'react';

interface WrappedContentProps {
  children: React.ReactNode;
}

function WrappedContent({ children }: WrappedContentProps) {
  return (
    <div className="h-full overflow-y-auto">
      <div className={`h-full w-full xxs:px-5 px-16`}>{children}</div>
    </div>
  );
}

export default WrappedContent;
