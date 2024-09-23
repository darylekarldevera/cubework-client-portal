import { useCallback, useContext, useEffect, useMemo, useState } from 'react';

import { IDocument } from '@/types/invoiceDocuments';
import { DocumentsQuery } from '@/queries/DocumentsQuery';
import DocumentTableUtility from '@/lib/documentDataSorterAndFilter';
import { SORT_OPTIONS } from '@/constants/documentsUtilityOptions';

import DocumentListTable from './document-table/DocumentListTable';
import TableUtilities from './document-table/table-utilities/TableUtilities';
import { ErrorModalContext } from '@/contexts/ErrorModalContext';

function LeaseDocument() {
  const { showError, setShowError } = useContext(ErrorModalContext);
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
      const utilityInstance = new DocumentTableUtility<IDocument>([...leaseDocument.data]);
      const sortedData = utilityInstance.sortData();
      setDocumentsData(sortedData);
      setOriginalData(sortedData);
      return utilityInstance;
    }
    return new DocumentTableUtility<IDocument>([]);
  }, [leaseDocument.data, leaseDocument.isSuccess]);

  useEffect(() => {
    if (leaseDocument.isError) {
      setShowError(!showError);
    }
  }, [leaseDocument.isError]);

  if (leaseDocument.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <TableUtilities
        data={documentsData}
        originalData={originalData}
        setData={setDocumentsData}
        filterCb={filterCb}
        utilityInstance={utility}
        sortOptions={SORT_OPTIONS}
        filterOptions={[]}
      />
      <DocumentListTable 
        data={documentsData} 
        documentType="Least Documents" 
      />
    </div>
  );
}

export default LeaseDocument;
