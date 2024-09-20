export interface ISortOption {
  name: string;
  sortType: {
    asc: string;
    desc: string;
  };
}

export interface IFilterOption {
  name: string;
  filterType: string;
}

const SORT_OPTIONS: ISortOption[] = [
  {
    name: 'Name',
    sortType: {
      asc: 'ASC',
      desc: 'DESC'
    }
  },
  {
    name: 'Date',
    sortType: {
      asc: 'ASC',
      desc: 'DESC'
    }
  }
];

const FILTER_OPTIONS: IFilterOption[] = [
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

export { SORT_OPTIONS, FILTER_OPTIONS };
