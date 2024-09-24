import React from 'react';
import { CalendarIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import formatDate from '@/lib/formatDate';
import { ICheckboxProps, IFilterPickDateProps } from '@/types/tableProps';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

interface ITablePickDateProps {
  pickDate: IFilterPickDateProps;
  setPickDate: React.Dispatch<React.SetStateAction<ICheckboxProps>>;
}

function TablePickDate({ pickDate, setPickDate }: ITablePickDateProps) {
  return (
    <div className="flex w-64 justify-around">
      {Object.keys(pickDate).map((key, index) => (
        <Popover key={`c${key}${index}`}>
          <PopoverTrigger asChild>
            <Button
              variant={'outline'}
              className={cn('w-[120px] text-cb-table h-full', !pickDate[key] && 'text-muted-foreground')}
            >
              <span>{key && pickDate[key] && pickDate[key] instanceof Date ? formatDate(pickDate[key]) : null}</span>
              <CalendarIcon className="w-4 h-4 ml-auto" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0 bg-white flex flex-row" align="start" key={`d${key}${index}`}>
            <Calendar
              mode="single"
              captionLayout="dropdown-buttons"
              selected={undefined}
              onSelect={(date) => {
                if (!date) return;
                setPickDate((prev) => ({
                  ...prev,
                  filter: {
                    ...prev.filter,
                    pickDate: {
                      ...prev.filter.pickDate,
                      [key]: date,
                    },
                  },
                }));
              }}
              fromYear={1960}
              toYear={2030}
            />
          </PopoverContent>
        </Popover>
      ))}
    </div>
  );
}

export default TablePickDate;
