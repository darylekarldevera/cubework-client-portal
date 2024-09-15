import { IDocument } from "@/types/invoiceDocuments";

export interface ICheckbox {
  sort: string;
  filter: string;
}

class TableUtility {
  private data: IDocument[];
  private origData: IDocument[];
  private checkbox?: ICheckbox;

  constructor(data: IDocument[], origData: IDocument[], checkbox?: ICheckbox){
    this.data = data;
    this.origData = origData;
    this.checkbox = checkbox;
  }

  sortAndFilter = () => {
    let toUpdateData = [...this.data];
    toUpdateData = this.sortData();
    toUpdateData = this.filterData();
    return toUpdateData;
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

  filterData = () => {
    const toUpdateData = [...this.origData];

    if (this?.checkbox?.filter === 'pdf') {
      return toUpdateData.filter((item) => item.file.mimetype.includes('application/pdf'));
    }

    if (this?.checkbox?.filter === 'csv') {
      return toUpdateData.filter((item) => item.file.mimetype.includes('text/csv'));
    }

    return this.origData;
  };
}

export default TableUtility;