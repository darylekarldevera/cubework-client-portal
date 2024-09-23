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
import { formatCurrency } from '@/lib/utils';
import { IMakePaymentTableProps } from '@/types/payments';

const MakePaymentTable = ({ items, totalAmount, totalPayment }: IMakePaymentTableProps) => {
  return (
    <>
      <div className="py-[14px] pl-[10px] w-full">
        <ShadCNLabel className="text-xs font-regular text-[#797979]">Payment Method</ShadCNLabel>
        <div className="mt-[12px] flex gap-[37px]">
          <Select items={['Bankxx-1009', 'Bankxx-1010', 'Bankxx-1011']} />
          <ShadCNButton className="border border-[#59BA56] rounded-[6px] text-[#59BA56] text-[11px] leading-relaxed h-[30px]">
            + Payment Method
          </ShadCNButton>
        </div>
        <Card className="rounded-[6px] mt-[10px]">
          <Table className="w-full">
            <ShadCNTableHeader>
              <TableRow>
                {/*<TableHead className="w-[100px]">Invoice</TableHead>*/}
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
              {items?.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>
                      <TableItem>{item.description}</TableItem>
                  </TableCell>
                  <TableCell>
                    <TableItem>{item.date}</TableItem>
                  </TableCell>
                  <TableCell>
                    <TableItem>${formatCurrency(item.chargeBalance)}</TableItem>
                  </TableCell>
                  <TableCell>
                    <TableItem>${formatCurrency(item.balance)}</TableItem>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
        <div className=" mt-[31px] flex flex-col">
          <div className="w-2/5 self-end">
            <div className="flex">
              <CheckoutText>Total Amount: </CheckoutText>
              <CheckoutText>${formatCurrency(totalAmount)}</CheckoutText>
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
              <CheckoutText>${formatCurrency(totalPayment)}</CheckoutText>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[51px] flex justify-end pr-[35px] gap-[40px]">
        <Button variant="secondary">Cancel</Button>
        <Button>Next</Button>
      </div>
    </>
  );
};

export { MakePaymentTable };

