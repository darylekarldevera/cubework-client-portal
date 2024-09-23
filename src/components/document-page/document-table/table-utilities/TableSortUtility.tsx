import React from 'react';
import { ISortOption } from '@/types/tableOptions';
import { ICheckboxProps, ISortProps } from '@/types/tableProps';

import TableSortUtilityList from './TableSortUtilityList';

interface ITableSortUtilityProps {
  sort: ISortProps;
  options: ISortOption[];
  setCheckBox: React.Dispatch<React.SetStateAction<ICheckboxProps>>;
}

function TableSortUtility({ sort, setCheckBox, options }: ITableSortUtilityProps) {
  return (
    <div className="flex flex-row space-x-2 mr-5 border-r pr-4">
      <TableSortUtilityList 
        sort={sort} 
        options={options} 
        setCheckBox={setCheckBox} 
      />
    </div>
  );
}

export default TableSortUtility;
