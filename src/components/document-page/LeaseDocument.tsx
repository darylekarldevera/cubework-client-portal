import { useCallback, useEffect, useMemo, useState } from 'react';

import { IDocument } from '@/types/invoiceDocuments';
import { DocumentsQuery } from '@/queries/DocumentsQuery';
import DocumentTableUtility from '@/lib/documentDataSorterAndFilter';

import DocumentListTable from './document-table/DocumentListTable';
import TableUtilities from './document-table/table-utilities/TableUtilities';

function LeaseDocument() {
  const [originalData, setOriginalData] = useState<IDocument[]>([]);
  const [documentsData, setDocumentsData] = useState<IDocument[]>([]);
  const leaseDocument = DocumentsQuery('lease_documents');

  const filterCb = useCallback((items: IDocument[], searchData: string): IDocument[] => {
    return items.filter((item) => {
      return item.file.filename.toLowerCase().includes(searchData.toLowerCase());
    });
  }, []);

  // Memoize the utility instance only when the leaseDocument data changes
  const utility = useMemo(() => {
    if (leaseDocument.isSuccess && leaseDocument.data) {
      // Use spread operator to avoid mutating original data
      return new DocumentTableUtility<IDocument>([...leaseDocument.data]);
    }
    return new DocumentTableUtility<IDocument>([]);
  }, [leaseDocument.data, leaseDocument.isSuccess]);

  useEffect(() => {
    if (leaseDocument.isSuccess && leaseDocument.data) {
      // Sort the data and update the state
      const sortedData = utility.sortData();
      setDocumentsData(sortedData);
      setOriginalData(sortedData);
    }

    if (leaseDocument.isError) {
      setDocumentsData([]);
      setOriginalData([]);
    }
  }, []);

  if (leaseDocument.isLoading) {
    return <div>Loading...</div>;
  }

  if (leaseDocument.isError) {
    return <div>Error...</div>;
  }

  return (
    <div>
      <TableUtilities
        data={documentsData}
        originalData={originalData}
        setData={setDocumentsData}
        filterCb={filterCb}
        utilityInstance={utility}
      />
      <DocumentListTable 
        data={documentsData} 
        documentType="Least Documents" 
      />
    </div>
  );
}

export default LeaseDocument;
