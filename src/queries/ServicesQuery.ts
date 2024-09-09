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

function ServicesQuery(page: number = 1, perPage: number = 5) {
  return useQuery<IServices>({
    queryKey: ['services', page, perPage],
    queryFn: async () => {
      const resp = await fetch(`http://localhost:3000/services?_page=${page}&_per_page=${perPage}`);
      const data = await resp.json();

      return data;
    }
  });
}

export { ServicesQuery };
export type { IItem, IServices };
