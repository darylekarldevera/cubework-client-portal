class HomeTableUtility<T> {
  private data: T[];
  private checkbox?: any;

  constructor(data: T[], checkbox?: any){
    this.data = data;
    this.checkbox = checkbox;
  }

  sortAndFilter = (): T[] => {
    let toUpdateData = [...this.data];
    toUpdateData = this.sortData();
    toUpdateData = this.filterData();
    return toUpdateData;
  }

  sortData = () => {
    const toUpdateData = [...this.data];
    if (this?.checkbox?.sort.parent === "Name" && this?.checkbox?.sort.sortType === "asc") {
      // return toUpdateData.sort((a, b) => {
      //   return a.file.filename > b.file.filename ? 1 : -1;
      // });
    }
    
    if (this?.checkbox?.sort.parent === "Name" && this?.checkbox?.sort.sortType === "desc") {
      // return toUpdateData.sort((a, b) => {
      //   return a.file.filename < b.file.filename ? 1 : -1;
      // });
    }

    if (this?.checkbox?.sort.parent === "Date" && this?.checkbox?.sort.sortType === "asc") {
      // return toUpdateData.sort((a, b) => {
      //   return a.date > b.date ? 1 : -1;
      // });
    }

    // return toUpdateData.sort((a, b) => {
    //   return a.date < b.date ? 1 : -1;
    // });

    return toUpdateData;
  };

  filterData = () => {
    const toUpdateData = [...this.data];


    return toUpdateData;
  }

  setCheckbox = (checkbox: any) => {
    this.checkbox = checkbox;
  }
}

export default HomeTableUtility;