function WrappedContent({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full flex justify-center w-full sm:max-w-[100vw] md:max-w-[80vw] lg:max-w-[100vw] m-auto">
      <div className="flex flex-col justify-around h-[95%] flex-grow xxs:max-w-[95%] md:max-w-[80%]">
        {children}
      </div>
    </div>
  );
}

export default WrappedContent;
