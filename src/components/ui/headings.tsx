interface IHeadingProps {
  text: string;
}

function Heading1({ text }: IHeadingProps) {
  return (
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      { text }
    </h1>
  );
}

function Heading2({ text }: IHeadingProps) {
  return (
    <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
      { text }
    </h2>
  );
}

function Heading3({ text }: IHeadingProps) {
  return (
    <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
      { text }
    </h3>
  );
}


export { Heading1, Heading2, Heading3 };
