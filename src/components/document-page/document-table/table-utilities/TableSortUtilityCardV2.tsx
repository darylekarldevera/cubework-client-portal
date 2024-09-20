import React from 'react';
import { CheckIcon } from 'lucide-react';
import { CaretSortIcon } from '@radix-ui/react-icons';

import { cn } from '@/lib/utils';
import { ICheckbox } from '@/lib/documentDataSorterAndFilter';

import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';

interface ITableSortUtilityCardPropsV2 {
  option: {
    name: string;
    sortType: {
      [key: string]: string;
    };
  };
  sortTypeKeys: string[];
  select: {
    [key: string]: string;
    name: string;
    sortType: string;
  };
  openSort: string;
  setSelect: React.Dispatch<React.SetStateAction<any>>;
  setCheckBox: React.Dispatch<React.SetStateAction<ICheckbox>>;
  setOpenSort: React.Dispatch<React.SetStateAction<string>>;
}

function TableSortUtilityCardV2({
  openSort,
  option,
  sortTypeKeys,
  select,
  setSelect,
  setCheckBox,
  setOpenSort,
}: ITableSortUtilityCardPropsV2) {
  const capitalizeFirstLetter = (text: string) => {
    const lowerCaseText = text.toLowerCase();
    return lowerCaseText.charAt(0).toUpperCase() + lowerCaseText.slice(1);
  };

  return (
    <Popover open={openSort === option.name}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={select ? true : undefined}
          className="h-[21px] justify-between bg-white z-10 text-center border mr-4 text-[10px]"
          onClick={() => {
            if (openSort === option.name) {
              setOpenSort('');
            } else {
              setOpenSort(option.name);
            }
          }}
        >
          {`Sort by ${capitalizeFirstLetter(option.name)}`}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0 bg-white">
        <Command>
          <CommandInput placeholder="Search..." className="h-9 bg-white z-1" />
          <CommandList>
            <CommandEmpty>Not found.</CommandEmpty>
            <CommandGroup>
              {sortTypeKeys?.map((type: any) => (
                <CommandItem
                  key={type}
                  value={type}
                  className="cursor-pointer"
                  onSelect={(currentValue) => {
                    setOpenSort('');
                    setSelect(() => ({
                      name: option.name,
                      sortType: currentValue,
                    }));

                    setCheckBox((prev) => ({
                      ...prev,
                      sort: {
                        parent: option.name,
                        sortType: currentValue,
                      },
                    }));
                  }}
                >
                  {capitalizeFirstLetter(option.sortType[type])}
                  {type === select.sortType && select.name === option.name ? (
                    <CheckIcon className={cn('ml-auto h-4 w-4')} />
                  ) : null}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

export default TableSortUtilityCardV2;
