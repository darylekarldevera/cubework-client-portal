interface IDataTablePaginationControllersProps {
  canPreviousPage: boolean;
  previousPage: () => void;
  canNextPage: boolean;
  nextPage: () => void;
}

function DataTablePaginationControllers({
  canPreviousPage,
  previousPage,
  canNextPage,
  nextPage,
}: IDataTablePaginationControllersProps) {
  return (
    <div className="flex items-center justify-end space-x-2 py-4">
      <div className="space-x-2 pr-5">
        <button
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
          style={{ color: !canPreviousPage ? 'gray' : '' }}
        >
          Previous
        </button>
        <button style={{ color: !canNextPage ? 'gray' : '' }} onClick={() => nextPage()} disabled={!canNextPage}>
          Next
        </button>
      </div>
    </div>
  );
}

export default DataTablePaginationControllers;
