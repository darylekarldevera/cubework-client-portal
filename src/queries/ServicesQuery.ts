import { useQuery } from "@tanstack/react-query";

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

function servicesQuery(page: number = 1, perPage: number = 5) {
  return useQuery<IServices>({
    queryKey: ['services', page, perPage],
    queryFn: async () => {
      const resp = await fetch(`http://localhost:3000/services?_page=${page}&_per_page=${perPage}`);
      const data = await resp.json();

      return data;
    }
  });
}


function myServicesQuery(page: number = 1, perPage: number = 5) {
  return useQuery<IServices>({
    queryKey: ['my-services', page, perPage],
    queryFn: async () => {
      const resp = await fetch(`http://localhost:3000/my_services?_page=${page}&_per_page=${perPage}`);
      const data = await resp.json();

      return data;
    }
  });
}


export { servicesQuery, myServicesQuery };
export type { IItem, IServices };
