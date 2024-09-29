import { useCallback } from 'react';

import { IDocument } from '@/types/invoiceDocuments';
import { DocumentsQuery } from '@/queries/DocumentsQuery';
import DocumentTableUtility from '@/lib/documentDataSorterAndFilter';
import useUtilityInstanceAndData from '@/customHook/useUtilityInstanceAndData';

import DocumentListTable from './document-table/DocumentListTable';
import TableUtilities from './document-table/table-utilities/TableUtilities';
import { DOCUMENT_SORT_OPTIONS } from '@/constants/documentsUtilityOptions';

function LeaseDocument() {
  const leaseDocument = DocumentsQuery('lease_documents');

  const { data, setData, originalData, utility, isLoading } = useUtilityInstanceAndData<IDocument>({
    dataApi: leaseDocument,
    utilityClass: DocumentTableUtility,
  });

  const filterCb = useCallback((items: IDocument[], searchData: string): IDocument[] => {
    return items.filter((item) => {
      return item.file.filename.toLowerCase().includes(searchData.toLowerCase());
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
        documentType="Least Documents" 
      />
    </div>
  );
}

export default LeaseDocument;
