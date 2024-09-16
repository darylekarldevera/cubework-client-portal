import { faker } from '@faker-js/faker';
import React, { useCallback, useEffect, useState } from 'react';

import { IDocument } from '@/types/invoiceDocuments';
import { INVOICE_DOCUMENT } from '@/__mocks__/invoiceDocumentMock';
import DocumentTableUtility from '@/lib/documentDataSorterAndFilter';

import TableUtilities from './document-table/table-utilities/TableUtilities';
import DocumentListTable from './document-table/DocumentListTable';

const getData = async (): Promise<IDocument[]> => {
  const data = [...Array(15).fill(INVOICE_DOCUMENT)].flat();
  const newData = data.map((file, index) => {
    return {
      ...file,
      id: index + 1,
      date: faker.date.anytime(),
      file: {
        ...file,
        filename: faker.system.fileName(),
      },
    };
  });
  return newData;
};

function LeaseDocuments() {
  const [originalData, setOriginalData] = useState<IDocument[]>([]);
  const [documentsData, setDocumentsData] = useState<IDocument[]>([]);
  const [utility, setUtility] = useState<DocumentTableUtility<IDocument>>(new DocumentTableUtility([]));

  const filterCb = useCallback((items: IDocument[], searchData: string): IDocument[] => {
    return items.filter((item) => {
      return item.file.filename.toLowerCase().includes(searchData.toLowerCase());
    });
  }, []);

  useEffect(() => {
    getData()
      .then((data) => {
        const updatedData = new DocumentTableUtility(data).sortData();

        setDocumentsData(() => updatedData);
        setOriginalData(() => updatedData);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    setUtility(() => new DocumentTableUtility(documentsData));
  }, [originalData]);

  return (
    <React.Fragment>
      <TableUtilities
        data={documentsData}
        originalData={originalData}
        setData={setDocumentsData}
        filterCb={filterCb}
        utilityInstance={utility}
      />
      <DocumentListTable 
        data={documentsData} 
        fileType="PDF" 
        documentType="Least Documents" 
      />
    </React.Fragment>
  );
}

export default LeaseDocuments
