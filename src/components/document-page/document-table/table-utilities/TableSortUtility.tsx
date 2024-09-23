import React from 'react';
import TableSortUtilityList from './TableSortUtilityList';

interface ITableSortUtilityProps {
  sort: any;
  options: any[];
  setCheckBox: React.Dispatch<React.SetStateAction<any>>;
}

function TableSortUtility({ sort, setCheckBox, options }: ITableSortUtilityProps) {
  return (
    <React.Fragment>
      <div className="flex flex-row space-x-2 mr-5 border-r pr-4">
        <TableSortUtilityList 
          sort={sort} 
          options={options} 
          setCheckBox={setCheckBox} 
        />
      </div>
    </React.Fragment>
  );
}

export default TableSortUtility;
