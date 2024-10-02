import { ColumnDef } from "@tanstack/react-table";

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
  {
    header: 'Balance',
    accessorKey: 'balance',
    cell: ({ getValue }) => '$' + getValue(),
  },
  {
    header: '',
    accessorKey: 'cta',
    cell: ({ getValue }) => getValue(),
  },
];

export { ACTIVITY_TABLE_COLUMNS };
