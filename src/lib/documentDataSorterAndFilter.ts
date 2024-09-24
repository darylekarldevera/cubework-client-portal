/* eslint-disable @typescript-eslint/ban-ts-comment */
import { IDocument } from "@/types/invoiceDocuments";
import { ICheckboxProps } from "@/types/tableProps";
import BaseDataSorterAndFilter from "./baseDataSorterAndFilter";

class DocumentTableUtility extends BaseDataSorterAndFilter<IDocument> {
  protected data: IDocument[];
  protected checkbox?: ICheckboxProps;

  constructor(data: IDocument[], checkbox?: ICheckboxProps){
    super(data, checkbox);
    this.data = data;
    this.checkbox = checkbox;
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

    return this.sortDataByDate(toUpdateData);
  };

  filterData = (data: IDocument[]) => {
    const toUpdateData = [...data];
    const filteredDataByDate = this.filterByDate(toUpdateData);

    // Filter by name and type of document (invoice, statement, etc.)
    // Save these variables for future use
    // @ts-expect-error
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const filterName = this?.checkbox?.filter?.name?.toLowerCase();

    // @ts-expect-error
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const filterType = this?.checkbox?.filter?.filterType?.toLowerCase();

    return filteredDataByDate;
  };
}

export default DocumentTableUtility;