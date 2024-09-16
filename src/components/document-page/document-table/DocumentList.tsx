import React from 'react';
import { IDocument } from '@/types/invoiceDocuments';
import DocumentDetailsCard from './DocumentDetailsCard';
import DocumentListNoRecords from './DocumentListNoRecords';

interface IDocumentListTableProps {
  data: IDocument[];
  currentPage: number;
  fileType: string;
  documentType: string;
}

function DocumentList({ data, currentPage, fileType, documentType }: IDocumentListTableProps): JSX.Element {
  const VISIBLE_DATA = 5;
  const dataStartIndex = currentPage * VISIBLE_DATA;
  const dataEndIndex = dataStartIndex + VISIBLE_DATA;

  return (
    <React.Fragment>
      {data.length ? (
        <div className="h-full">
          {data.map((item, index) => (
            <DocumentDetailsCard
              key={item.id}
              item={item}
              isVisible={index < dataStartIndex || index > dataEndIndex}
              fileType={fileType}
              documentType={documentType}
            />
          ))}
        </div>
      ) : (
        <DocumentListNoRecords />
      )}
    </React.Fragment>
  );
}

export default DocumentList;
