import React, { useState } from 'react';
import { ICheckbox } from '@/lib/documentDataSorterAndFilter';
import { ISortOption } from '@/constants/documentsUtilityOptions';
import TableSortUtilityCardV2 from './TableSortUtilityCardV2';

interface ITableSortUtilityListProps {
  sort: any;
  options: ISortOption[];
  setCheckBox: React.Dispatch<React.SetStateAction<ICheckbox>>;
}

function TableSortUtilityList({ sort, options, setCheckBox }: ITableSortUtilityListProps) {
  const [openSort, setOpenSort] = useState('');

  return (
    <div className="flex flex-row space-x-2">
      {options?.length
        ? options?.map((option, index) => (
            <TableSortUtilityCardV2
              key={index}
              sort={sort}
              option={option}
              openSort={openSort}
              sortTypeKeys={Object.keys(option?.sortType ?? {}) ?? []}
              setCheckBox={setCheckBox}
              setOpenSort={setOpenSort}
            />
          ))
        : null}
    </div>
  );
}

export default TableSortUtilityList;
