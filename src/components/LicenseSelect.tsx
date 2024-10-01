import DataTable from "./data-table/DataTable";

import { Heading1 } from "./ui/headings";
import { ColumnDef } from "@tanstack/react-table";
import { ILicense, ILicenseItems } from "@/types/lease";
import CWCard from "./CWCard";
import { licenseSelectQuery } from "@/queries/LeaseQuery";
import { Input } from "./ui/input";
import { useMemo, useState } from "react";
import Button from "./shared/Button";
import DOMPurify from 'dompurify';


interface ILeaseLicenseSelectCols {
  label: string,
  unit: string,
  propert_address: string,
  lease_end_date: string,
}

export default function LicenseSelect() {
  let data: ILicense[] = [];
  let [searchFilter, setSearchFilter] = useState('');

  const q = licenseSelectQuery<ILicenseItems>(1, 50);

  const ACTIVITY_TABLE_COLUMNS: ColumnDef<ILeaseLicenseSelectCols>[] = [
    {
      header: 'License',
      accessorKey: 'label',
    },
    {
      header: 'Unit',
      accessorKey: 'unit',
    },
    {
      header: 'Property Address',
      accessorKey: 'property_address',
    },
    {
      header: 'Lease End Date',
      accessorKey: 'lease_end_date',
    },
    {
      header: '',
      accessorKey: 'cta',
      cell: ({ getValue }) => getValue(),
    },
  ];

  if (q.isSuccess) {
    data = q?.data?.data.map(i => {
      return {
        ...i,
        cta: (<>
          <Button onClick={() => alert(DOMPurify.sanitize(i.label))}>
            <strong>Select</strong>
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
          className="max-w-sm mb-4 text-[11px] border-cw-offwhite"
        />
        <DataTable
          columns={ACTIVITY_TABLE_COLUMNS}
          data={filtered as []}
          cwStyle={true}
        />
      </CWCard>
    )}
  </>);
}
