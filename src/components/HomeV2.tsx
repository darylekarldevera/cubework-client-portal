import { useCallback, useContext, useEffect, useState } from 'react';

import { HomeQuery } from '@/queries/HomeQuery';
import { ErrorModalContext } from '@/contexts/ErrorModalContext';
import homeQueryRequestBody from '@/lib/homeRequestBody';
import { HOME_ACTIVITY_TABLE_COLUMNS } from '@/constants/homeActivityTableColumns';

import CWCard from './CWCard';
import DataTable from './data-table/DataTable';
import { Heading1 } from './ui/headings';
import PaymentBalanceCard from './PaymentBalanceCard';
import TableUtilities from './document-page/document-table/table-utilities/TableUtilities';
import HomeTableUtility from '@/lib/homeDataSorterAndFilter';
import { InvoiceDetails } from '@/types/homeActivityTable';
import useUtilityInstanceAndData from '@/customHook/useUtilityInstanceAndData';
import { UseQueryResult } from '@tanstack/react-query';



function HomeV2(): JSX.Element {
  const { showError, setShowError } = useContext(ErrorModalContext);
  const INITIAL_PAGE_SIZE = 50;
  const [pageSize, setPageSize] = useState<number>(INITIAL_PAGE_SIZE);

  const homeApiData = HomeQuery(
    'PayAndBillAPI/api/invoice/GetALLInvoiceByParameters',
    homeQueryRequestBody({ PageSize: pageSize.toString() })
  );

  // uncomment to enable this feature if TableUtilities is needed, including filterCB
  // const { data, setData, originalData, utility } = useUtilityInstanceAndData<InvoiceDetails>({
  //   dataApi: {
  //     data: homeApiData.data?.Result?.ds,
  //     isFetching: homeApiData.isPending,
  //     error: homeApiData.error,
  //     isError: (homeApiData.error ? true : false) as unknown as boolean,
  //     isSuccess: !homeApiData.error && !homeApiData.isPending,
  //     isLoading: homeApiData.isPending,
  //   } as unknown as UseQueryResult<InvoiceDetails[], unknown>,
  //   utilityClass: HomeTableUtility,
  // });

  // const filterCb = useCallback((items: InvoiceDetails[], searchData: string): InvoiceDetails[] => {
  //   return items.filter((item) => {
  //     return Object.values(item).some(value =>
  //       value?.toString().toLowerCase().includes(searchData.toLowerCase())
  //     );
  //   });
  // }, [data]);

  // Fetch data on initial render
  useEffect(() => {
    homeApiData.mutate();
  }, []);

  // Fetch data with a payload of page size (total items)
  useEffect(() => {
    if (pageSize) {
      homeApiData.mutate();
    }
  }, [pageSize]);

  useEffect(() => {
    const totalItems = homeApiData.data?.Result?.ds1?.[0]?.Total;
    if (totalItems && totalItems > INITIAL_PAGE_SIZE) {
      setPageSize(totalItems);
    }
  }, [homeApiData.data?.Result?.ds1?.[0]?.Total]);

  // Show error modal if there is an error
  useEffect(() => {
    if (homeApiData.error) {
      setShowError(!showError);
    }
  }, [homeApiData.error])

  return (
    <div className="pb-[3%]">
      <Heading1 text="Home" />
      <PaymentBalanceCard />

      <div className="border-b-2 border-solid border-cw-green w-[100%] relative home-activity-bar mb-2 mt-6">
        <p className="text-xs text-cw-green mb-2 w-[15%] text-center">Activity</p>
      </div>

      <CWCard>
        {/* uncomment to enable this feature if only needed */}
        {/* <TableUtilities
          data={data}
          originalData={originalData}
          setData={setData}
          filterCb={filterCb}
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
          filterOptions={[]}
        /> */}

        <DataTable 
          cwStyle={true} 
          pageSize={5} 
          columns={HOME_ACTIVITY_TABLE_COLUMNS} 
          // enable this line if TableUtilities is enabled
          // data={data ?? []} 
          data={homeApiData.data?.Result?.ds ?? []}
        />
      </CWCard>
    </div>
  );
}

export default HomeV2;
