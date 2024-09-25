import { Label as ShadCNLabel } from '@/components/ui/label.tsx';
import { Button as ShadCNButton } from '@/components/ui/button.tsx';
import Select from '@/components/shared/Select.tsx';
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
import { Card } from '@/components/ui/card.tsx';
import CheckoutText from '@/components/shared/CheckoutText.tsx';
import Input from '@/components/shared/Input.tsx';
import Button from '@/components/shared/Button.tsx';
import { Link } from 'react-router-dom';

const MakePaymentTable = () => {
  return (
    <>
      <div className="py-[14px] pl-[10px] w-full">
        <ShadCNLabel className="text-xs font-regular text-cw-charcoal">Payment Method</ShadCNLabel>
        <div className="mt-[12px] flex gap-[37px]">
          <div className="w-[170px]">
            <Select items={['Bankxx-1009', 'Bankxx-1010', 'Bankxx-1011']} />
          </div>
          <ShadCNButton className="border border-cw-green rounded-[6px] text-cw-green text-[11px] leading-relaxed h-[30px]">
            <Link to={'../..' + '/bank-accounts/dashboard'} relative="path">
              + Payment Method
            </Link>
          </ShadCNButton>
        </div>
        <Card className="rounded-[6px] mt-[10px] shadow-lg">
          <Table className="w-full">
            <ShadCNTableHeader>
              <TableRow>
                <TableHead>
                  <TableHeader>Change Description</TableHeader>
                </TableHead>
                <TableHead>
                  <TableHeader>Date</TableHeader>
                </TableHead>
                <TableHead>
                  <TableHeader>Charge Balance ($)</TableHeader>
                </TableHead>
                <TableHead>
                  <TableHeader>Balance ($)</TableHeader>
                </TableHead>
              </TableRow>
            </ShadCNTableHeader>
            <TableBody>
              <TableRow>
                <TableCell>
                  <TableItem>Rent-warehouse</TableItem>
                </TableCell>
                <TableCell>
                  <TableItem>8/20/2024</TableItem>
                </TableCell>
                <TableCell>
                  <TableItem>$88.00</TableItem>
                </TableCell>
                <TableCell>
                  <TableItem>$88.00</TableItem>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>
        <div className=" mt-[31px] flex flex-col">
          <div className="w-2/5   self-end ">
            <div className="flex">
              <CheckoutText>Total Amount: </CheckoutText>
              <CheckoutText>$88.00</CheckoutText>
            </div>
            <div className="flex">
              <CheckoutText>Extra Payment Amount:</CheckoutText>
              <div className="w-1/2">
                <Input />
              </div>
            </div>
            <div className="flex">
              <CheckoutText>Extra Payment:</CheckoutText>
              <div className="w-1/2">
                <Input />
              </div>
            </div>
            <div className="flex">
              <CheckoutText>Total Payment:</CheckoutText>
              <CheckoutText>$88.00</CheckoutText>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[51px] flex justify-end pr-[35px] gap-[40px]">
        <Button variant="secondary">
          <Link to={'..' + '/dashboard'} relative="path">
            Cancel
          </Link>
        </Button>
        <Button>Pay Now</Button>
      </div>
    </>
  );
};

export default MakePaymentTable;
