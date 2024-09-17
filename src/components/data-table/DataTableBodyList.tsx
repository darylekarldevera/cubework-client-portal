import React from 'react';
import { flexRender, Table } from '@tanstack/react-table';
import { TableCell, TableRow } from '../ui/table';

interface IDataTableBodyListProps<TData> {
  table: Table<TData>;
}

function DataTableBodyList<TData>({ table }: IDataTableBodyListProps<TData>) {
  return (
    <React.Fragment>
      {table.getRowModel().rows.map((row) => (
        <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
          {row.getVisibleCells().map((cell) => (
            <TableCell
              style={{
                minWidth: cell.column.columnDef?.size,
                maxWidth: cell.column.columnDef?.size,
              }}
              className="text-black font-regular text-[10px] leading-5"
              key={cell.id}
            >
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </TableCell>
          ))}
        </TableRow>
      ))}
    </React.Fragment>
  );
}

export default DataTableBodyList;
