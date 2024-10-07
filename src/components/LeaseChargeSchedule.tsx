import DataTable from "./data-table/DataTable";

import { Heading1 } from "./ui/headings";
import { ColumnDef } from "@tanstack/react-table";
import { ILeaseChargeScheduleItem, ILeaseChargeScheduleItems, leaseQuery } from "@/queries/LeaseQuery";
import Tabs from "./Tabs";
import { LEASE_TABS } from "@/constants/tabs";
import CWCard from "./CWCard";
import { formatCurrency } from "@/lib/utils";

interface ILeastTable {
  description: string,
  period: string,
  billing_frequency: string,
  units: string,
  amount: number | string,
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
  {
    header: 'Amount',
    accessorKey: 'amount',
  },
];


export default function LeaseChargeSchedule() {
  let data: ILeaseChargeScheduleItem[] = [];

  const q = leaseQuery<ILeaseChargeScheduleItems>('lease_charge_schedule', 1, 50);

  if (q.isSuccess) {
    data = q?.data?.data.map(i => {
      return {
        ...i,
        description: i.description?.split('.')[0],
        units: i.units.toUpperCase(),
        amount: '$' + formatCurrency(Number(i.amount)),
      }
    });
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
