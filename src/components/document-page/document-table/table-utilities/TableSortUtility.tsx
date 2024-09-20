import React from 'react';
import { ICheckbox } from '@/lib/documentDataSorterAndFilter';

import TableSortUtilityList from './TableSortUtilityList';

interface ITableSortUtilityProps {
  sort: any
  setCheckBox: React.Dispatch<React.SetStateAction<any>>;
  options: any[];
}

function TableSortUtility({ sort, setCheckBox, options }: ITableSortUtilityProps) {
  return (
    <React.Fragment>
     <div className="flex flex-row space-x-2 mr-5 border-r pr-4">
        <TableSortUtilityList
          options={options}
          sort={sort}
          setCheckBox={setCheckBox}
          />
      </div>
    </React.Fragment>
  );
}

export default TableSortUtility;
