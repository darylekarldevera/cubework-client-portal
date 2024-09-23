import React from 'react';
import { Cell, flexRender, Table } from '@tanstack/react-table';
import { TableCell, TableRow } from '../ui/table';
import formatDate from '@/lib/formatDate';

interface IDataTableBodyListProps<TData> {
  table: Table<TData>;
}


function DataTableBodyList<TData>({ table }: IDataTableBodyListProps<TData>) {
  function renderCellContent(cell: Cell<TData, unknown>) {
    const isValidDate = new Date(cell.getValue() as string).toString() !== 'Invalid Date'
    if (isValidDate && cell.getValue() instanceof Date) {
      return <p>{formatDate(cell.getValue() as Date)}</p>;
    }

    return flexRender(cell.column.columnDef.cell, cell.getContext());
  };

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
              {renderCellContent(cell)}
            </TableCell>
          ))}
        </TableRow>
      ))}
    </React.Fragment>
  );
}

export default DataTableBodyList;
