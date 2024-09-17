import { faker } from '@faker-js/faker';
import { Buffer } from 'buffer';
import React, { useCallback, useEffect, useState } from 'react';

import { IDocument } from '@/types/invoiceDocuments';
import DocumentTableUtility from '@/lib/documentDataSorterAndFilter';

import DocumentListTable from './document-table/DocumentListTable';
import TableUtilities from './document-table/table-utilities/TableUtilities';
import { DocumentsQuery } from '@/queries/DocumentsQuery';


function StatementInvoiceDocument() {
  const [originalData, setOriginalData] = useState<IDocument[]>([]);
  const [documentsData, setDocumentsData] = useState<IDocument[]>([]);
  const [utility, setUtility] = useState<DocumentTableUtility<IDocument>>(new DocumentTableUtility([]));
  const invoiceDocuments = DocumentsQuery('invoice_documents');
  

  const filterCb = useCallback((items: IDocument[], searchData: string): IDocument[] => {
    return items.filter((item) => {
      return item.file.filename.toLowerCase().includes(searchData.toLowerCase());
    });
  }, []);


  useEffect(() => {
    setUtility(
      () => new DocumentTableUtility(documentsData)
    );
  }, [originalData]);

  useEffect(() => {
    if (invoiceDocuments.isSuccess) {
      setDocumentsData(invoiceDocuments.data);
      setOriginalData(invoiceDocuments.data);
    } 

    if (invoiceDocuments.isError) {
      setDocumentsData([]);
      setOriginalData([]);
    }
  }, [invoiceDocuments]);

  if (invoiceDocuments.isLoading) {
    return <div>Loading...</div>;
  }

  if (invoiceDocuments.isError) {
    return <div>Error...</div>;
  }

  return (
    <div className="pb-5">
      <TableUtilities
        data={documentsData}
        originalData={originalData}
        setData={setDocumentsData}
        filterCb={filterCb}
        utilityInstance={utility}
      />
      <DocumentListTable data={documentsData} fileType="PDF" documentType="Statement/Invoice" />
    </div>
  );
}

export default StatementInvoiceDocument;
