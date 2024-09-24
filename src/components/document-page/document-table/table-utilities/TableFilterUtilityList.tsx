import React, { useState } from 'react';

import { ICheckboxProps, IFilterProps } from '@/types/tableProps';
import { IFilterOption } from '@/types/tableOptions';

import TableFilterUtilityCardV2 from './TableFilterUtilityCardV2';


interface ITableFilterUtilityListProps {
  filter: IFilterProps;
  options: IFilterOption[];
  setCheckBox: React.Dispatch<React.SetStateAction<ICheckboxProps>>;
}

function TableFilterUtilityList({ filter, options, setCheckBox }: ITableFilterUtilityListProps) {
  const [openSort, setOpenSort] = useState('');

  return (
    <div className="flex flex-row space-x-2">
      {options?.length
        ? options?.map((option, index) => (
            <TableFilterUtilityCardV2
              key={index}
              filter={filter}
              option={option}
              openSort={openSort}
              sortTypeKeys={Object.keys(option.filterType ?? {}) ?? []}
              setCheckBox={setCheckBox}
              setOpenSort={setOpenSort}
            />
          ))
        : null}
    </div>
  );
}

export default TableFilterUtilityList;
