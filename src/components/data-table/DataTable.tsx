import { ColumnDef, getCoreRowModel, getPaginationRowModel, useReactTable } from '@tanstack/react-table';
import { Table } from '@/components/ui/table';
import DataTableBody from './DataTableBody';
import DataTableHeader from './DataTableHeader';
import DataTablePaginationControllers from './DataTablePaginationControllers';

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

function DataTable<TData, TValue>({ columns, data }: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getPaginationRowModel: getPaginationRowModel(),
    getCoreRowModel: getCoreRowModel(),
    initialState: {
      pagination: {
        pageSize: 5,
      },
    },
  });

  return (
    <div className="rounded-md border">
      <Table>
        <DataTableHeader table={table} />
        <DataTableBody table={table} columnsLength={columns.length} />
      </Table>
      <DataTablePaginationControllers
        canNextPage={table.getCanNextPage()}
        canPreviousPage={table.getCanPreviousPage()}
        previousPage={table.previousPage}
        nextPage={table.nextPage}
        paginationNumbers={table.getPageOptions()}
        setPage={table.setPageIndex}
      />
    </div>
  );
}

export default DataTable;
