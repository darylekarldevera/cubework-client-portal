export interface ITableUtility<DataType, Checkbox> {
  sortAndFilter(): DataType[];

  sortData(): DataType[];

  filterData(data: DataType[]): DataType[];

  setCheckbox(checkbox: Checkbox): void;
};