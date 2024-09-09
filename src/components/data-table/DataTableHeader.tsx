import { TableHeader } from '../ui/table';
import { Table } from '@tanstack/react-table';
import DataTableHeaderList from './DataTableHeaderList';

interface IDataTableHeader<TData> {
  table: Table<TData>;
}

function DataTableHeader<TData>({ table }: IDataTableHeader<TData>) {
  return (
    <TableHeader>
      <DataTableHeaderList table={table} />
    </TableHeader>
  );
}

export default DataTableHeader;
