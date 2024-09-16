import React, { useState } from 'react'

import TableUtilitiesControllers from './TableUtilitiesControllers'
import TableUtilitySorterAndFilter from './TableUtilitySorterAndFilter'
import DocumentTableUtility from '@/lib/documentDataSorterAndFilter';

interface TableUtilitiesProps<T> {
  data: T[];
  originalData: T[];
  setData: React.Dispatch<React.SetStateAction<T[]>>;
  filterCb: (item: T[], searchData: string) => T[];
  utilityInstance: DocumentTableUtility<T>;
}

function TableUtilities<T>({ data, originalData, utilityInstance, setData, filterCb }: TableUtilitiesProps<T>) {
  const [openUtility, setOpenUtility] = useState<string>('');
  
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
      />
    </div>
  );
}

export default TableUtilities
