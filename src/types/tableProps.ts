export interface ISortProps {
  [key: string]: string;
  name: string;
  sortType: string;
}

export interface IFilterPickDateProps {
  [key: string]: string | Date | undefined;
  startDate: Date;
  endDate: Date | undefined;
}

export interface IFilterProps {
  name: string;
  filterType: string;
  pickDate: IFilterPickDateProps;
}

export interface ICheckboxProps {
  sort: ISortProps;
  filter: IFilterProps;
}