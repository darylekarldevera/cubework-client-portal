// import { HOME_ACTIVITY_TABLE_COLUMNS } from "@/constants/homeActivityTableColumns";
import DataTable from "./data-table/DataTable";

import { Heading1 } from "./ui/headings";
import { ColumnDef } from "@tanstack/react-table";
// import { ILeaseMySpaceItem, ILeaseMySpaceItems, leaseQuery, } from "@/queries/LeaseQuery";
import { ILicenseSelect, ILicenseSelectItems } from "@/types/lease";
import CWCard from "./CWCard";
import { licenseSelectQuery } from "@/queries/LeaseQuery";


interface ILeaseLicenseSelectCols {
  label: string,
  unit: string,
  propert_address: string,
  lease_end_date: string,
}

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
];


export default function LicenseSelect() {
  let data: ILicenseSelect[] = [];

  const q = licenseSelectQuery<ILicenseSelectItems>(1, 50);

  if (q.isSuccess) {
    data = q?.data?.data;
  }

  return (<>
    <Heading1 text="License Select" />

    {q.isFetching && (<>Loading...</>)}

    {q.isSuccess &&  (
      <CWCard>
        <DataTable
          columns={ACTIVITY_TABLE_COLUMNS}
          data={data}
          cwStyle={true}
        />
      </CWCard>
    )}
  </>);
}
