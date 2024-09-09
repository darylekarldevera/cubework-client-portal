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
            <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
          ))}
        </TableRow>
      ))}
    </React.Fragment>
  );
}

export default DataTableBodyList;
