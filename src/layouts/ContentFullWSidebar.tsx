import { ReactNode } from "react";
import SidebarNavigation from "@/components/SidebarNavigation";
import WrappedContent from "@/components/WrappedContent";
import { Outlet } from "react-router-dom";

export default function ContentFullWidthWSidebar() {
  return (
    <div className="flex flex-row h-screen overflow-y-auto">
      <div className="w-sidebar xxs:hidden md:block">
        <SidebarNavigation />
      </div>
      <WrappedContent>
        <Outlet />
      </WrappedContent>
    </div>
  );
}
