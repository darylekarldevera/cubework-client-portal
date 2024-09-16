import React, { useState } from 'react'
import { IDocument } from '@/types/invoiceDocuments';

import TableUtilitiesControllers from './TableUtilitiesControllers'
import TableUtilitySorterAndFilter from './TableUtilitySorterAndFilter'

interface TableUtilitiesProps<T> {
  data: IDocument[];
  originalData: IDocument[];
  setData: React.Dispatch<React.SetStateAction<IDocument[]>>;
  filterCb: (item: T[], searchData: string) => T[];
}

function TableUtilities<T>({ data, originalData, setData, filterCb }: TableUtilitiesProps<T>) {
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
        originalData={originalData}
        openUtility={openUtility} 
        setDocumentsData={setData} 
      />
    </div>
  )
}

export default TableUtilities
