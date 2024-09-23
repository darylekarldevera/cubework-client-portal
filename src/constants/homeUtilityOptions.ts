import { IFilterOption, ISortOption } from "@/types/tableOptions";

export const HOME_SORT_OPTIONS: ISortOption[] = [
  {
    name: 'Date',
    sortType: {
      asc: 'ascending',
      desc: 'descending',
    },
  },
];

export const HOME_FILTER_OPTIONS: IFilterOption[] = [
  {
    name: 'Charge',
    filterType: 'All',
  },
  {
    name: 'Payments',
    filterType: 'All',
  },
];