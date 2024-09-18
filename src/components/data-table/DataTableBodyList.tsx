import React from 'react';
import { Cell, flexRender, Table } from '@tanstack/react-table';
import { TableCell, TableRow } from '../ui/table';
import moment from 'moment';

interface IDataTableBodyListProps<TData> {
  table: Table<TData>;
}

function DataTableBodyList<TData>({ table }: IDataTableBodyListProps<TData>) {
  function renderCellContent(cell: Cell<TData, unknown>) {
    if (typeof cell.getValue() === 'string' && new Date(cell.getValue() as string).toString() !== 'Invalid Date') {
      return <p>{moment(cell.getValue() as any).format('MM/DD/YYYY')}</p>;
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
