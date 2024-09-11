// import { HOME_ACTIVITY_TABLE_COLUMNS } from "@/constants/homeActivityTableColumns";
import DataTable from "./data-table/DataTable";

import { Heading1 } from "./ui/headings";
import { ColumnDef } from "@tanstack/react-table";
import { ILeaseItem, ILeaseMySpaceItem, ILeaseMySpaceItems, leaseQuery } from "@/queries/LeaseQuery";
import Tabs from "./Tabs";
import WrappedContent from "./WrappedContent";


interface ILeastTable {
  id: number,
  start_date: string,
  end_date: string,
  move_in_date: string,
}

const ACTIVITY_TABLE_COLUMNS: ColumnDef<ILeastTable>[] = [
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
    console.log(q.data?.data);
    data = q?.data?.data;
  }

  console.log(q.data?.data);

  return (<>
    <WrappedContent className="pb-[5%]">
      <Heading1 text="Lease" className="mb-6" />

      <Tabs links={[
        {
          label: 'Contacts',
          path: '/lease-profile/contacts',
        },
        {
          label: 'My Space(s)',
          path: '/lease-profile/my-space',
        },
        {
          label: 'Charge Schedule',
          path: '/lease-profile/charge-schedule',
        },
      ]} />

      <DataTable
        columns={ACTIVITY_TABLE_COLUMNS}
        data={data}
        cwStyle={true}
      />
    </WrappedContent>
  </>);
}
