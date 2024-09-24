import { IDocument } from "@/types/invoiceDocuments";
import { ITableUtility } from "@/types/tableUtility";
import { ICheckboxProps } from "@/types/tableProps";

class DocumentTableUtility implements ITableUtility<IDocument, ICheckboxProps> {
  private data: IDocument[];
  private checkbox?: ICheckboxProps;

  constructor(data: IDocument[], checkbox?: ICheckboxProps){
    this.data = data;
    this.checkbox = checkbox;
  }

  sortAndFilter = (): IDocument[] => {
    let toUpdateData = [...this.data];
    toUpdateData = this.sortData();
    toUpdateData = this.filterData(toUpdateData);
    return toUpdateData;
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

  setCheckbox = (checkbox: ICheckboxProps) => {
    this.checkbox = checkbox;
  };
}

export default DocumentTableUtility;