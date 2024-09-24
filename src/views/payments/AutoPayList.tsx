import { Label as ShadCNLabel } from '@/components/ui/label.tsx';
import { Card } from '@/components/ui/card.tsx';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader as ShadCNTableHeader,
  TableRow,
} from '@/components/ui/table';
import TableHeader from '@/components/shared/TableHeader.tsx';
import TableItem from '@/components/shared/TableItem.tsx';
import CheckedImage from '@/assets/icons/check-icon.svg';
import { formatCurrency } from '@/lib/utils.ts';

const AutoPayList = () => {
  return (
    <>
      <div className="py-[14px] pl-[10px]">
        <ShadCNLabel className="text-xs font-bold text-black">Auto Pay Account</ShadCNLabel>
      </div>
      <div className="pl-[10px] ">
        <Card className="pl-5 py-3 flex gap-2 items-center bg-cw-green w-full">
          <img src={CheckedImage} alt="" className="text-white" />
          <ShadCNLabel className="text-xs font-medium text-white">
            <span className="font-bold">Important:</span>Your account is now setup for auto pay. To revert, please
            contact Cubework team.
          </ShadCNLabel>
        </Card>
      </div>
      <Card className="mt-[30px] w-full rounded-[16px] shadow-lg">
        <Table>
          <ShadCNTableHeader>
            <TableRow>
              <TableHead>
                <TableHeader>Payment</TableHeader>
              </TableHead>
              <TableHead>
                <TableHeader>Start Date</TableHeader>
              </TableHead>
              <TableHead>
                <TableHeader>End Date</TableHeader>
              </TableHead>
              <TableHead>
                <TableHeader>Pay on Day</TableHeader>
              </TableHead>
              <TableHead>
                <TableHeader>Max Pay Amount</TableHeader>
              </TableHead>
            </TableRow>
          </ShadCNTableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                {/*<Select items={['Bankxx-109', 'Bankxx-110']} />*/}
                <TableItem>Bankxx-109</TableItem>
              </TableCell>
              <TableCell>
                <TableItem>8/1/2024</TableItem>
              </TableCell>
              <TableCell>
                <TableItem>8/1/2025</TableItem>
              </TableCell>
              <TableCell>
                <TableItem>1</TableItem>
              </TableCell>
              <TableCell>
                <TableItem>${formatCurrency(2000.0)}</TableItem>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Card>
    </>
  );
};

export default AutoPayList;
