import React, { useEffect, useState } from 'react';

import { ICheckbox } from '@/lib/documentDataSorterAndFilter';
import DocumentTableUtility from '@/lib/documentDataSorterAndFilter';

import TableSortUtility from './TableSortUtility';
import TableFilterUtility from './TableFilterUtility';

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
  const [checkbox, setCheckbox] = useState<ICheckbox>({
    sort: {
      parent: 'Date',
      sortType: 'desc',
    },
    filter: {
      parent: 'All',
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
    utilityInstance.setCheckbox(checkbox);
  }, [checkbox]);

  useEffect(() => {
    const updatedData = utilityInstance.sortAndFilter();
    setData(() => updatedData);
  }, [checkbox]);

  if (openUtility === '') return null;

  return (
    <div className="flex px-2 items-center mt-2">
      {openUtility === 'sort' ? (
        <TableSortUtility sort={checkbox.sort} setCheckBox={setCheckbox} />
      ) : (
        <TableFilterUtility filter={checkbox.filter} setCheckBox={setCheckbox} />
      )}
    </div>
  );
}

export default TableUtilitySorterAndFilter;
