import React from 'react';
import { SORT_OPTIONS } from '@/constants/documentsUtilityOptions';
import { ICheckbox } from '@/lib/documentDataSorterAndFilter';

import TableSortUtilityList from './TableSortUtilityList';

interface ITableSortUtilityProps {
  sort: {
    parent: string;
    sortType: string;
  };
  setCheckBox: React.Dispatch<React.SetStateAction<ICheckbox>>;
}

function TableSortUtility({ sort, setCheckBox }: ITableSortUtilityProps) {
  return (
    <React.Fragment>
      {SORT_OPTIONS.map((option, index) => (
        <div key={index} className="flex flex-row space-x-2 mr-5 border-r pr-4">
          <p className="text-center font-bold text-xs">{option.name}</p>
          <TableSortUtilityList
            option={option}
            index={index}
            sort={sort}
            setCheckBox={setCheckBox}
            />
        </div>
      ))}
    </React.Fragment>
  );
}

export default TableSortUtility;
