import { useCallback, useContext, useEffect, useRef, useState } from 'react';

import  { IHomeRequestPayload, InvoiceDetails } from '@/types/homeActivityTable';
import { HOME_ACTIVITY_TABLE_COLUMNS } from '@/constants/homeActivityTableColumns';

import { HomeQuery } from '@/queries/HomeQuery';
import homeQueryRequestBody from '@/lib/homeRequestBody';
import { ErrorModalContext } from '@/contexts/ErrorModalContext';

import CWCard from './CWCard';
import { Heading1 } from './ui/headings';
import DataTableV2 from './data-table/DataTableV2';
import PaymentBalanceCard from './PaymentBalanceCard';
import useUtilityInstanceAndData from '@/customHook/useUtilityInstanceAndData';
import { UseQueryResult } from '@tanstack/react-query';
import HomeTableUtility from '@/lib/homeDataSorterAndFilter';
import TableUtilities from './document-page/document-table/table-utilities/TableUtilities';

function Home(): JSX.Element {
  const { showError, setShowError } = useContext(ErrorModalContext);

  const isBulkRef = useRef(false);
  const [pageSize, setPageSize] = useState<number>(5);
  const [requestPageSize, setRequestPageSize] = useState<string>('minimum');
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [requestBody, setRequestBody] = useState<IHomeRequestPayload>(
    homeQueryRequestBody({ PageSize: pageSize.toString() })
  );

  const homeApiData = HomeQuery('PayAndBillAPI/api/invoice/GetALLInvoiceByParameters', requestBody);
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

  // const filterCb = useCallback(
  //   (items: InvoiceDetails[], searchData: string): InvoiceDetails[] => {
  //     return items.filter((item) => {
  //       return Object.values(item).some((value) => value?.toString().toLowerCase().includes(searchData.toLowerCase()));
  //     });
  //   },
  //   [data]
  // );

  // Set request payload's page size to current page and page index
  useEffect(() => {
    const pageNum = (currentPage + 1).toString();
    setRequestBody((prev) => ({
      ...prev,
      Data: {
        ...prev.Data,
        PageSize: pageSize.toString(),
        PageIndx: pageNum,
      },
    }));
  }, [pageSize, currentPage]);

  // Set request payload's page size to minimum (5) or bulk (total items)
  useEffect(() => {
    // Set page size to 5 if minimum is selected
    if (requestPageSize === 'minimum') {
      setPageSize(5);
      return;
    }

    // Set page size to total items if bulk is selected
    if (requestPageSize === 'bulk' && homeApiData.data?.Result.ds1[0].Total) {
      setPageSize(homeApiData.data?.Result.ds1[0].Total);
    }
  }, [homeApiData.data?.Result?.ds1?.[0]?.Total, requestPageSize]);

  // Fetch data with a payload of page size option either bulk (total items) or minimum (5)
  useEffect(() => {
    // Fetch data with a payload of page size option bulk (total items)
    if (!isBulkRef.current && requestPageSize === 'bulk' && pageSize !== 5) {
      homeApiData.mutate();
      isBulkRef.current = true;
      return;
    }

    // Fetch data with a payload of page size option minimum (5)
    if (requestPageSize === 'minimum' && pageSize === 5) {
      homeApiData.mutate();
      isBulkRef.current = false;
    }
  }, [requestPageSize, pageSize, requestBody]);

  // Reset current page when page size changes
  useEffect(() => {
    setCurrentPage(0);
  }, [requestPageSize]);

  // Show error modal if there is an error
  useEffect(() => {
    if (homeApiData.error) {
      setShowError(!showError);
    }
  }, [homeApiData.error]);

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

        <DataTableV2
          cwStyle={true}
          pageSize={5}
          columns={HOME_ACTIVITY_TABLE_COLUMNS}
          numberOfItems={homeApiData.data?.Result.ds1[0].Total ?? 0}
          currentPage={currentPage}
          isLoading={homeApiData.isPending}
          // uncomment this line if TableUtilities is enabled
          // data={data ?? []}
          data={homeApiData.data?.Result.ds ?? []}
          setCurrentPage={setCurrentPage}
          setRequestPageSize={setRequestPageSize}
          requestPageSize={requestPageSize}
        />
      </CWCard>
    </div>
  );
}

export default Home;
