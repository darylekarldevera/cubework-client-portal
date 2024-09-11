import React from 'react';
import DocumentDetailsCard from './DocumentDetailsCard';
import { IDocument } from '@/types/invoiceDocuments';

interface IDocumentListTableProps {
  data: IDocument[];
  currentPage: number;
}

function DocumentList({ data, currentPage }: IDocumentListTableProps): JSX.Element {
  const VISIBLE_DATA = 5;
  const dataStartIndex = currentPage * VISIBLE_DATA;
  const dataEndIndex = dataStartIndex + VISIBLE_DATA;

  return (
    <React.Fragment>
      {data.map((item, index) => (
        <DocumentDetailsCard
          key={item.id}
          item={item}
          isVisible={index < dataStartIndex || index > dataEndIndex}
        />
      ))}
    </React.Fragment>
  );
}

export default DocumentList;
