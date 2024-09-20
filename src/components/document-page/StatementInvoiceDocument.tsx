import { useCallback, useEffect, useMemo, useState } from 'react';

import { IDocument } from '@/types/invoiceDocuments';
import { DocumentsQuery } from '@/queries/DocumentsQuery';
import DocumentTableUtility from '@/lib/documentDataSorterAndFilter';
import { SORT_OPTIONS } from '@/constants/documentsUtilityOptions';

import DocumentListTable from './document-table/DocumentListTable';
import TableUtilities from './document-table/table-utilities/TableUtilities';
import ErrorMessage from '@/shared/modals/ErrorMessage';

function StatementInvoiceDocument() {
  const [originalData, setOriginalData] = useState<IDocument[]>([]);
  const [documentsData, setDocumentsData] = useState<IDocument[]>([]);
  const invoiceDocuments = DocumentsQuery('invoice_documents');

  const filterCb = useCallback((items: IDocument[], searchData: string): IDocument[] => {
    return items.filter((item) => {
      return item?.file?.filename.toLowerCase().includes(searchData.toLowerCase());
    });
  }, []);

  // Memoize the utility instance only when the invoiceDocuments data changes
  const utility = useMemo(() => {
    if (invoiceDocuments.isSuccess && invoiceDocuments.data) {
      // Use spread operator to avoid mutating original data
      const utilityInstance = new DocumentTableUtility<IDocument>([...invoiceDocuments.data]);
      const sortedData = utilityInstance.sortData();
      setDocumentsData(sortedData);
      setOriginalData(sortedData);
      return utilityInstance;
    }
    return new DocumentTableUtility<IDocument>([]);
  }, [invoiceDocuments.data, invoiceDocuments.isSuccess]);

  useEffect(() => {
    if (invoiceDocuments.isSuccess && invoiceDocuments.data) {
      // Sort the data and update the state
      const sortedData = utility.sortData();
      setDocumentsData(sortedData);
      setOriginalData(sortedData);
    }

    if (invoiceDocuments.isError) {
      setDocumentsData([]);
      setOriginalData([]);
    }
  }, []);

  if (invoiceDocuments.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ErrorMessage isVisible={invoiceDocuments.isError} />
      <TableUtilities
        data={documentsData}
        originalData={originalData}
        setData={setDocumentsData}
        filterCb={filterCb}
        utilityInstance={utility}
        sortOptions={SORT_OPTIONS}
        filterOptions={[]}
      />
      <DocumentListTable data={documentsData} documentType="Statement/Invoice" />
    </div>
  );
}

export default StatementInvoiceDocument;
