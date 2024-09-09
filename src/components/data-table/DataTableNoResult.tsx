import { TableCell, TableRow } from '../ui/table';

interface IDataTableNoResultProps {
  columnsLength: number;
}

function DataTableNoResult({ columnsLength }: IDataTableNoResultProps) {
  return (
    <TableRow>
      <TableCell colSpan={columnsLength} className="h-24 text-center">
        No results.
      </TableCell>
    </TableRow>
  );
}

export default DataTableNoResult;
