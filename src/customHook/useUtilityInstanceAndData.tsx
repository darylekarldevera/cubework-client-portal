import { UseQueryResult } from '@tanstack/react-query';
import React, { useContext, useEffect, useMemo, useState } from 'react';

import { ITableUtility } from '@/types/tableUtility';
import { ErrorModalContext } from '@/contexts/ErrorModalContext';

/**
 * Properties for the useUtilityInstanceAndData hook.
 *
 * @template DataType - The type of data being handled by the utility.
 * @param {UseQueryResult<DataType[], unknown>} dataApi - The result of the API query.
 * @param {new (dataApi: DataType[]) => ITableUtility<DataType, unknown>} utilityClass - The class used to handle table utilities, such as sorting or filtering the data.
 */

interface IUseUtilityInstanceAndDataProps<DataType> {
  dataApi: UseQueryResult<DataType[], unknown>;
  utilityClass: new (dataApi: DataType[]) => ITableUtility<DataType, unknown>;
}

/**
 * Return type for the useUtilityInstanceAndData hook.
 *
 * @template DataType - The type of data being handled by the utility.
 * @param {DataType[]} data - The sorted or manipulated data from the utility.
 * @param {React.Dispatch<React.SetStateAction<DataType[]>>} setData - The function to update the data state.
 * @param {DataType[]} originalData - The original data before any manipulation.
 * @param {ITableUtility<DataType, unknown>} utility - The utility instance handling data operations.
 * @param {boolean} isLoading - Flag indicating whether the data is still loading.
 */

interface IUseUtilityInstanceAndDataReturn<DataType> {
  data: DataType[];
  setData: React.Dispatch<React.SetStateAction<DataType[]>>;
  originalData: DataType[];
  utility: ITableUtility<DataType, unknown>;
  isLoading: boolean;
}

/**
 * Custom hook that creates an instance of a utility class to manage table data.
 * It memoizes the utility instance and processes the API data based on the utility's methods.
 *
 * @template DataType - The type of data being handled by the utility.
 * @param {IUseUtilityInstanceAndDataProps<DataType>} props - The props for the hook.
 * @param {UseQueryResult<DataType[], unknown>} props.dataApi - The result of the API query.
 * @param {new (dataApi: DataType[]) => ITableUtility<DataType, unknown>} props.utilityClass - The class used to handle table utilities, such as sorting or filtering the data.
 * @returns {IUseUtilityInstanceAndDataReturn<DataType>} - The sorted data, original data, utility instance, and loading state.
 */

function useUtilityInstanceAndData<DataType>({
  dataApi,
  utilityClass,
}: IUseUtilityInstanceAndDataProps<DataType>): IUseUtilityInstanceAndDataReturn<DataType> {
  const { showError, setShowError } = useContext(ErrorModalContext);
  const [data, setData] = useState<DataType[]>([]);
  const [originalData, setOriginalData] = useState<DataType[]>([]);

  // Memoize the utility instance only when the dataApi.data changes
  // This prevents the utility instance from being recreated on every render
  const utility = useMemo(() => {
    if (dataApi.isSuccess && dataApi.data) {
      // Instantiate the utility class without the type argument
      const utilityInstance = new utilityClass([...dataApi.data]);
      const sortedData = utilityInstance.sortData();
      setData(sortedData);
      setOriginalData(sortedData);
      return utilityInstance;
    }
    return new utilityClass([]); // Fallback if no data
  }, [dataApi.data, dataApi.isSuccess]);

  // Update data on successful API call or reset on error
  useEffect(() => {
    if (dataApi.isSuccess && dataApi.data) {
      const sortedData = utility.sortData();
      setData(sortedData);
      setOriginalData(sortedData);
    }

    if (dataApi.isError) {
      setData([]);
      setOriginalData([]);
    }
  }, [dataApi.isSuccess, dataApi.isError, utility, dataApi.data]);

  // Show error modal on API error
  useEffect(() => {
    if (dataApi.isError) {
      setShowError(!showError);
    }
  }, [dataApi.isError]);

  return {
    data,
    setData,
    originalData,
    utility,
    isLoading: dataApi.isLoading,
  };
}

export default useUtilityInstanceAndData;
