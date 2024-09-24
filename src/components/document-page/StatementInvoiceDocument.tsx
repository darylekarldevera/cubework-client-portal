import { useCallback } from 'react';

import { IDocument } from '@/types/invoiceDocuments';
import { DocumentsQuery } from '@/queries/DocumentsQuery';
import DocumentTableUtility from '@/lib/documentDataSorterAndFilter';
import { DOCUMENT_SORT_OPTIONS } from '@/constants/documentsUtilityOptions';
import useUtilityInstanceAndData from '@/customHook/useUtilityInstanceAndData';

import TableUtilities from './document-table/table-utilities/TableUtilities';
import DocumentListTable from './document-table/DocumentListTable';

function StatementInvoiceDocument() {
  const invoiceDocuments = DocumentsQuery('invoice_documents');

  const { data, setData, originalData, utility, isLoading } = useUtilityInstanceAndData<IDocument>({
    dataApi: invoiceDocuments,
    utilityClass: DocumentTableUtility,
  });

  const filterCb = useCallback((items: IDocument[], searchData: string): IDocument[] => {
    return items.filter((item) => {
      return item?.file?.filename.toLowerCase().includes(searchData.toLowerCase());
    });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <TableUtilities
        data={data}
        originalData={originalData}
        setData={setData}
        filterCb={filterCb}
        utilityInstance={utility}
        sortOptions={DOCUMENT_SORT_OPTIONS}
        filterOptions={[]}
      />

      <DocumentListTable 
        data={data} 
        documentType="Statement/Invoice" 
      />
    </div>
  );
}

export default StatementInvoiceDocument;
