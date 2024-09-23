import { ColumnDef } from "@tanstack/react-table";
import IHomeActivityTable from '@/types/homeActivityTable';

export const HOME_ACTIVITY_TABLE_COLUMNS: ColumnDef<IHomeActivityTable>[] = [
  {
    header: 'ID',
    accessorKey: 'id',
    size: 70,
  },
  {
    header: 'Type',
    accessorKey: 'type',
    size: 200,
  },
  {
    header: 'Date',
    accessorKey: 'date',
    size: 70,
  },
  {
    header: 'Charge',
    accessorKey: 'charge',
    size: 125,
  },
  {
    header: 'Payments',
    accessorKey: 'payments',
    size: 125,
  },
  {
    header: 'Balance',
    accessorKey: 'balance',
    size: 70,
  },
  {
    header: 'Method',
    accessorKey: 'method',
    size: 250,
  },
];
