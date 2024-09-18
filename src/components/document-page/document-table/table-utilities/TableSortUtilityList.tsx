import React from 'react'
import { ICheckbox } from '@/lib/documentDataSorterAndFilter';
import TableSortUtilityCard from './TableSortUtilityCard';
import { ISortOption } from '@/constants/documentsUtilityOptions';

interface ITableSortUtilityListProps {
  index: number;
  option: ISortOption;
  sort: {
    parent: string;
    sortType: string;
  };
  setCheckBox: React.Dispatch<React.SetStateAction<ICheckbox>>;
}

function TableSortUtilityList({ option, index, sort, setCheckBox }: ITableSortUtilityListProps) {
  const optionKeys = Object.keys(option.sortType);
  return (
    <div className="flex flex-row space-x-2">
      {optionKeys.map((sortType, keyIndex) => (
        <TableSortUtilityCard
          keyIndex={keyIndex}
          option={option}
          index={index}
          sort={sort}
          setCheckBox={setCheckBox}
          sortType={sortType}
        />
      ))}
    </div>
  );
}

export default TableSortUtilityList
