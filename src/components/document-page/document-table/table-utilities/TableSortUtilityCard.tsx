import React from 'react'
import { ICheckbox } from '@/lib/documentDataSorterAndFilter';

import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { ISortOption } from '@/constants/documentsUtilityOptions';

interface ITableSortUtilityCardProps {
  index: number;
  option: ISortOption;
  sort: {
    parent: string;
    sortType: string;
  };
  setCheckBox: React.Dispatch<React.SetStateAction<ICheckbox>>;
  sortType: string;
  keyIndex: number;
}

function TableSortUtilityCard({ option, index, sort, setCheckBox, sortType, keyIndex }: ITableSortUtilityCardProps) {
  return (
    <div className="flex items-center cursor-pointer" key={keyIndex}>
      <RadioGroup
        onValueChange={() => {
          setCheckBox((prev) => {
            return {
              ...prev,
              sort: {
                parent: option.name,
                sortType,
              },
            };
          });
        }}
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem
            className='w-[14px] h-[14px]'
            value={`c${index}-${keyIndex}`}
            id={`c${index}-${keyIndex}`}
            checked={sort.parent === option.name && sort.sortType === sortType}
          />
          <Label className="text-[0.70rem]" htmlFor={`c${index}-${keyIndex}`}>
            {sortType.toUpperCase()}
          </Label>
        </div>
      </RadioGroup>
    </div>
  );
}

export default TableSortUtilityCard
