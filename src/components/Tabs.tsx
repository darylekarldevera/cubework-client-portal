import { Link, useLocation } from "react-router-dom";

interface ITabItem {
  label: string,
  path: string,
}

interface ITabsProps {
  links: ITabItem[];
  className?: string;
}


export default function Tabs({ links, className = '' }: ITabsProps) {
  const location = useLocation();

  return (
    <div className={`flex flex-row gap-6 border-b border-b-green-600 mb-2 ${className}`}>
      {links.map((i) => (
        <div key={i.path}>
          <Link
            to={i.path}
            className={`text-green-600 px-4 py-2 inline-block border-b-2 ${
              i.path === location.pathname ? 'border-green-600' : 'border-white'
            }`}
          >
            {i.label}
          </Link>
        </div>
      ))}
    </div>
  );
}
