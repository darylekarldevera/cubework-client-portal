import { useState } from 'react';
import { IDocument } from '@/types/invoiceDocuments';

import useDataListPagination from '@/customHook/useDataListPagination';

import DocumentList from './DocumentList';
import DataTablePaginationControllers from '../../data-table/DataTablePaginationControllers';

interface IDocumentListTableTableProps {
  data: IDocument[];
  fileType: string;
  documentType: string;
}

function DocumentListTable({ data, fileType, documentType }: IDocumentListTableTableProps): JSX.Element {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const { paginationNumbers, canNextPage, canPreviousPage } = useDataListPagination({ data, currentPage });

  const handleChangePage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div
      className="flex flex-col rounded-t-[2vh] rounded-b-[4vh] p-2 h-full"
      style={{
        boxShadow: '0px 4px 12px 0px #00000040'
      }}
    >
      <DocumentList 
        data={data} 
        currentPage={currentPage} 
        fileType={fileType} 
        documentType={documentType} 
      />

      <DataTablePaginationControllers
        canNextPage={canNextPage}
        canPreviousPage={canPreviousPage}
        previousPage={() => handleChangePage(currentPage - 1)}
        nextPage={() => handleChangePage(currentPage + 1)}
        paginationNumbers={paginationNumbers}
        setPage={() => handleChangePage(currentPage)}
        cwStyle={true}
      />
    </div>
  );
}

export default DocumentListTable;
