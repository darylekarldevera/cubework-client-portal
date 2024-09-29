import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import { API_SOURCE } from "@/constants/apiSource";
import { useContext } from "react";
import { ErrorModalContext } from "@/contexts/ErrorModalContext";

interface IItem {
  id: number,
  service_name: string,
  description: string,
  rate: number,
}

interface IServices {
  data: IItem[],
}

function servicesQuery(endpoint: string, page: number = 1, perPage: number = 5) {
  const { setShowError } = useContext(ErrorModalContext);

  return useQuery<IServices>({
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

export { servicesQuery };
export type { IItem, IServices };
