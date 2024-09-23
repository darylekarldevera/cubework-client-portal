import React from 'react'

import { ICheckboxProps, ISortProps } from '@/types/tableProps';
import { ISortOption } from '@/types/tableOptions';

import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

interface ITableSortUtilityCardProps {
  sort: ISortProps;
  index: number;
  option: ISortOption;
  sortType: string;
  keyIndex: number;
  setCheckBox: React.Dispatch<React.SetStateAction<ICheckboxProps>>;
}

function TableSortUtilityCard({ option, index, sort, setCheckBox, sortType, keyIndex }: ITableSortUtilityCardProps) {
  return (
    <div className="flex items-center cursor-pointer" key={keyIndex}>
      <RadioGroup
        value={`c${option.name}-${option.sortType}`}
        onValueChange={() => {
          setCheckBox((prev) => {
            return {
              ...prev,
              sort: {
                name: option.name,
                sortType,
              },
            };
          });
        }}
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem
            className="w-[14px] h-[14px]"
            value={`c${index}-${keyIndex}`}
            id={`c${index}-${keyIndex}`}
            checked={sort.name === option.name && sort.sortType === sortType}
          />
          <Label className="text-[0.70rem]" htmlFor={`c${option.name}-${option.sortType}`}>
            {sortType.toUpperCase()}
          </Label>
        </div>
      </RadioGroup>
    </div>
  );
}

export default TableSortUtilityCard
