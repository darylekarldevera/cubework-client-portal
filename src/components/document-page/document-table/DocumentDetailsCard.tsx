import { useContext } from 'react';

import formatDate from '@/lib/formatDate';
import arrowDown from '@/assets/icons/arrow-down.svg';
import { IDocument, IFile } from '@/types/invoiceDocuments';
import { ErrorModalContext } from '@/contexts/ErrorModalContext';
import { FILE_SYSTEM_PICKER_OPTIONS } from '@/constants/fileSystemFileHandle';

interface IDocumentDetailsCardProps {
  isVisible: boolean;
  item: IDocument;
  documentType: string;
  placeholderError: boolean;
}

function DocumentDetailsCard({
  isVisible,
  item,
  documentType,
  placeholderError,
}: IDocumentDetailsCardProps): JSX.Element | null {
  const { showError, setShowError } = useContext(ErrorModalContext);

  const downloadFile = async (file: IFile) => {
    try {
      if (placeholderError) {
        throw new Error('File not found');
      };

      const options = {
        suggestedName: file?.filename,
        ...FILE_SYSTEM_PICKER_OPTIONS,
      };

      // prompt the user for the location to save the file?.
      const handle = await window.showSaveFilePicker(options);
      const blob = new Blob([file?.buffer], { type: file?.mimetype });
      const objToFile = new File([blob], 'filename' + '.pdf', { type: file?.mimetype });

      const writable = await handle.createWritable();
      await writable.write(objToFile);
      await writable.close();
    } catch (error:any) {
      console.log(error);
      if (error !== 'File not found') return;
      setShowError(!showError);
    }
  };

  function getFileType(fileType: string) {
    return fileType?.includes('pdf') ? 'PDF' : 'CSV';
  }

  if (isVisible) return null;

  return (
    <div className="flex items-center justify-between p-2 font-regular text-cb-table border-b border-gray-500W">
      <div className="flex flex-col mx-1">
        <p className="text-cw-green">{item?.file?.filename}</p>
        <p>
          {getFileType(item?.file?.mimetype)} • {formatDate(item?.date)} • {documentType}
        </p>
      </div>
      <img
        alt="download_icon"
        src={arrowDown}
        className="cursor-pointer w-4"
        onClick={() => downloadFile(item?.file)}
      />
    </div>
  );
}

export default DocumentDetailsCard;
