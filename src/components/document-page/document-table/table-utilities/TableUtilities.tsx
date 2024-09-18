import React, { useEffect, useState } from 'react'

import TableUtilitiesControllers from './TableUtilitiesControllers'
import TableUtilitySorterAndFilter from './TableUtilitySorterAndFilter'
import { IFilterOption, ISortOption } from '@/constants/documentsUtilityOptions';
import DocumentTableUtility from '@/lib/documentDataSorterAndFilter';
import HomeTableUtility from '@/lib/homeDataSorterAndFilter';

interface TableUtilitiesProps<T> {
  data: T[];
  originalData: T[];
  setData: React.Dispatch<React.SetStateAction<T[]>>;
  filterCb: (item: T[], searchData: string) => T[];
  utilityInstance: DocumentTableUtility<T> | HomeTableUtility<T>;
  sortOptions: ISortOption[];
  filterOptions: IFilterOption[];
}

function TableUtilities<T>({
  data,
  originalData,
  utilityInstance,
  setData,
  filterCb,
  sortOptions,
  filterOptions
}: TableUtilitiesProps<T>) {
  const [openUtility, setOpenUtility] = useState<string>('');
  const [options, setOptions] = useState<ISortOption[] | IFilterOption[]>([]);

  useEffect(() => {
    if (openUtility === 'sort') {
      setOptions(sortOptions);
    } 

    if (openUtility === 'filter') {
      setOptions(filterOptions);
    }
  }, [openUtility]);

  return (
    <div className="pb-3">
      <TableUtilitiesControllers
        openUtility={openUtility}
        originalData={originalData}
        setData={setData}
        filterCb={filterCb}
        setOpenUtility={setOpenUtility}
      />
      <TableUtilitySorterAndFilter
        data={data}
        openUtility={openUtility}
        setData={setData}
        utilityInstance={utilityInstance}
        options={options}
      />
    </div>
  );
}

export default TableUtilities
