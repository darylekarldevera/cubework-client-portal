import { Table } from '@tanstack/react-table';
import { TableBody } from '../ui/table';
import DataTableNoResult from './DataTableNoResult';
import DataTableBodyList from './DataTableBodyList';

interface IDataTableBodyProps<TData> {
  table: Table<TData>;
  columnsLength: number;
}

function DataTableBody<TData>({ table, columnsLength }: IDataTableBodyProps<TData>) {
  return (
    <TableBody>
      {table.getRowModel().rows?.length ? (
        <DataTableBodyList table={table} />
      ) : (
        <DataTableNoResult columnsLength={columnsLength} />
      )}
    </TableBody>
  );
}

export default DataTableBody;
