import React from 'react';
import { FILTER_OPTIONS } from '@/constants/documentsUtilityOptions';
import { ICheckbox } from '@/lib/documentDataSorterAndFilter';

import { Label } from '@/components/ui/label';
import TablePickDate from './TablePickDate';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

interface ITableFilterUtilityProps {
  filter: {
    parent: string;
    filterType: string;
    pickDate: {
      startDate: Date;
      endDate: Date | undefined;
    };
  };
  setCheckBox: React.Dispatch<React.SetStateAction<ICheckbox>>;
}

function TableFilterUtility({ filter, setCheckBox }: ITableFilterUtilityProps) {
  return (
    <div className="flex h-5">
      <RadioGroup
        className="flex flex-row items-center justify-center space-x-2 mr-5 border-r pr-4"
        value={`${filter.parent}-${filter.filterType}`}
        onValueChange={(newValue) => {
          const [parent, filterType] = newValue.split('-');
          setCheckBox((prev) => ({
            ...prev,
            filter: {
              ...prev.filter,
              parent,
              filterType,
            },
          }));
        }}
      >
        {FILTER_OPTIONS.map((option, index) => (
          <div className="flex items-center space-x-2" key={index}>
            <RadioGroupItem
              className="w-[14px] h-[h-14px]"
              value={`${option.name}-${option.filterType}`}
              id={`c${index}`}
            />
            <Label className="text-[0.70rem]" htmlFor={`c${index}`}>
              {option.name}
            </Label>
          </div>
        ))}
      </RadioGroup>
      <TablePickDate pickDate={filter.pickDate} setPickDate={setCheckBox} />
    </div>
  );
}

export default TableFilterUtility;
