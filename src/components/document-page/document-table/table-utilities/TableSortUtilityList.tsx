import React, { useState } from 'react';

import { ISortOption } from '@/types/tableOptions';
import { ICheckboxProps, ISortProps } from '@/types/tableProps';

import TableSortUtilityCardV2 from './TableSortUtilityCardV2';

interface ITableSortUtilityListProps {
  sort: ISortProps;
  options: ISortOption[];
  setCheckBox: React.Dispatch<React.SetStateAction<ICheckboxProps>>;
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
