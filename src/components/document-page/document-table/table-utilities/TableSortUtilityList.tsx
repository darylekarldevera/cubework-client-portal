import React, { useState } from 'react';
import { ICheckbox } from '@/lib/documentDataSorterAndFilter';
import { ISortOption } from '@/constants/documentsUtilityOptions';
import TableSortUtilityCardV2 from './TableSortUtilityCardV2';

interface ITableSortUtilityListProps {
  options: ISortOption[];
  setCheckBox: React.Dispatch<React.SetStateAction<ICheckbox>>;
}

function TableSortUtilityList({ options, setCheckBox }: ITableSortUtilityListProps) {
  const [openSort, setOpenSort] = useState('');
  const [select, setSelect] = useState<any>({
    name: '',
    sortType: '',
  });

  return (
    <div className="flex flex-row space-x-2">
      {options?.length
        ? options?.map((option, index) => (
            <TableSortUtilityCardV2
              key={index}
              option={option}
              select={select}
              openSort={openSort}
              sortTypeKeys={Object.keys(option?.sortType ?? {}) ?? []}
              setSelect={setSelect}
              setCheckBox={setCheckBox}
              setOpenSort={setOpenSort}
            />
          ))
        : null}
    </div>
  );
}

export default TableSortUtilityList;
