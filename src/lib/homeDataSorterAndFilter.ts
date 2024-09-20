import IHomeActivityTable from "@/types/homeActivityTable";

export interface IHomeCheckbox {
  sort: {
    parent: string;
    sortType: string;
  };
  filter: {
    charge: {
      name: string;
      filterType: string;
    };
    payments: {
      name: string;
      filterType: string;
    };
    pickDate: {
      startDate: Date;
      endDate: Date | undefined;
    };
  };
}

class HomeTableUtility<T> {
  private data: IHomeActivityTable[];
  private checkbox?: any;

  constructor(data: IHomeActivityTable[], checkbox?: any){
    this.data = data;
    this.checkbox = checkbox;
  }

  sortAndFilter = (): T[] => {
    let toUpdateData = [...this.data];
    toUpdateData = this.sortData();
    toUpdateData = this.filterData(toUpdateData);
    return toUpdateData as T[];
  }

  sortData = () => {
    const toUpdateData = [...this.data];
    // if (this?.checkbox?.sort.parent === "Date" && this?.checkbox?.sort.sortType === "asc") {
    //   return toUpdateData.sort((a, b) => {
    //     return a.date > b.date ? 1 : -1;
    //   });
    // }
    
    return toUpdateData.sort((a, b) => {
      return a.date < b.date ? 1 : -1;
    });
  };

  filterData = (data: IHomeActivityTable[]) => {
    let toUpdateData = data?.length ? [...data] : [];

    if (this?.checkbox?.filter?.pickDate?.startDate && this?.checkbox?.filter?.pickDate?.endDate) {
      toUpdateData = toUpdateData.filter((item) => {
        const itemDate = new Date(item.date);

        const startDate = this.checkbox?.filter?.pickDate?.startDate;
        const endDate = this.checkbox?.filter?.pickDate?.endDate;

        if (startDate && endDate) {
          return itemDate >= startDate && itemDate <= endDate;
        }

        return false;
      });
    }

    

    return toUpdateData;
  }

  setCheckbox = (checkbox: any) => {
    this.checkbox = checkbox;
  }
}

export default HomeTableUtility;