import { useEffect, useState } from 'react';
import { HOME_ACTIVITY_TABLE_MOCK } from '@/__mocks__/homeActivityTableMock';
import { HOME_ACTIVITY_TABLE_COLUMNS } from '@/constants/homeActivityTableColumns';
import IHomeActivityTable from '@/types/homeActivityTable';

import DataTable from './data-table/DataTable';
import { Heading1 } from './ui/headings';
import PaymentBalanceCard from './PaymentBalanceCard';
import CWCard from './CWCard';

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
    <div className="pb-[3%]">
      <Heading1 text="Home" />

      <PaymentBalanceCard />

      <div className="border-b-2 border-solid border-cw-green w-[100%] relative home-activity-bar mb-2 mt-6">
        <p className="text-xs text-cw-green mb-2 w-[15%] text-center">Activity</p>
      </div>

      <CWCard>
        <DataTable pageSize={5} data={activityTableData} columns={HOME_ACTIVITY_TABLE_COLUMNS} cwStyle={true} />
      </CWCard>
    </div>
  );
}

export default Home;
