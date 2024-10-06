import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu.tsx';
import { licenseSelectQuery } from '@/queries/LeaseQuery';
import { ILicense, ILicenseItems } from '@/types/lease';
import { useContext } from 'react';
import { AppContext } from '@/contexts/AppContext';


export default function LicenseSelectorDropdown() {
  let data: ILicense[] = [];
  const q = licenseSelectQuery<ILicenseItems>(1, 50);
  const appContext = useContext(AppContext);

  if (q.isSuccess) {
    data = q?.data?.data;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <span
          className="!w-auto !bg-transparent !text-cw-charcoal text-[11px]"
        >{ data && data?.filter(i => i.id === appContext.activeLicense)?.[0]?.label } <small className="ml-2">▼</small></span>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-full bg-white">
      {data && data.map((i) => (
        <DropdownMenuCheckboxItem
          checked={i.id === appContext.activeLicense}
          onCheckedChange={() => { appContext.setActiveLicense(i.id) }}
          key={i.id}
        >
          <button
            className="text-[11px]"
          >
            {i.label}
          </button>
        </DropdownMenuCheckboxItem>
      ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}