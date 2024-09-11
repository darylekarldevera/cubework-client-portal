// import { HOME_ACTIVITY_TABLE_COLUMNS } from "@/constants/homeActivityTableColumns";
import DataTable from "./data-table/DataTable";

import { Heading1 } from "./ui/headings";
import { ColumnDef } from "@tanstack/react-table";
import { ILeaseChargeScheduleItem, ILeaseChargeScheduleItems, leaseQuery } from "@/queries/LeaseQuery";
import Tabs from "./Tabs";
import WrappedContent from "./WrappedContent";
import { LEASE_TABS } from "@/constants/tabs";


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
    data = q?.data?.data.map(i => {
      return {
        ...i,
        description: i.description.split('.')[0],
        units: i.units.toUpperCase(),
      }
    });
  }

  return (<>
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
  </>);
}
