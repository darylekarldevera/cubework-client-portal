import { IFilterOption, ISortOption } from "@/types/tableOptions";

export const DOCUMENT_SORT_OPTIONS: ISortOption[] = [
  {
    name: 'Name',
    sortType: {
      asc: 'ascending',
      desc: 'descending'
    }
  },
  {
    name: 'Date',
    sortType: {
      asc: 'ascending',
      desc: 'descending'
    }
  }
];

export const DOCUMENT_FILTER_OPTIONS: IFilterOption[] = [
  {
    name: 'All',
    filterType: 'all'
  },
  {
    name: 'PDF',
    filterType: 'pdf'
  },
  {
    name: 'CSV',
    filterType: 'csv'
  },
];
