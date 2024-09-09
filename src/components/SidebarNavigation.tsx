import NAVIGATION_ITEMS from "@/constants/navigationItem";
import { Link } from "react-router-dom";

function SidebarNavigation() {
  return (
    <div className="border-2 border-grey-500 flex flex-col flex-grow h-[100%]">
      <div className="h-[25%] flex bg-cover bg-center object-contain bg-no-repeat bg-[url('https://placehold.co/600x400')]">
        <div className="bg-white/[.7] mt-auto mb-2 relative z-10 w-full h-[50%]">
          <p>Company Name</p>
          <p>Branch name | branch name</p>
        </div>
      </div>
      <div className="pb-3 bg-white" />
      <div className="flex-grow-3 border-t-2 border-grey-500">
        {NAVIGATION_ITEMS.map((item, index) => (
          <div key={index} className="p-3 text-center cursor-pointer">
            <Link to={item.path}>{item.name}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SidebarNavigation