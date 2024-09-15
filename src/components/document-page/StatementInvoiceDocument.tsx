import { faker } from '@faker-js/faker';
import { Buffer } from 'buffer';
import React, { useEffect, useState } from 'react';
import { ArrowUpDown, ListFilter } from 'lucide-react';

import { IDocument } from '@/types/invoiceDocuments';
import TableUtility from '@/lib/documentDataSorterAndFilter';

import TableSearchBar from './document-table/TableSearchBar';
import DocumentListTable from './document-table/DocumentListTable';
import TableUtilitySorterAndFilter from './document-table/TableUtilitySorterAndFilter';

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
  const [openUtility, setOpenUtility] = useState<string>('');
  const [originalData, setOriginalData] = useState<IDocument[]>([]);
  const [documentsData, setDocumentsData] = useState<IDocument[]>([]);

  const handleUtility = (utility: string) => {
    if (openUtility === utility) {
      setOpenUtility('');
      return;
    }

    setOpenUtility(utility);
  };

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
      <div className="mb-3">
        <div className="flex items-end">
          <TableSearchBar />
          <ArrowUpDown onClick={() => handleUtility('sort')} />
          <ListFilter onClick={() => handleUtility('filter')} />
        </div>
        <TableUtilitySorterAndFilter 
          data={documentsData}
          originalData={originalData}
          openUtility={openUtility} 
          setDocumentsData={setDocumentsData} 
          />
      </div>
      <DocumentListTable data={documentsData} fileType="PDF" documentType="Statement/Invoice" />
    </React.Fragment>
  );
}

export default StatementInvoiceDocument;
