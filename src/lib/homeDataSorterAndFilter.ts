import { ITableUtility } from "@/types/tableUtility";
import { ICheckboxProps, IFilterProps } from "@/types/tableProps";
import IHomeActivityTable from "@/types/homeActivityTable";

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

class HomeTableUtility implements ITableUtility<IHomeActivityTable, ICheckboxProps> {
  private data: IHomeActivityTable[];
  private checkbox?: ICheckboxProps;

  constructor(data: IHomeActivityTable[], checkbox?: any) {
    this.data = data;
    this.checkbox = checkbox;
  }

  sortAndFilter = (): IHomeActivityTable[] => {
    let toUpdateData = [...this.data];
    toUpdateData = this.sortData();
    toUpdateData = this.filterData(toUpdateData);
    return toUpdateData;
  };

  sortData = () => {
    const toUpdateData = [...this.data];
    const sortName = this?.checkbox?.sort?.name?.toLowerCase();
    const sortType = this?.checkbox?.sort?.sortType?.toLowerCase();

    if (sortName === 'date' && sortType === 'ascending') {
      return toUpdateData.sort((a, b) => {
        return a.date > b.date ? 1 : -1;
      });
    }

    return toUpdateData.sort((a, b) => {
      return a.date < b.date ? 1 : -1;
    });
  };

  filterData = (data: IHomeActivityTable[]) => {
    let toUpdateData = data?.length ? [...data] : [];
    const startDate = this?.checkbox?.filter?.pickDate?.startDate;
    const endDate = this?.checkbox?.filter?.pickDate?.endDate;

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

  setCheckbox = (checkbox: any) => {
    this.checkbox = checkbox;
  };
}

export default HomeTableUtility;