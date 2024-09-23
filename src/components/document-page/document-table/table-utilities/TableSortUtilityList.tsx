import React, { useState } from 'react';
import { ICheckboxProps, ISortProps } from '@/types/tableProps';
import { IFilterOption, ISortOption } from '@/types/tableOptions';

import TableSortUtilityCardV2 from './TableSortUtilityCardV2';

interface ITableSortUtilityListProps {
  sort: ISortProps;
  options: ISortOption[] | IFilterOption[];
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
              option={option as ISortOption}
              openSort={openSort}
              sortTypeKeys={Object.keys((option as ISortOption)?.sortType ?? {}) ?? []}
              setCheckBox={setCheckBox}
              setOpenSort={setOpenSort}
            />
          ))
        : null}
    </div>
  );
}

export default TableSortUtilityList;
