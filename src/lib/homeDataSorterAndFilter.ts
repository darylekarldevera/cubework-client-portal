import IHomeActivityTable from "@/types/homeActivityTable";
import BaseDataSorterAndFilter from "./baseDataSorterAndFilter";
import { ICheckboxProps, IFilterProps } from "@/types/tableProps";

export interface IHomeFilterProps extends IFilterProps {
  charge: {
    name: string;
    filterType: string;
  };
  payments: {
    name: string;
    filterType: string;
  };
}

class HomeTableUtility extends BaseDataSorterAndFilter<IHomeActivityTable>{
  protected data: IHomeActivityTable[];
  protected checkbox?: ICheckboxProps;

  constructor(data: IHomeActivityTable[], checkbox?: any) {
    super(data, checkbox);
    this.data = data;
    this.checkbox = checkbox;
  }

  sortData = () => {
    const toUpdateData = [...this.data];
    return this.sortDataByDate(toUpdateData);
  };

  filterData = (data: IHomeActivityTable[]) => {
    const toUpdateData = data?.length ? [...data] : [];
    const filteredDataByDate = this.filterByDate(toUpdateData);
    return filteredDataByDate;
  };
}

export default HomeTableUtility;