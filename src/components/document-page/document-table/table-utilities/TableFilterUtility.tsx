import React from 'react';
import { IFilterOption } from '@/types/tableOptions';
import { ICheckboxProps, IFilterProps } from '@/types/tableProps';

import { Label } from '@/components/ui/label';
import TablePickDate from './TablePickDate';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

interface ITableFilterUtilityProps {
  filter: IFilterProps;
  options: IFilterOption[];
  setCheckBox: React.Dispatch<React.SetStateAction<ICheckboxProps>>;
}

function TableFilterUtility({ filter, setCheckBox, options }: ITableFilterUtilityProps) {
  return (
    <div className="flex h-5">
      {options.length ? (
        <RadioGroup
          className="flex flex-row items-center justify-center space-x-2 mr-5 border-r pr-4"
          value={`${filter.name}_${filter.filterType}`}
          onValueChange={(newValue) => {
            const [parent, filterType] = newValue.split('_');
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
          {(options as any)?.map((option: any, index: number) => (
            <div className="flex items-center space-x-2" key={index}>
              <RadioGroupItem
                className="w-[14px] h-[h-14px]"
                value={`${option.name}_${option.filterType}`}
                id={`c${index}`}
              />
              <Label className="text-[0.70rem]" htmlFor={`c${index}`}>
                {option.name}
              </Label>
            </div>
          ))}
        </RadioGroup>
      ) : null}
      <TablePickDate pickDate={filter.pickDate} setPickDate={setCheckBox} />
    </div>
  );
}

export default TableFilterUtility;
