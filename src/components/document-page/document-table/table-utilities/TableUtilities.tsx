import React, { useEffect, useState } from 'react'

import TableUtilitiesControllers from './TableUtilitiesControllers'
import TableUtilitySorterAndFilter from './TableUtilitySorterAndFilter'
import { ITableUtility } from '@/types/tableUtility';
import { IFilterOption, ISortOption } from '@/types/tableOptions';

interface TableUtilitiesProps<DataType> {
  data: DataType[];
  sortOptions: ISortOption[];
  originalData: DataType[];
  filterOptions: IFilterOption[];
  utilityInstance: ITableUtility<DataType, any>;
  setData: React.Dispatch<React.SetStateAction<DataType[]>>;
  filterCb: (item: DataType[], searchData: string) => DataType[];
}

function TableUtilities<DataType>({
  data,
  sortOptions,
  originalData,
  filterOptions,
  utilityInstance,
  setData,
  filterCb,
}: TableUtilitiesProps<DataType>) {
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
        options={options}
        openUtility={openUtility}
        utilityInstance={utilityInstance}
        setData={setData}
      />
    </div>
  );
}

export default TableUtilities
