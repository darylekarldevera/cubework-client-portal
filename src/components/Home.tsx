import { useCallback } from 'react';

import { HomeQuery } from '@/queries/HomeQuery';
import HomeTableUtility from '@/lib/homeDataSorterAndFilter';
import IHomeActivityTable from '@/types/homeActivityTable';
import useUtilityInstanceAndData from '@/customHook/useUtilityInstanceAndData';
import { HOME_ACTIVITY_TABLE_COLUMNS } from '@/constants/homeActivityTableColumns';

import CWCard from './CWCard';
import DataTable from './data-table/DataTable';
import { Heading1 } from './ui/headings';
import PaymentBalanceCard from './PaymentBalanceCard';
import TableUtilities from './document-page/document-table/table-utilities/TableUtilities';
import { HOME_FILTER_OPTIONS, HOME_SORT_OPTIONS } from '@/constants/homeUtilityOptions';

function Home() {
  const homeApiData = HomeQuery('invoice_documents');

  const { data, setData, originalData, utility, isLoading } = useUtilityInstanceAndData<IHomeActivityTable>({
    dataApi: homeApiData,
    utilityClass: HomeTableUtility,
  });

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

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="pb-[3%]">
      <Heading1 text="Home" />
      <PaymentBalanceCard />

      <div className="border-b-2 border-solid border-cw-green w-[100%] relative home-activity-bar mb-2 mt-6">
        <p className="text-xs text-cw-green mb-2 w-[15%] text-center">Activity</p>
      </div>

      <TableUtilities
        data={data}
        originalData={originalData}
        setData={setData}
        utilityInstance={utility}
        sortOptions={HOME_SORT_OPTIONS}
        filterOptions={HOME_FILTER_OPTIONS}
        filterCb={filterCb}
      />
      <CWCard>
        <DataTable 
          pageSize={5} 
          data={data} 
          columns={HOME_ACTIVITY_TABLE_COLUMNS} 
          cwStyle={true} 
        />
      </CWCard>
    </div>
  );
}

export default Home;
