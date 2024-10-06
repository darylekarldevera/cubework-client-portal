import { ITableUtility } from '@/types/tableUtility';
import { ICheckboxProps } from '@/types/tableProps';

class BaseDataSorterAndFilter<DataType> implements ITableUtility<DataType, ICheckboxProps> {
  protected data: DataType[];
  protected checkbox?: ICheckboxProps;

  constructor(data: DataType[], checkbox?: ICheckboxProps) {
    this.data = data;
    this.checkbox = checkbox;
  }

  setCheckbox = (checkbox: ICheckboxProps) => {
    this.checkbox = checkbox;
  };

  sortAndFilter = (): DataType[] => {
    const sortedData = this.sortData();
    const sortedAndFilteredData = this.filterData(sortedData);
    return sortedAndFilteredData;
  };

  sortData = () => {
    const toUpdateData = [...this.data];
    const sortedDataByDate = this.sortDataByDate(toUpdateData);
    return sortedDataByDate;
  };

  filterData(data: DataType[]): DataType[] {
    const toUpdateData = data?.length ? [...data] : [];
    const filteredDataByDate = this.filterByDate(toUpdateData);
    return filteredDataByDate;
  }

  sortDataByDate(data: DataType[]): DataType[] {
    const toUpdateData = [...data];
    const sortName = this?.checkbox?.sort?.name?.toLowerCase();
    const sortType = this?.checkbox?.sort?.sortType?.toLowerCase();

    if (sortName === 'date' && sortType === 'ascending') {
      return toUpdateData.sort((a, b) => {
        return (a as any).date > (b as any).date ? 1 : -1;
      });
    }

    return toUpdateData.sort((a, b) => {
      return (a as any).date < (b as any).date ? 1 : -1;
    });
  }

  filterByDate = (data: DataType[]) => {
    const toUpdateData = data?.length ? [...data] : [];
    const startDate = this?.checkbox?.filter?.pickDate?.startDate;
    const endDate = this?.checkbox?.filter?.pickDate?.endDate;

    return toUpdateData.filter((item) => {
      const itemDate = new Date((item as any).date);

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

export default BaseDataSorterAndFilter;
