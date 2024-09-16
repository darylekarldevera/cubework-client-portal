import { IDocument } from "@/types/invoiceDocuments";

export interface ICheckbox {
  sort: string;
  filter: string;
}

class DocumentTableUtility<T> {
  private data: IDocument[];
  private checkbox?: ICheckbox;

  constructor(data: IDocument[], checkbox?: ICheckbox){
    this.data = data;
    this.checkbox = checkbox;
  }

  sortAndFilter = (): T[] => {
    let toUpdateData = [...this.data];
    toUpdateData = this.sortData();
    toUpdateData = this.filterData(toUpdateData);
    return toUpdateData as T[];
  }

  sortData = () => {
    const toUpdateData = [...this.data];
    if (this?.checkbox?.sort === 'ascending') {
      return toUpdateData.sort((a, b) => {
        return a.file.filename > b.file.filename ? 1 : -1;
      });
    }
    
    if (this?.checkbox?.sort === 'descending') {
      return toUpdateData.sort((a, b) => {
        return a.file.filename < b.file.filename ? 1 : -1;
      });
    }

    return toUpdateData.sort((a, b) => {
      return a.date > b.date ? 1 : -1;
    });
  };

  filterData = (data: IDocument[]) => {
    const toUpdateData = [...data];

    if (this?.checkbox?.filter === 'pdf') {
      return toUpdateData.filter((item) => item.file.mimetype.includes('application/pdf'));
    }

    if (this?.checkbox?.filter === 'csv') {
      return toUpdateData.filter((item) => item.file.mimetype.includes('text/csv'));
    }

    return toUpdateData;
  };

  setCheckbox = (checkbox: ICheckbox) => {
    this.checkbox = checkbox;
  };
}

export default DocumentTableUtility;