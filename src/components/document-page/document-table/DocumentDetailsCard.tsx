
import formatDate from '@/lib/formatDate';
import arrowDown from '@/assets/icons/arrow-down.svg';
import { IDocument, IFile } from '@/types/invoiceDocuments';
import { FILE_SYSTEM_PICKER_OPTIONS } from '@/constants/fileSystemFileHandle';

interface IDocumentDetailsCardProps {
  isVisible: boolean;
  item: IDocument;
  documentType: string;
}

function DocumentDetailsCard({ isVisible, item, documentType, }: IDocumentDetailsCardProps): JSX.Element | null {

  const downloadFile = async (file: IFile) => {
    try {
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
    } catch (error) {
      console.log(error);
    }
  };

  function getFileType(fileType: string) {
    return fileType?.includes('pdf') ? 'PDF' : 'CSV';
  }

  if (isVisible) return null;

  return (
    <div className="flex items-center justify-between p-2 font-regular text-cb-table border-b border-gray-500W">
      <div className="flex flex-col mx-1">
        <p className="text-[#59BA56]">{item?.file?.filename}</p>
        <p>
          {getFileType(item?.file?.mimetype)} • {formatDate(item?.date)} • {documentType}
        </p>
      </div>
      <img alt="download_icon" src={arrowDown} className="cursor-pointer w-4" onClick={() => downloadFile(item?.file)} />
    </div>
  );
}

export default DocumentDetailsCard;
