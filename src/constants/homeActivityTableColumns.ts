import { ColumnDef } from "@tanstack/react-table";
import IHomeActivityTable from '@/types/homeActivityTable';

export const HOME_ACTIVITY_TABLE_COLUMNS: ColumnDef<IHomeActivityTable>[] = [
  {
    header: 'ID',
    accessorKey: 'id',
  },
  {
    header: 'Type',
    accessorKey: 'type',
  },
  {
    header: 'Date',
    accessorKey: 'date',
  },
  {
    header: 'Charge',
    accessorKey: 'charge',
  },
  {
    header: 'Payments',
    accessorKey: 'payments',
  },
  {
    header: 'Balance',
    accessorKey: 'balance',
  },
  {
    header: 'Method',
    accessorKey: 'method',
  },
];
