// import { HOME_ACTIVITY_TABLE_COLUMNS } from "@/constants/homeActivityTableColumns";
import DataTable from "./data-table/DataTable";

import { Heading1 } from "./ui/headings";
import { ColumnDef } from "@tanstack/react-table";
import { ILeaseItem, ILeaseItems, leaseQuery } from "@/queries/LeaseQuery";
import Tabs from "./Tabs";
import WrappedContent from "./WrappedContent";
import { LEASE_TABS } from "@/constants/tabs";


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


export default function LeaseContacts() {
  let data: ILeaseItem[] = [];

  const q = leaseQuery<ILeaseItems>('lease', 1, 50);

  if (q.isSuccess) {
    data = q?.data?.data;
  }

  return (<>
    <WrappedContent className="pb-[5%]">
      <Heading1 text="Lease" className="mb-6" />

      <Tabs links={LEASE_TABS} />

      {q.isFetching && (<>Loading...</>)}

      {(q.isError || q.isLoadingError) && (
        <div>Error fetching data</div>
      )}

      {q.isSuccess &&  (
        <DataTable
          columns={ACTIVITY_TABLE_COLUMNS}
          data={data}
          cwStyle={true}
        />
      )}
    </WrappedContent>
  </>);
}
