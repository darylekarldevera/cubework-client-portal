import { HOME_ACTIVITY_TABLE_COLUMNS } from '@/constants/homeActivityTableColumns';
import IHomeActivityTable from '@/types/homeActivityTable';
import DataTable from './data-table/DataTable';
import HomePaymentDue from './HomePaymentDue';
import { HOME_ACTIVITY_TABLE_MOCK } from '@/__mocks__/homeActivityTableMock.ts';
import { useEffect, useState } from 'react';
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
    <div className="flex-grow h-[100%] flex justify-center overflow-y-auto">
      <div className="flex flex-col justify-around ">
        <p>Home</p>
        <HomePaymentDue />
        <DataTable columns={HOME_ACTIVITY_TABLE_COLUMNS} data={activityTableData} />
      </div>
    </div>
  );
}

export default Home;
