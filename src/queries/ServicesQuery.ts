import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface IItem {
  id: number,
  service_name: string,
  description: string,
  rate: number,
}

interface IServices {
  data: {
    data: IItem[],
  }
}

function servicesQuery(endpoint: string, page: number = 1, perPage: number = 5) {
  return useQuery<IServices>({
    queryKey: ['services', page, perPage],
    queryFn: async () => {
      const resp = await axios
        .get(`http://localhost:3000/${endpoint}?_page=${page}&_per_page=${perPage}`)
        .catch(error => {
          console.log(error);
          throw new Error('Network response was not ok');
        });

      return resp.data;
    }
  });
}

export { servicesQuery };
export type { IItem, IServices };
