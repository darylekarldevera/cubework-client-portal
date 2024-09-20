import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { HomeQuery } from '@/queries/HomeQuery';
import HomeTableUtility from '@/lib/homeDataSorterAndFilter';
import IHomeActivityTable from '@/types/homeActivityTable';
import { HOME_ACTIVITY_TABLE_COLUMNS } from '@/constants/homeActivityTableColumns';

import CWCard from './CWCard';
import { Heading1 } from './ui/headings';
import DataTable from './data-table/DataTable';
import PaymentBalanceCard from './PaymentBalanceCard';
import ErrorMessage from '@/shared/modals/ErrorMessage';
import TableUtilities from './document-page/document-table/table-utilities/TableUtilities';

function Home() {
  const [originalData, setOriginalData] = useState<IHomeActivityTable[]>([]);
  const [homeData, setHomeData] = useState<IHomeActivityTable[]>([]);
  const homeApiData = HomeQuery('invoice_documents');

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

  // Memoize the utility instance only when the homeApiData data changes
  const utility = useMemo(() => {
    if (homeApiData.isSuccess && homeApiData.data) {
      // Use spread operator to avoid mutating original data
      const utilityInstance = new HomeTableUtility<IHomeActivityTable>([...homeApiData.data]);
      const sortedData = utilityInstance.sortData();
      setHomeData(sortedData);
      setOriginalData(sortedData);
      return utilityInstance;
    }
    return new HomeTableUtility<IHomeActivityTable>([]);
  }, [homeApiData.data, homeApiData.isSuccess]);

  useEffect(() => {
    if (homeApiData.isSuccess && homeApiData.data) {
      // Sort the data and update the state
      const sortedData = utility.sortData();
      setHomeData(sortedData);
      setOriginalData(sortedData);
    }

    if (homeApiData.isError) {
      setHomeData([]);
      setOriginalData([]);
    }
  }, []);

  return (
    <div className="pb-[3%]">
      <ErrorMessage isVisible={homeApiData.isError} />
      <Heading1 text="Home" />

      <PaymentBalanceCard />

      <div className="border-b-2 border-solid border-cw-green w-[100%] relative home-activity-bar mb-2 mt-6">
        <p className="text-xs text-cw-green mb-2 w-[15%] text-center">Activity</p>
      </div>

      {homeApiData.isLoading ? (
        <div>Loading...</div>
      ) : (
        <React.Fragment>
          <TableUtilities
            data={homeData}
            originalData={originalData}
            setData={setHomeData}
            utilityInstance={utility}
            sortOptions={[
              {
                name: 'Date',
                sortType: {
                  asc: 'ascending',
                  desc: 'descending',
                },
              },
            ]}
            filterOptions={[
              {
                name: 'Charge',
                filterType: "All",
              },
              {
                name: 'Payments',
                filterType: "All",
              },
            ]}
            filterCb={filterCb}
          />
          <CWCard>
            <DataTable pageSize={5} data={homeData} columns={HOME_ACTIVITY_TABLE_COLUMNS} cwStyle={true} />
          </CWCard>
        </React.Fragment>
      )}
    </div>
  );
}

export default Home;
