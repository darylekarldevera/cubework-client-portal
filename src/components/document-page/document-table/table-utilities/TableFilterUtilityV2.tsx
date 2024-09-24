import React from 'react';
import { IFilterOption } from '@/types/tableOptions';
import { ICheckboxProps, IFilterProps } from '@/types/tableProps';

import TablePickDate from './TablePickDate';
import TableFilterUtilityList from './TableFilterUtilityList';

interface ITableFilterUtilityV2Props {
  filter: IFilterProps;
  options: IFilterOption[];
  setCheckBox: React.Dispatch<React.SetStateAction<ICheckboxProps>>;
}

function TableFilterUtilityV2({ filter, setCheckBox, options }: ITableFilterUtilityV2Props) {
  return (
    <div className="flex h-5">
      <TableFilterUtilityList
        filter={filter}
        options={options}
        setCheckBox={setCheckBox}
      />
      <TablePickDate pickDate={filter.pickDate} setPickDate={setCheckBox} />
    </div>
  );
}

export default TableFilterUtilityV2;
