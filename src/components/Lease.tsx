// import { HOME_ACTIVITY_TABLE_COLUMNS } from "@/constants/homeActivityTableColumns";
import DataTable from "./data-table/DataTable";

import { Heading1 } from "./ui/headings";
import { ColumnDef } from "@tanstack/react-table";
import { ILeaseItem, leaseQuery } from "@/queries/LeaseQuery";
import Tabs from "./Tabs";


interface ILeastTable {
  id: number,
  first_name: string,
  last_name: string,
  phone: string,
  email: string,
}

const ACTIVITY_TABLE_COLUMNS: ColumnDef<ILeastTable>[] = [
  {
    header: 'Name',
    accessorKey: 'first_name',
  },
  {
    header: 'Billing Phone Number',
    accessorKey: 'phone',
  },
  {
    header: 'Email',
    accessorKey: 'email',
  },
];


export default function Lease() {
  let data: ILeaseItem[] = [];

  const q = leaseQuery('lease', 1, 50);

  if (q.isSuccess) {
    console.log(q.data?.data);
    data = q?.data?.data;
  }

  console.log(q.data?.data);

  return (<>
    <Heading1 text="Lease" className="mb-6" />
    <Tabs />
    <DataTable
      columns={ACTIVITY_TABLE_COLUMNS}
      data={data}
      cwStyle={true}
    />
  </>);
}
