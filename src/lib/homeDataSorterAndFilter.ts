
import { InvoiceDetails } from "@/types/homeActivityTable";
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

class HomeTableUtility extends BaseDataSorterAndFilter<InvoiceDetails>{
  protected data: InvoiceDetails[];
  protected checkbox?: ICheckboxProps;

  constructor(data: InvoiceDetails[], checkbox?: any) {
    super(data, checkbox);
    this.data = data;
    this.checkbox = checkbox;
  }

  sortData = () => {
    const toUpdateData = [...this.data];
    return this.sortDataByDate(toUpdateData);
  };

  filterData = (data: InvoiceDetails[]) => {
    const toUpdateData = data?.length ? [...data] : [];
    const filteredDataByDate = this.filterByDate(toUpdateData);
    return filteredDataByDate;
  };

  filterByDate = (data: InvoiceDetails[]) => {
    const toUpdateData = data?.length ? [...data] : [];
    const startDate = this?.checkbox?.filter?.pickDate?.startDate;
    const endDate = this?.checkbox?.filter?.pickDate?.endDate;
    
    return toUpdateData.filter((item) => {
      const itemDate = new Date(item.InvoiceDate);

      if (startDate && endDate) {
        return itemDate >= startDate && itemDate <= endDate;
      }

      if (startDate) {
        return itemDate >= startDate;
      }

      return false;
    });
  };
}

export default HomeTableUtility;