import { useEffect, useState } from 'react';
import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';

import { ICheckbox } from '@/lib/documentDataSorterAndFilter';
import { FILTER_OPTIONS, SORT_OPTIONS } from '@/constants/documentsUtilityOptions';

import DocumentTableUtility from '@/lib/documentDataSorterAndFilter';

interface TableUtilitySorterAndFilterProps<T> {
  data: T[];
  openUtility: string;
  setData: React.Dispatch<React.SetStateAction<T[]>>;
  utilityInstance: DocumentTableUtility<T>;
}

function TableUtilitySorterAndFilter<T>({
  openUtility,
  setData,
  utilityInstance,
}: TableUtilitySorterAndFilterProps<T>) {
  const [options, setOptions] = useState<string[]>([]);
  const [checkBox, setCheckBox] = useState<ICheckbox>({
    sort: 'date',
    filter: 'all',
  });

  useEffect(() => {
    if (openUtility === 'sort') {
      setOptions(SORT_OPTIONS);
    } else {
      setOptions(FILTER_OPTIONS);
    }
  }, [openUtility]);

  useEffect(() => {
    utilityInstance.setCheckbox(checkBox);
  }, [checkBox]);

  useEffect(() => {
    setData(() => utilityInstance.sortAndFilter());
  }, [openUtility, checkBox, utilityInstance]);

  if (openUtility === '') return null;

  return (
    <div className="flex py-3 px-2 items-center">
      {options.map((option, index) => {
        const lowerCaseOption = option.toLowerCase();
        const sort = checkBox.sort === lowerCaseOption;
        const filter = checkBox.filter === lowerCaseOption;

        return (
          <div className="flex items-center mr-1 cursor-pointer">
            <Checkbox.Root
              id={`c${index + 1}`}
              className="flex items-center justify-center w-3 h-3 border border-black"
              onCheckedChange={() => {
                if (openUtility === 'sort') {
                  setCheckBox((prev) => ({ ...prev, sort: lowerCaseOption }));
                } else {
                  setCheckBox((prev) => ({ ...prev, filter: lowerCaseOption }));
                }
              }}
              checked={sort || filter}
            >
              <Checkbox.Indicator className="text-black">
                <CheckIcon />
              </Checkbox.Indicator>
            </Checkbox.Root>
            <label className="mx-1 text-xs" htmlFor={`c${index + 1}`}>
              {option}
            </label>
          </div>
        );
      })}
    </div>
  );
}

export default TableUtilitySorterAndFilter;
