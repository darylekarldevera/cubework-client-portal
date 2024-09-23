import React from 'react';
import { CheckIcon } from 'lucide-react';
import { CaretSortIcon } from '@radix-ui/react-icons';


import { cn } from '@/lib/utils';
import { ISortOption } from '@/types/tableOptions';
import { ICheckboxProps, ISortProps } from '@/types/tableProps';

import { 
  Popover, 
  PopoverContent, 
  PopoverTrigger 
} from '@/components/ui/popover';

import { 
  Command, 
  CommandEmpty, 
  CommandGroup, 
  CommandInput, 
  CommandItem, 
  CommandList 
} from '@/components/ui/command';
import { Button } from '@/components/ui/button';

interface ITableSortUtilityCardPropsV2 {
  sort: ISortProps;
  option: ISortOption;
  openSort: string;
  sortTypeKeys: string[];
  setOpenSort: React.Dispatch<React.SetStateAction<string>>;
  setCheckBox: React.Dispatch<React.SetStateAction<ICheckboxProps>>;
}

function TableSortUtilityCardV2({
  sort,
  option,
  openSort,
  sortTypeKeys,
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
      <PopoverContent className="w-min min-w-[120px] p-0 bg-white">
        <Command>
          <CommandInput placeholder="Search..." className="h-9 bg-white z-1 text-[10px]" />
          <CommandList>
            <CommandEmpty>Not found.</CommandEmpty>
            <CommandGroup>
              {sortTypeKeys?.map((type: any) => (
                <CommandItem
                  key={type}
                  value={type}
                  className="cursor-pointer text-[10px] h-9"
                  onSelect={(currentValue) => {
                    setOpenSort('');
                    setCheckBox((prev: any) => ({
                      ...prev,
                      sort: {
                        name: option.name,
                        sortType: option.sortType[currentValue],
                      },
                    }));
                  }}
                >
                  {capitalizeFirstLetter(option.sortType[type])}
                  {option.sortType[type] === sort.sortType && sort.name === option.name ? (
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
