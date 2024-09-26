import './DataTable.css';
import { 
  ColumnDef, 
  getCoreRowModel, 
  getPaginationRowModel, 
  useReactTable 
} from '@tanstack/react-table';
import useDataListPaginationV2 from '@/customHook/useDataListPaginationV2';

import { Table } from '@/components/ui/table';
import DataTableBody from './DataTableBody';
import DataTableHeader from './DataTableHeader';
import DataTablePaginationControllersV2 from './DataTablePaginationControllersV2';
import DataTablePaginationControllers from './DataTablePaginationControllers';

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  pageSize?: number;
  cwStyle?: boolean;
  numberOfItems: number;
  currentPage: number;
  isLoading: boolean;
  requestPageSize: string;
  setRequestPageSize: React.Dispatch<React.SetStateAction<string>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
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

function DataTableV2<TData, TValue>({
  data,
  columns,
  currentPage,
  numberOfItems,
  requestPageSize,
  pageSize = 5,
  cwStyle = false,
  setRequestPageSize,
  setCurrentPage,
}: DataTableProps<TData, TValue>): JSX.Element {
  const { paginationNumbers, canNextPage, canPreviousPage } = useDataListPaginationV2({
    numberOfItems,
    currentPage,
    requestPageSize,
  });

  const handleChangePage = (page: number) => {
    setCurrentPage(page);
  };

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
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
        <DataTableBody table={table} columnsLength={columns?.length} />
      </Table>
      <div className={cwStyle ? `py-6 ` : ''}>
        {requestPageSize === 'bulk' ? (
          // if bulk, use the tanstack pagination's logic
          <DataTablePaginationControllers
            cwStyle={true}
            requestPageSize={requestPageSize}
            setPage={table.setPageIndex}
            nextPage={table.nextPage}
            canNextPage={table.getCanNextPage()}
            previousPage={table.previousPage}
            canPreviousPage={table.getCanPreviousPage()}
            paginationNumbers={table.getPageOptions()}
            setRequestPageSize={setRequestPageSize}     
          />
        ) : (
          // if minimum, use the custom
          <DataTablePaginationControllersV2
            cwStyle={true}
            requestPageSize={requestPageSize}
            paginationNumbers={paginationNumbers}
            currentPage={currentPage}
            nextPage={() => handleChangePage(currentPage + 1)}
            canNextPage={canNextPage}
            previousPage={() => handleChangePage(currentPage - 1)}
            canPreviousPage={canPreviousPage}
            setPage={handleChangePage}
            setCurrentPage={setCurrentPage}
            setRequestPageSize={setRequestPageSize}
          />
        )}
      </div>
    </div>
  );
}

export default DataTableV2;
