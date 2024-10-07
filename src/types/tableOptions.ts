export interface ISortOption {
  name: string;
  sortType: {
    [key: string]: string;
    asc: string;
    desc: string;
  };
}

export interface IFilterOption {
  name: string;
  filterType: { [key: string]: string, }
    | string
}
