import { useState } from 'react';
import { IDocument } from '@/types/invoiceDocuments';

import DataTablePaginationControllers from '../../data-table/DataTablePaginationControllers';
import useDataListPagination from '@/customHook/useDataListPagination';
import DocumentList from './DocumentList';

interface IDocumentListTableTableProps {
  data: IDocument[];
}

function DocumentListTable({ data }: IDocumentListTableTableProps): JSX.Element {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const { paginationNumbers, canNextPage, canPreviousPage } = useDataListPagination({ data, currentPage });

  const handleChangePage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div
        className="flex flex-col overflow-auto rounded-t-[2vh] rounded-b-[4vh] p-5"
        style={{
          boxShadow: '0px 4px 12px 0px #00000040',
        }}
      >
        <DocumentList
          data={data}
          currentPage={currentPage}
        />
      </div>

      <DataTablePaginationControllers
        canNextPage={canNextPage}
        canPreviousPage={canPreviousPage}
        previousPage={() => handleChangePage(currentPage - 1)}
        nextPage={() => handleChangePage(currentPage + 1)}
        paginationNumbers={paginationNumbers}
        setPage={() => handleChangePage(currentPage)}
      />
    </div>
  );
}

export default DocumentListTable;
