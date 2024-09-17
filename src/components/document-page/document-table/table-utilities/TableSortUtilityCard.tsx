import React from 'react'
import { Label } from '@radix-ui/react-label';
import { ICheckbox } from '@/lib/documentDataSorterAndFilter';
import { ISortOption } from '@/constants/documentsUtilityOptions';
import { RadioGroup, RadioGroupItem } from '@radix-ui/react-radio-group';

interface ITableSortUtilityCardProps {
  option: ISortOption;
  index: number;
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
    <div className="flex items-center mr-1 cursor-pointer" key={keyIndex}>
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
            value={`c${index}-${keyIndex}`}
            id={`c${index}-${keyIndex}`}
            checked={sort.parent === option.name && sort.sortType === sortType}
          />
          <Label className="text-xs" htmlFor={`c${index}-${keyIndex}`}>
            {sortType.toUpperCase()}
          </Label>
        </div>
      </RadioGroup>
    </div>
  );
}

export default TableSortUtilityCard
