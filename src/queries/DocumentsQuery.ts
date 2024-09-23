import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { API_SOURCE } from '@/constants/apiSource';
import { IDocument } from '@/types/invoiceDocuments';
import { Buffer } from 'buffer';
import { faker } from '@faker-js/faker';

function DocumentsQuery(endpoint: string) {
  return useQuery<IDocument[]>({
    queryKey: [endpoint],
    queryFn: async () => {
      const resp = await axios.get(`${API_SOURCE}/${endpoint}`).catch((error) => {
        console.log(error);
        throw new Error('Network response was not ok');
      });

      const data = resp.data.map((file: any, index: number) => {
        const filenames = [faker.system.commonFileName('pdf'), faker.system.commonFileName('csv')];
        const randomIndex = Math.floor(Math.random() * filenames.length);
        const filename = filenames[randomIndex];
        const mimetype = filename.includes('pdf') ? 'application/pdf' : 'text/csv';

        return {
          ...file,
          id: index + 1,
          date: faker.date.anytime(),
          file: {
            buffer: Buffer.from(faker.system.filePath()),
            mimetype: mimetype,
            originalname: faker.system.fileName(),
            size: Buffer.byteLength(faker.system.filePath()),
            filename: filename,
            destination: faker.system.directoryPath(),
            fieldname: '',
            encoding: '',
            path: faker.system.filePath(),
          },
        };
      });

      return data;
    },
  });
}

export { DocumentsQuery };
