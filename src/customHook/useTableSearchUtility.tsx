import React, { useEffect, useState } from 'react'

interface IUseTableSearchUtility<T> {
  originalData: any[];
  setData: React.Dispatch<React.SetStateAction<T[]>>;
  filterCb: (items: T[], searchData: string) => T[];
}

/**
 * Custom hook for table search utility. It is being used together with the TableUtilitySorterAndFilter component.
 *
 * @template T - The type of data in the table.
 *
 * @param {object} options - The options for the hook.
 * @param {Array} options.originalData - The original data for the table.
 * @param {function} options.setData - The function to set the data for the table.
 * @param {function} options.filterCb - The callback function to filter the data.
 *
 * @returns {object} - An object containing the search data and the function to set the search data.
 * 
 * @example
 * const { searchData, setSearchData } = useTableSearchUtility({ originalData, setData, filterCb });
 * 
 * @example
 * const filterCb = (items: IDocument[]): IDocument[] => {
 *  return items.filter((item) => {
 *   return item.file.filename.toLowerCase().includes(searchData.toLowerCase());
 * });
 */

function useTableSearchUtility<T>({ originalData, setData, filterCb }: IUseTableSearchUtility<T>) {
  const [searchData, setSearchData] = useState<string>('');

  useEffect(() => {
    if (searchData === '') {
      setData(originalData);
    } else {
      setData(() => filterCb(originalData, searchData));
    }
  }, [originalData, searchData]);

  return {
    searchData,
    setSearchData,
  };
}

export default useTableSearchUtility
