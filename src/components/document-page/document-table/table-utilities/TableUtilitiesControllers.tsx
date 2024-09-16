import React from 'react'
import { ArrowUpDown, ListFilter } from 'lucide-react';

import TableSearchBar from './TableSearchBar';
import useTableSearchUtility from '@/customHook/useTableSearchUtility';

interface TableUtilitiesControllersProps {
  originalData: any[];
  openUtility: string;
  setOpenUtility: React.Dispatch<React.SetStateAction<string>>
  setData: React.Dispatch<React.SetStateAction<any[]>>;
  filterCb: (items: any[], searchData: string) => any[];
};

function TableUtilitiesControllers({ 
  originalData, 
  openUtility, 
  setOpenUtility, 
  setData, 
  filterCb 
}: TableUtilitiesControllersProps) {
  const { searchData, setSearchData } = useTableSearchUtility({ 
    originalData, 
    setData: setData, 
    filterCb 
  });

  const handleUtility = (utility: string) => {
    if (openUtility === utility) {
      setOpenUtility('');
      return;
    }

    setOpenUtility(utility);
  };

  return (
    <div className="flex items-end">
      <TableSearchBar search={searchData} setSearch={setSearchData} />
      <ArrowUpDown onClick={() => handleUtility('sort')} />
      <ListFilter onClick={() => handleUtility('filter')} />
    </div>
  );
}

export default TableUtilitiesControllers
