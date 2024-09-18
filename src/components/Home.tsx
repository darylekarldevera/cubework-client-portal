import { useCallback, useEffect, useMemo, useState } from 'react';
import { HOME_ACTIVITY_TABLE_COLUMNS } from '@/constants/homeActivityTableColumns';
import IHomeActivityTable from '@/types/homeActivityTable';

import DataTable from './data-table/DataTable';
import { Heading1 } from './ui/headings';
import PaymentBalanceCard from './PaymentBalanceCard';
import CWCard from './CWCard';
import { HomeQuery } from '@/queries/HomeQuery';
import HomeTableUtility from '@/lib/homeDataSorterAndFilter';
import TableUtilities from './document-page/document-table/table-utilities/TableUtilities';


function Home() {
  const [originalData, setOriginalData] = useState<IHomeActivityTable[]>([]);
  const [documentsData, setDocumentsData] = useState<IHomeActivityTable[]>([]);
  const homeData = HomeQuery('invoice_documents');

  const filterCb = useCallback((items: IHomeActivityTable[], searchData: string): IHomeActivityTable[] => {
    return items.filter((item) => {
      // Matches any non-alphanumeric character and underscores
      const regex = /[\W_]+/g;
      const search = searchData.toLowerCase()?.replace(regex, '');
      const itemType = item?.type?.toLowerCase()?.replace(regex, '');
      const itemMethod = item?.method?.toLowerCase()?.replace(regex, '');
      return itemType.includes(search.toLowerCase()) || itemMethod.includes(search.toLowerCase());
    });
  }, []);

  // Memoize the utility instance only when the homeData data changes
  const utility = useMemo(() => {
    if (homeData.isSuccess && homeData.data) {
      // Use spread operator to avoid mutating original data
      const utilityInstance = new HomeTableUtility<IHomeActivityTable>([...homeData.data]);
      const sortedData = utilityInstance.sortData();
      setDocumentsData(sortedData);
      setOriginalData(sortedData);
      return utilityInstance;
    }
    return new HomeTableUtility<IHomeActivityTable>([]);
  }, [homeData.data, homeData.isSuccess]);

  useEffect(() => {
    if (homeData.isSuccess && homeData.data) {
      // Sort the data and update the state
      const sortedData = utility.sortData();
      setDocumentsData(sortedData);
      setOriginalData(sortedData);
    }

    if (homeData.isError) {
      setDocumentsData([]);
      setOriginalData([]);
    }
  }, []);

  if (homeData.isLoading) {
    return <div>Loading...</div>;
  }

  if (homeData.isError) {
    return <div>Error...</div>;
  }

  return (
    <div className="pb-[3%]">
      <Heading1 text="Home" />

      <PaymentBalanceCard />

      <div className="border-b-2 border-solid border-cw-green w-[100%] relative home-activity-bar mb-2 mt-6">
        <p className="text-xs text-cw-green mb-2 w-[15%] text-center">Activity</p>
      </div>

      <TableUtilities
        data={documentsData}
        originalData={originalData}
        setData={setDocumentsData}
        utilityInstance={utility}
        sortOptions={[
          {
            name: 'Date',
            sortType: {
              asc: 'ASC',
              desc: 'DESC',
            },
          },
        ]} 
        filterOptions={[
          {
            name: 'All',
            filterType: 'all',
          },
          {
            name: 'Pre - Authorized Payment',
            filterType: 'preAuthorizedPayment',
          },
          {
            name: 'Rent - Warehouse',
            filterType: 'rentWarehouse',
          },
          {
            name: 'Forklift Rental',
            filterType: 'forkliftRental',
          },
        ]}
        filterCb={filterCb}
      />
      <CWCard>
        <DataTable pageSize={5} data={documentsData} columns={HOME_ACTIVITY_TABLE_COLUMNS} cwStyle={true} />
      </CWCard>
    </div>
  );
}

export default Home;
