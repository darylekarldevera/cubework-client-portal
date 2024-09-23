import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

import { API_SOURCE } from '@/constants/apiSource';
import IHomeActivityTable from '@/types/homeActivityTable';
import { faker } from '@faker-js/faker';

const generateRandom = (arrayString: string[]) => {
  const randomIndex = Math.floor(Math.random() * arrayString.length);
  return arrayString[randomIndex];
}

function HomeQuery(endpoint: string) {
  return useQuery<IHomeActivityTable[]>({
    queryKey: [endpoint],
    queryFn: async () => {
      const resp = await axios.get(`${API_SOURCE}/${endpoint}`).catch((error) => {
        console.log(error);
        throw new Error('Network response was not ok');
      });

      const data = resp.data.map((item: any, index: number) => {
        const typeArray = ['Pre-Authorized Payment', 'Rent - Warehouse', 'Forklift Rental'];
        const methodArray = ['-', '(chk) : ACH - 0000 Pre - Authorized', 'Visa'];
        const chargeArray = [
          'Parking Space',
          'Maintenance Fee',
          'Late Payment Penalty',
          'Membership Fee',
          'Service Upgrade',
          'Utility Bill',
        ];

        const paymentArray = [
          'Credit Card Payment',
          'Cash Payment',
          'Bank Transfer',
          'Online Payment',
          'Check Payment',
          'Mobile Payment',
        ];

        const type = generateRandom(typeArray);
        const method = generateRandom(methodArray);
        const charge = generateRandom(chargeArray);
        const payment = generateRandom(paymentArray);

        return {
          ...item,
          id: index + 1,
          type,
          method,
          date: faker.date.anytime(),
          charge,
          payments: payment,
        };
      });

      return data;
    },
  });
}

export { HomeQuery };
