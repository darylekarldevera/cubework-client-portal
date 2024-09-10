import { useEffect, useState } from 'react';
import { HOME_ACTIVITY_TABLE_MOCK } from '@/__mocks__/homeActivityTableMock';
import { HOME_ACTIVITY_TABLE_COLUMNS } from '@/constants/homeActivityTableColumns';
import IHomeActivityTable from '@/types/homeActivityTable';

import DataTable from './data-table/DataTable';
import { Heading1 } from './ui/headings';
import HomePaymentDue from './HomePaymentDue';
import WrappedContent from './WrappedContent';

// placeholder for fetching data
const getData = async (): Promise<IHomeActivityTable[]> => {
  const data = [...Array(50).fill(HOME_ACTIVITY_TABLE_MOCK)].flat();
  const newData = data.map((item, index) => {
    return {
      ...item,
      id: index + 1,
      amount: Math.floor(Math.random() * 1000),
    };
  });

  return newData;
};

function Home() {
  const [activityTableData, setActivityTableData] = useState<IHomeActivityTable[]>([]);

  useEffect(() => {
    getData()
      .then((data) => {
        setActivityTableData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <WrappedContent>
      <Heading1 text="Home" />
      <HomePaymentDue />
      <DataTable columns={HOME_ACTIVITY_TABLE_COLUMNS} data={activityTableData} pageSize={5} />
    </WrappedContent>
  );
}

export default Home;
