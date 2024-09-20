import IHomeActivityTable from "@/types/homeActivityTable";

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
    if (this?.checkbox?.sort.parent === "Date" && this?.checkbox?.sort.sortType === "asc") {
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

    if (
      this?.checkbox?.filter?.parent === 'Pre - Authorized Payment' &&
      this?.checkbox?.filter?.filterType === 'preAuthorizedPayment'
    ) {
      
      return toUpdateData.filter((item) => {
        return item.type === 'Pre-Authorized Payment';
      });
    }

    if (
      this?.checkbox?.filter?.parent === 'Rent - Warehouse' &&
      this?.checkbox?.filter?.filterType === 'rentWarehouse'
    ) {
      return toUpdateData.filter((item) => {
        return item.type === 'Rent - Warehouse';
      });
    }

    if (
      this?.checkbox?.filter?.parent === 'Forklift Rental' &&
      this?.checkbox?.filter?.filterType === 'forkliftRental'
    ) {
      return toUpdateData.filter((item) => {
        return item.type === 'Forklift Rental';
      });
    }

    return toUpdateData;
  }

  setCheckbox = (checkbox: any) => {
    this.checkbox = checkbox;
  }
}

export default HomeTableUtility;