import api from '@/config/api';
import { IResponsePayLoad } from '@/types/responsePayload';
import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { IHomeRequestPayload, IHomeResponsePayload } from '@/types/homeActivityTable';

function HomeQuery(
  endpoint: string,
  body: IHomeRequestPayload
): UseMutationResult<IResponsePayLoad<IHomeResponsePayload>, Error, void, unknown> {
  const data = useMutation<IResponsePayLoad<IHomeResponsePayload>>({
    mutationFn: async () => {
      return await api
        .post(`/${endpoint}`, body)
        .catch((error) => {
          console.log(error);
          throw new Error('Network response was not ok');
        })
        .then((response) => response.data);
    },
  });

  return data;
}

export { HomeQuery };
