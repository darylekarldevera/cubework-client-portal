import React from 'react';
import { flexRender, Table } from '@tanstack/react-table';
import { TableHead, TableRow } from '../ui/table';

interface IDataTableHeaderListProps<TData> {
  table: Table<TData>;
}

function DataTableHeaderList<TData>({ table }: IDataTableHeaderListProps<TData>) {
  return (
    <React.Fragment>
      {table.getHeaderGroups().map((headerGroup) => (
        <TableRow key={headerGroup.id}>
          {headerGroup.headers.map((header) => (
            <TableHead
              key={header.id}
              style={{
                minWidth: header.column.columnDef?.size,
                maxWidth: header.column.columnDef?.size,
              }}
              className="text-[#717171] text-[11px] leading-relaxed"
            >
              {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
            </TableHead>
          ))}
        </TableRow>
      ))}
    </React.Fragment>
  );
}

export default DataTableHeaderList;
