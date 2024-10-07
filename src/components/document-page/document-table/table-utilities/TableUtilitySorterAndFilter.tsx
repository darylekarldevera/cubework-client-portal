import React, { useEffect, useRef, useState } from 'react';

import { ITableUtility } from '@/types/tableUtility';
import { IFilterOption, ISortOption } from '@/types/tableOptions';

import TableSortUtility from './TableSortUtility';
import TableFilterUtilityV2 from './TableFilterUtilityV2';

interface TableUtilitySorterAndFilterProps<DataType> {
  data: DataType[];
  options: ISortOption[] | IFilterOption[];
  openUtility: string;
  utilityInstance: ITableUtility<DataType, any>;
  setData: React.Dispatch<React.SetStateAction<DataType[]>>;
}

function TableUtilitySorterAndFilter<DataType>({
  openUtility,
  setData,
  utilityInstance,
  options,
}: TableUtilitySorterAndFilterProps<DataType>) {
  const isCheckboxSet = useRef(false); 

  const [checkbox, setCheckbox] = useState<any>({
    sort: {
      name: 'Date',
      sortType: 'desc',
    },
    filter: {
      name: 'All',
      filterType: 'all',
      pickDate: {
        startDate: (() => {
          const date = new Date();
          date.setFullYear(date.getFullYear() - 3);
          return date;
        })(),
        endDate: undefined,
      },
    },
  });

  // Update utilityInstance with the latest checkbox state
  useEffect(() => {
    if (!utilityInstance || !checkbox) return;
    utilityInstance.setCheckbox(checkbox);
  }, [checkbox, utilityInstance]);

  useEffect(() => {
    const updatedData = utilityInstance.sortAndFilter();
    setData(() => updatedData);
  }, [checkbox]);

  useEffect(() => {
    if (isCheckboxSet.current && options.length && openUtility === 'sort') {
      const lastIndexSortOption = options.slice(-1)[0] as ISortOption;
      setCheckbox((prev: ISortOption) => ({
        ...prev,
        sort: {
          name: lastIndexSortOption?.name,
          sortType: lastIndexSortOption?.sortType?.desc,
        },
      }));
    }
    
    if (isCheckboxSet.current && options.length && openUtility === 'filter') {
      const lastIndexFilterOption = options.slice(-1)[0] as IFilterOption;
      setCheckbox((prev: IFilterOption) => ({
        ...prev,
        filter: {
          name: lastIndexFilterOption?.name,
          // @ts-ignore
          filterType: lastIndexFilterOption?.filterType?.all,
          pickDate: {
            startDate: (() => {
              const date = new Date();
              date.setFullYear(date.getFullYear() - 3);
              return date;
            })(),
            endDate: undefined,
          },
        },
      }))
    }
    // Set isCheckboxSet to true to prevent the useEffect from running again
    isCheckboxSet.current = true; 
  }, [openUtility, options]);

  if (openUtility === '') return null;

  return (
    <div className="flex px-2 items-center mt-2">
      {openUtility === 'sort' ? (
        <TableSortUtility 
          sort={checkbox.sort} 
          setCheckBox={setCheckbox} 
          options={options as ISortOption[]} 
        />
      ) : (
        <TableFilterUtilityV2
          filter={checkbox.filter} 
          setCheckBox={setCheckbox} 
          options={options as IFilterOption[]} 
        />
      )}
    </div>
  );
}

export default TableUtilitySorterAndFilter;
