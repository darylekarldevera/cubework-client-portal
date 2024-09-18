interface IHeadingProps {
  text: string;
  className?: string;
}

function Heading1({ text, className }: IHeadingProps) {
  return <h1 className={`scroll-m-20 font-medium text-3xl tracking-tight  mb-6 ${className}`}>{text}</h1>;
}

function Heading2({ text, className }: IHeadingProps) {
  return (
    <h2
      className={`mt-10 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 ${className}`}
    >
      {text}
    </h2>
  );
}

function Heading3({ text, className }: IHeadingProps) {
  return <h3 className={`mt-8 scroll-m-20 text-2xl font-semibold tracking-tight ${className}`}>{text}</h3>;
}

export { Heading1, Heading2, Heading3 };
