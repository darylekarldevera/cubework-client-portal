import DataTable from "./data-table/DataTable";

import { Heading1 } from "./ui/headings";
import { ILicense, ILicenseItems } from "@/types/lease";
import CWCard from "./CWCard";
import { licenseSelectQuery } from "@/queries/LeaseQuery";
import { Input } from "./ui/input";
import { useMemo, useState } from "react";
import Button from "./shared/Button";
import { ACTIVITY_TABLE_COLUMNS } from "@/constants/licenseSelectTableColumns";
import { Link } from "react-router-dom";
import { formatCurrency } from "@/lib/utils";

interface LicenseSelectProps {
  dropShadow: boolean;
  variant: 'login' | 'default';
}

export default function LicenseSelect({ dropShadow, variant='default' }: LicenseSelectProps) {
  let data: ILicense[] = [];
  let [searchFilter, setSearchFilter] = useState('');

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
          <Link to={'/home'} relative="path">
            <Button>
              <strong>Select</strong>
            </Button>
          </Link>
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
