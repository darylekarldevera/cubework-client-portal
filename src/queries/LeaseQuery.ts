import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import { API_SOURCE } from "@/constants/apiSource";
import { useContext } from "react";
import { ErrorModalContext } from "@/contexts/ErrorModalContext";

interface ILeaseItem {
  id: number,
  first_name: string,
  last_name: string,
  name?: string,
  phone: string,
  email: string,
}

interface ILeaseItems {
  data: ILeaseItem[],
}

interface ILeaseMySpaceItem {
  id: number,
  start_date: string,
  end_date: string,
  move_in_date: string,
}

interface ILeaseMySpaceItems {
  data: ILeaseMySpaceItem[],
}

interface ILeaseChargeScheduleItem {
  id: number,
  description: string,
  period: string,
  billing_frequency: string,
  units: string,
  amount: number | string,

}

interface ILeaseChargeScheduleItems {
  data: ILeaseChargeScheduleItem[];
}

function leaseQuery<T extends ILeaseItems | ILeaseMySpaceItems | ILeaseChargeScheduleItems>(endpoint: string, page: number = 1, perPage: number = 5) {
  const { setShowError } = useContext(ErrorModalContext);

  return useQuery<T>({
    queryKey: [endpoint, page, perPage],
    queryFn: async () => {
      const resp = await axios
        .get(`${API_SOURCE}/${endpoint}?_page=${page}&_per_page=${perPage}`)
        .catch(error => {
          setShowError(true);
          console.log(error);
          throw new Error('Network response was not ok');
        });

      return resp.data;
    }
  });
}

export { leaseQuery, };
export type {
  ILeaseItem,
  ILeaseItems,
  ILeaseMySpaceItem,
  ILeaseMySpaceItems,
  ILeaseChargeScheduleItem,
  ILeaseChargeScheduleItems,
};
