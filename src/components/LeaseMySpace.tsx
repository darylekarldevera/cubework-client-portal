// import { HOME_ACTIVITY_TABLE_COLUMNS } from "@/constants/homeActivityTableColumns";
import DataTable from "./data-table/DataTable";

import { Heading1 } from "./ui/headings";
import { ColumnDef } from "@tanstack/react-table";
import { ILeaseMySpaceItem, ILeaseMySpaceItems, leaseQuery } from "@/queries/LeaseQuery";
import Tabs from "./Tabs";
import { LEASE_TABS } from "@/constants/tabs";
import CWCard from "./CWCard";


interface ILeastTable {
  id: number,
  start_date: string,
  end_date: string,
  move_in_date: string,
}

const ACTIVITY_TABLE_COLUMNS: ColumnDef<ILeastTable>[] = [
  {
    header: 'Name',
    accessorKey: 'label',
  },
  {
    header: 'Start Date',
    accessorKey: 'start_date',
  },
  {
    header: 'End Date',
    accessorKey: 'end_date',
  },
  {
    header: 'Move in Date',
    accessorKey: 'move_in_date',
  },
];


export default function LeaseMySpace() {
  let data: ILeaseMySpaceItem[] = [];

  const q = leaseQuery<ILeaseMySpaceItems>('lease_profile', 1, 50);

  if (q.isSuccess) {
    data = q?.data?.data;
  }

  return (<>
    <Heading1 text="License Profile" />

    <Tabs links={LEASE_TABS} />

    {q.isFetching && (<>Loading...</>)}

    {(q.isError || q.isLoadingError) && (
      <div>Error fetching data</div>
    )}

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
