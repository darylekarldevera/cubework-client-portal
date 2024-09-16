import { faker } from '@faker-js/faker';
import { Buffer } from 'buffer';
import React, { useCallback, useEffect, useState } from 'react';

import { IDocument } from '@/types/invoiceDocuments';
import TableUtility from '@/lib/documentDataSorterAndFilter';

import DocumentListTable from './document-table/DocumentListTable';
import TableUtilities from './document-table/table-utilities/TableUtilities';

const getData = async (): Promise<IDocument[]> => {
  const data = [...Array(10)].map((file, index) => {
    const filenames = [faker.system.commonFileName('pdf'), faker.system.commonFileName('csv')];
    const randomIndex = Math.floor(Math.random() * filenames.length);
    const filename = filenames[randomIndex];
    const mimetype = filename.includes("pdf") ? 'application/pdf' : 'text/csv';

    return {
      ...file,
      id: index + 1,
      date: faker.date.anytime(),
      file: {
        buffer: Buffer.from(faker.system.filePath()),
        mimetype: mimetype,
        originalname: faker.system.fileName(),
        size: Buffer.byteLength(faker.system.filePath()),
        filename: filename,
        destination: faker.system.directoryPath(),
        fieldname: '',
        encoding: '',
        path: faker.system.filePath(),
      },
    };
  });

  return data;
};

function StatementInvoiceDocument() {
  const [originalData, setOriginalData] = useState<IDocument[]>([]);
  const [documentsData, setDocumentsData] = useState<IDocument[]>([]);

  const filterCb = useCallback((items: IDocument[], searchData: string): IDocument[] => {
    return items.filter((item) => {
      return item.file.filename.toLowerCase().includes(searchData.toLowerCase());
    });
  }, []);

  useEffect(() => {
    getData()
      .then((data) => {
        const PLACEHOLDER_ARRAY: IDocument[] = [];
        
        const updatedData = new TableUtility(
          data, 
          PLACEHOLDER_ARRAY
        ).sortData();
        
        setDocumentsData(() => updatedData);
        setOriginalData(() => updatedData);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <React.Fragment>
      <TableUtilities 
        data={documentsData}
        originalData={originalData}
        setData={setDocumentsData}
        filterCb={filterCb}
      />
      <DocumentListTable 
        data={documentsData} 
        fileType="PDF" 
        documentType="Statement/Invoice" 
      />
    </React.Fragment>
  );
}

export default StatementInvoiceDocument;
