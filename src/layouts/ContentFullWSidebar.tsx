import { ReactNode } from "react";

interface IContentFullWidthWSidebarProps {
    sidebar?: ReactNode;
    content?: ReactNode;
}

export default function ContentFullWidthWSidebar({ sidebar, content }: IContentFullWidthWSidebarProps) {
    return (<div className="layout--full-width-w-sidebar flex flex-col md:flex-row">
        <div className="w-full md:w-60">
            { sidebar ?? 'Sidebar' }
        </div>
        <div className="flex-grow-0 md:flex-grow ">
            { content ?? 'Content Full Width w/ Sidebar' }
        </div>
    </div>);
}
