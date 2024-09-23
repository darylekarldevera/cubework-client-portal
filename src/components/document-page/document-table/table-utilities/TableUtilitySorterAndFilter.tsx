import React, { useEffect, useMemo, useState } from 'react';

import HomeTableUtility from '@/lib/homeDataSorterAndFilter';
import DocumentTableUtility from '@/lib/documentDataSorterAndFilter';
import { IFilterOption, ISortOption } from '@/constants/documentsUtilityOptions';

import TableSortUtility from './TableSortUtility';
import TableFilterUtility from './TableFilterUtility';

interface TableUtilitySorterAndFilterProps<T> {
  data: T[];
  options: ISortOption[] | IFilterOption[];
  openUtility: string;
  utilityInstance: DocumentTableUtility<T> | HomeTableUtility<T>;
  setData: React.Dispatch<React.SetStateAction<T[]>>;
}

function TableUtilitySorterAndFilter<T>({
  openUtility,
  setData,
  utilityInstance,
  options,
}: TableUtilitySorterAndFilterProps<T>) {
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
  useMemo(() => {
    if (!utilityInstance || !checkbox) return;
    utilityInstance.setCheckbox(checkbox);
  }, [checkbox, utilityInstance]);

  useEffect(() => {
    const updatedData = utilityInstance.sortAndFilter();
    setData(() => updatedData);
  }, [checkbox]);

  useMemo(() => {
    if (!options.length || openUtility !== 'sort') return;
    const lastIndexSortOption = options.slice(-1)[0] as ISortOption
    setCheckbox((prev: ISortOption) => ({
      ...prev,
      sort: {
        name: lastIndexSortOption?.name,
        sortType: lastIndexSortOption?.sortType?.desc,
      },
    }));
  }, [options]);

  if (openUtility === '') return null;

  return (
    <div className="flex px-2 items-center mt-2">
      {openUtility === 'sort' ? (
        <TableSortUtility sort={checkbox.sort} setCheckBox={setCheckbox} options={options} />
      ) : (
        <TableFilterUtility filter={checkbox.filter} setCheckBox={setCheckbox} options={options} />
      )}
    </div>
  );
}

export default TableUtilitySorterAndFilter;
