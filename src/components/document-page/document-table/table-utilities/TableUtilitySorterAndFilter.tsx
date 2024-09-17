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
  const [checkBox, setCheckBox] = useState<ICheckbox>({
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

  useEffect(() => {
    utilityInstance.setCheckbox(checkBox);
  }, [checkBox]);

  useEffect(() => {
    setData(() => utilityInstance.sortAndFilter());
  }, [openUtility, checkBox, utilityInstance]);

  if (openUtility === '') return null;

  return (
    <div className="flex py-3 px-2 items-center">
      {openUtility === 'sort' ? (
        <TableSortUtility sort={checkBox.sort} setCheckBox={setCheckBox} />
      ) : (
        <TableFilterUtility
          filter={checkBox.filter}
          setCheckBox={setCheckBox}
        />
      )}
    </div>
  );
}

export default TableUtilitySorterAndFilter;
