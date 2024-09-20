import { IDocument } from "@/types/invoiceDocuments";

export interface ICheckbox {
  sort: {
    parent: string;
    sortType: string;
  };
  filter: {
    parent: string;
    filterType: string;
    pickDate: {
      startDate: Date;
      endDate: Date | undefined;
    }
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
    // if (this?.checkbox?.sort.parent === "Name" && this?.checkbox?.sort.sortType === "asc") {
    //   return toUpdateData.sort((a, b) => {
    //     return a.file.filename > b.file.filename ? 1 : -1;
    //   });
    // }
    
    // if (this?.checkbox?.sort.parent === "Name" && this?.checkbox?.sort.sortType === "desc") {
    //   return toUpdateData.sort((a, b) => {
    //     return a.file.filename < b.file.filename ? 1 : -1;
    //   });
    // }

    // if (this?.checkbox?.sort.parent === "Date" && this?.checkbox?.sort.sortType === "asc") {
    //   return toUpdateData.sort((a, b) => {
    //     return a.date > b.date ? 1 : -1;
    //   });
    // }

    return toUpdateData.sort((a, b) => {
      return a.date < b.date ? 1 : -1;
    });
  };

  filterData = (data: IDocument[]) => {
    let toUpdateData = [...data];

    if (this?.checkbox?.filter?.pickDate?.startDate && this?.checkbox?.filter?.pickDate?.endDate) {
      toUpdateData = toUpdateData.filter((item) => {
        const itemDate = new Date(item.date);

        const startDate = this.checkbox?.filter?.pickDate?.startDate;
        const endDate = this.checkbox?.filter?.pickDate?.endDate;

        if (startDate && endDate) {
          return itemDate >= startDate && itemDate <= endDate;
        }

        if (startDate) {
          return itemDate >= startDate;
        }

        return false;
      });
    }



    // if (this?.checkbox?.filter.parent === "PDF" && this?.checkbox?.filter.filterType === "pdf") {
    //   return toUpdateData.filter((item) => item.file.mimetype.includes('application/pdf'));
    // }

    // if (this?.checkbox?.filter.parent === "CSV" && this?.checkbox?.filter.filterType === "csv") {
    //   return toUpdateData.filter((item) => item.file.mimetype.includes('text/csv'));
    // }

    return toUpdateData;
  };

  setCheckbox = (checkbox: ICheckbox) => {
    this.checkbox = checkbox;
  };
}

export default DocumentTableUtility;