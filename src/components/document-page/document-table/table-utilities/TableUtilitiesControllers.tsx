import React from 'react'
import { ArrowUpDown, ListFilter } from 'lucide-react';

import useTableSearchUtility from '@/customHook/useTableSearchUtility';
import TableSearchBar from './TableSearchBar';

interface TableUtilitiesControllersProps<DataType> {
  openUtility: string;
  originalData: DataType[];
  setData: React.Dispatch<React.SetStateAction<DataType[]>>;
  filterCb: (items: DataType[], searchData: string) => DataType[];
  setOpenUtility: React.Dispatch<React.SetStateAction<string>>
};

function TableUtilitiesControllers<DataType>({
  originalData,
  openUtility,
  setOpenUtility, 
  setData,
  filterCb,
}: TableUtilitiesControllersProps<DataType>) {
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
