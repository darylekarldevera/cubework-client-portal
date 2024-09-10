import { useEffect, useState } from 'react';
import { HOME_ACTIVITY_TABLE_MOCK } from '@/__mocks__/homeActivityTableMock';
import { HOME_ACTIVITY_TABLE_COLUMNS } from '@/constants/homeActivityTableColumns';
import IHomeActivityTable from '@/types/homeActivityTable';

import DataTable from './data-table/DataTable';
import { Heading2 } from './ui/headings';
import PaymentBalanceCard from './PaymentBalanceCard';
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
    <WrappedContent className="pb-[5%]">
      <Heading2 text="Home" className='' />
      <PaymentBalanceCard />
      <div className="border-b-2 border-solid border-[#59BA56] w-[100%] relative home-activity-bar mb-2 mt-6">
        <p className="text-sm text-[#59BA56] mb-2 w-[15%] text-center">Activity</p>
      </div>
      <DataTable 
        pageSize={5} 
        data={activityTableData} 
        columns={HOME_ACTIVITY_TABLE_COLUMNS} 
      />
    </WrappedContent>
  );
}

export default Home;
