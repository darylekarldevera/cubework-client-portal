import './DataTable.css';

import { 
  ColumnDef, 
  getCoreRowModel, 
  getPaginationRowModel, 
  useReactTable 
} from '@tanstack/react-table';
import { Table } from '@/components/ui/table';
import DataTableBody from './DataTableBody';
import DataTableHeader from './DataTableHeader';
import DataTablePaginationControllers from './DataTablePaginationControllers';

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  pageSize?: number;
  cwStyle?: boolean;
}

/**
 * Renders a data table component and displays data with pagination controllers.
 *
 * @template TData - The type of data in the table.
 * @template TValue - The type of values in the table.
 *
 * @param {ColumnDef<TData, TValue>[]} columns - The column definitions for the table.
 * @param {TData[]} data - The data to be displayed in the table.
 * @param {number} [pageSize=5] - The number of rows to display per page.
 *
 * @returns {JSX.Element} - The rendered data table component.
 */

function DataTable<TData, TValue>({ columns, data, pageSize = 5, cwStyle = false }: DataTableProps<TData, TValue>): JSX.Element {
  const table = useReactTable({
    data,
    columns,
    getPaginationRowModel: getPaginationRowModel(),
    getCoreRowModel: getCoreRowModel(),
    initialState: {
      pagination: {
        pageSize,
      },
    },
  });

  return (
    <div className={`rounded-lg border relative flex flex-col ${cwStyle ? `cw-table-wrapper` : ''}`}>
      <Table>
        <DataTableHeader table={table} />
        <DataTableBody table={table} columnsLength={columns.length} />
      </Table>
      <div className={ cwStyle ? `py-6` : '' }>
        <DataTablePaginationControllers
          cwStyle={cwStyle}
          canNextPage={table.getCanNextPage()}
          canPreviousPage={table.getCanPreviousPage()}
          previousPage={table.previousPage}
          nextPage={table.nextPage}
          paginationNumbers={table.getPageOptions()}
          setPage={table.setPageIndex}
        />
      </div>
    </div>
  );
}

export default DataTable;
