import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import { API_SOURCE } from "@/constants/apiSource";

interface ILeaseItem {
  id: number,
  first_name: string,
  last_name: string,
  phone: string,
  email: string,
}

interface ILeaseItems {
  data: ILeaseItem[],
}

function leaseQuery(endpoint: string, page: number = 1, perPage: number = 5) {
  return useQuery<ILeaseItems>({
    queryKey: [endpoint, page, perPage],
    queryFn: async () => {
      const resp = await axios
        .get(`${API_SOURCE}/${endpoint}?_page=${page}&_per_page=${perPage}`)
        .catch(error => {
          console.log(error);
          throw new Error('Network response was not ok');
        });

      return resp.data;
    }
  });
}

export { leaseQuery };
export type { ILeaseItem, ILeaseItems };

