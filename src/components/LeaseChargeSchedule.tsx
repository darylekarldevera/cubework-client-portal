// import { HOME_ACTIVITY_TABLE_COLUMNS } from "@/constants/homeActivityTableColumns";
import DataTable from "./data-table/DataTable";

import { Heading1 } from "./ui/headings";
import { ColumnDef } from "@tanstack/react-table";
import { ILeaseChargeScheduleItem, ILeaseChargeScheduleItems, leaseQuery } from "@/queries/LeaseQuery";
import Tabs from "./Tabs";
import WrappedContent from "./WrappedContent";


interface ILeastTable {
  description: string,
  period: string,
  billing_frequency: string,
  units: string,
}

const ACTIVITY_TABLE_COLUMNS: ColumnDef<ILeastTable>[] = [
  {
    header: 'Description',
    accessorKey: 'description',
  },
  {
    header: 'Period',
    accessorKey: 'period',
  },
  {
    header: 'Billing Frequency',
    accessorKey: 'billing_frequency',
  },
  {
    header: 'Units',
    accessorKey: 'units',
  },
];


export default function LeaseChargeSchedule() {
  let data: ILeaseChargeScheduleItem[] = [];

  const q = leaseQuery<ILeaseChargeScheduleItems>('lease_charge_schedule', 1, 50);

  if (q.isSuccess) {
    console.log(q.data?.data);
    data = q?.data?.data.map(i => {
      return {
        ...i,
        description: i.description.split('.')[0],
        units: i.units.toUpperCase(),
      }
    });
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
