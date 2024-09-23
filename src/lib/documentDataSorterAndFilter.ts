import { IDocument } from "@/types/invoiceDocuments";

export interface ICheckbox {
  sort: {
    name: string;
    sortType: string;
  };
  filter: {
    name: string;
    filterType: string;
    pickDate: {
      startDate: Date;
      endDate: Date | undefined;
    };
  };
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
    const sortName = this?.checkbox?.sort?.name?.toLowerCase();
    const sortType = this?.checkbox?.sort?.sortType?.toLowerCase();

    if (sortName === "name" && sortType === "ascending") {
      return toUpdateData.sort((a, b) => {
        return a.file.filename > b.file.filename ? 1 : -1;
      });
    }
    
    if (sortName === "name" && sortType === "descending") {
      return toUpdateData.sort((a, b) => {
        return a.file.filename < b.file.filename ? 1 : -1;
      });
    }

    if (sortName === "date" && sortType === "ascending") {
      return toUpdateData.sort((a, b) => {
        return a.date > b.date ? 1 : -1;
      });
    }

    return toUpdateData.sort((a, b) => {
      return a.date < b.date ? 1 : -1;
    });
  };

  filterData = (data: IDocument[]) => {
    let toUpdateData = [...data];
    // Filter by name and type of document (invoice, statement, etc.)
    const filterName = this?.checkbox?.filter?.name?.toLowerCase();
    const filterType = this?.checkbox?.filter?.filterType?.toLowerCase();

    // Filter by date
    const startDate = this?.checkbox?.filter?.pickDate?.startDate;
    const endDate = this?.checkbox?.filter?.pickDate?.endDate;

    // filter by date range before filtering by name and type
    if (startDate && endDate) {
      toUpdateData = toUpdateData.filter((item) => {
        const itemDate = new Date(item.date);

        if (startDate && endDate) {
          return itemDate >= startDate && itemDate <= endDate;
        }

        if (startDate) {
          return itemDate >= startDate;
        }

        return false;
      });
    }

    return toUpdateData;
  };

  setCheckbox = (checkbox: ICheckbox) => {
    this.checkbox = checkbox;
  };
}

export default DocumentTableUtility;