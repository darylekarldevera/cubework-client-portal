import { faker } from '@faker-js/faker';
import { useEffect, useState } from 'react';

import { INVOICE_DOCUMENT } from '@/__mocks__/invoiceDocumentMock';
import DocumentListTable from './document-table/DocumentListTable';
import { IDocument } from '@/types/invoiceDocuments';

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

function StatementInvoiceDocument() {
  const [data, setData] = useState<IDocument[]>([]);

  useEffect(() => {
    getData()
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return <DocumentListTable data={data} fileType="PDF" documentType="Statement/Invoice" />;
}

export default StatementInvoiceDocument;
