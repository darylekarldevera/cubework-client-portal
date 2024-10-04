import DataTable from "./data-table/DataTable";

import { Heading1 } from "./ui/headings";
import { ILicense, ILicenseItems } from "@/types/lease";
import CWCard from "./CWCard";
import { licenseSelectQuery } from "@/queries/LeaseQuery";
import { Input } from "./ui/input";
import { useContext, useMemo, useState } from "react";
import Button from "./shared/Button";
import { ACTIVITY_TABLE_COLUMNS } from "@/constants/licenseSelectTableColumns";
import { Link } from "react-router-dom";
import { formatCurrency } from "@/lib/utils";
import { AppContext } from "@/contexts/AppContext";

interface LicenseSelectProps {
  dropShadow?: boolean;
  variant?: 'login' | 'default';
}

export default function LicenseSelect({ dropShadow=true, variant='default' }: LicenseSelectProps) {
  let data: ILicense[] = [];
  let [searchFilter, setSearchFilter] = useState('');
  const appContext = useContext(AppContext);

  const q = licenseSelectQuery<ILicenseItems>(1, 50);

  const inputBorder = variant === 'default'
    ? 'border-cw-offwhite'
    : 'border-slate-600';

  if (q.isSuccess) {
    data = q?.data?.data.map(i => {
      return {
        ...i,
        balance: formatCurrency(i.balance),
        cta: (<>
          <Button
            onClick={() => { appContext.setActiveLicense(i.id) }}
            className={ i.id === appContext.activeLicense ? '!bg-blue-600' : '' }
          >
            { i.id === appContext.activeLicense && (<strong>Active</strong>) }
            { i.id !== appContext.activeLicense && (<strong>Select</strong>) }
          </Button>
        </>),
      };
    });
  }

  const handleChange = (value: string) => {
    setSearchFilter(value);
  };

  const filtered = useMemo<ILicense[]>(() => {
    if (searchFilter === '') {
      return data;
    }

    return data
      .filter((i: ILicense) => {
        return (i.label.toLowerCase().includes(searchFilter.toLowerCase())
          || i.property_address.toLowerCase().includes(searchFilter.toLowerCase())
          || i.unit.toLowerCase().includes(searchFilter.toLowerCase())
      )})
  }, [searchFilter, data]);

  return (<>
    <Heading1 text="License Selection" />

    {q.isFetching && (<>Loading...</>)}

    {q.isSuccess &&  (
      <CWCard>
        <Input
          placeholder="Search"
          value={searchFilter}
          onChange={(event) =>
            handleChange(event.target.value)
          }
          className={`max-w-sm mb-4 text-[11px] ${inputBorder}`}
        />
        <DataTable
          columns={ACTIVITY_TABLE_COLUMNS}
          data={filtered as []}
          cwStyle={true}
          dropShadow={dropShadow}
        />
      </CWCard>
    )}
  </>);
}
