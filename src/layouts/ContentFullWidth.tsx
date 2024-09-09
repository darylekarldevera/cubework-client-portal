import { ReactNode } from "react";

interface IContentFullWidthParams {
  content?: ReactNode
}

export default function ContentFullWidth({ content }: IContentFullWidthParams) {
  return (<div className="layout--full-width">
    <div>
      {content ?? 'Content Full Width'}
    </div>
  </div>);
}
