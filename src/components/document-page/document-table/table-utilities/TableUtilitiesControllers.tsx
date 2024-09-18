import React from 'react'
import { ArrowUpDown, ListFilter } from 'lucide-react';

import TableSearchBar from './TableSearchBar';
import useTableSearchUtility from '@/customHook/useTableSearchUtility';

interface TableUtilitiesControllersProps<T> {
  originalData: T[];
  openUtility: string;
  setOpenUtility: React.Dispatch<React.SetStateAction<string>>
  setData: React.Dispatch<React.SetStateAction<T[]>>;
  filterCb: (items: T[], searchData: string) => T[];
};

function TableUtilitiesControllers<T>({
  originalData,
  openUtility,
  setOpenUtility, 
  setData,
  filterCb,
}: TableUtilitiesControllersProps<T>) {
  const { searchData, setSearchData } = useTableSearchUtility({
    originalData,
    setData: setData,
    filterCb,
  });

  const handleUtility = (utility: string) => {
    if (openUtility === utility) {
      setOpenUtility(() => '');
      return;
    }

    setOpenUtility(() => utility);
  };

  return (
    <div className="flex items-end">
      <TableSearchBar search={searchData} setSearch={setSearchData} />
      <ArrowUpDown className="w-4 cursor-pointer" onClick={() => handleUtility('sort')} />
      <ListFilter className="w-4 cursor-pointer" onClick={() => handleUtility('filter')} />
    </div>
  );
}

export default TableUtilitiesControllers
