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
import Button from '@/components/shared/Button.tsx';
import { Link } from 'react-router-dom';
import InputAmount from '@/components/shared/InputAmount.tsx';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog.tsx';
import DialogButton from '@/components/shared/DialogButton.tsx';
import { useLayoutEffect, useState } from 'react';

const dump = [
  {
    change_description: 'Rent-warehouse',
    date: '8/20/2024',
    charge_balance: '45.00',
    balance: '99.00',
  },
  {
    change_description: 'Forklift',
    date: '8/21/2024',
    charge_balance: '50.00',
    balance: '199.00',
  },
];

interface IDataProps {
  change_description: string;
  date: string;
  charge_balance: string;
  balance: string;
}

const overallBalance = (data: IDataProps[]) =>
  data.reduce((sum, item) => sum + parseFloat(item.balance) + parseFloat(item.charge_balance), 0);

const MakePaymentTable = () => {
  const [data, setData] = useState<IDataProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [balance, setBalance] = useState(0);
  const [paid, setPaid] = useState(false);
  const [extraPaymentAmount, setExtraPaymentAmount] = useState('');
  const [paymentAmount, setPaymentAmount] = useState('');

  const handleGetPayments = async () => {
    try {
      setData(dump);
      setBalance(overallBalance(data));
    } catch (e) {
      console.log(e);
    }
  };

  useLayoutEffect(() => {
    handleGetPayments();
  }, [data, balance]);

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setPaid(true);
    }, 3000);
  };

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
              {data.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <TableItem>{item.change_description}</TableItem>
                  </TableCell>
                  <TableCell>
                    <TableItem>{item.date}</TableItem>
                  </TableCell>
                  <TableCell>
                    <TableItem>{item.charge_balance}</TableItem>
                  </TableCell>
                  <TableCell>
                    <TableItem>{item.balance}</TableItem>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
        {!paid && (
          <form className=" mt-[31px] flex flex-col">
            <div className="w-2/5   self-end ">
              <div className="flex">
                <CheckoutText>Total Amount: </CheckoutText>
                <CheckoutText>${balance}.00</CheckoutText>
              </div>
              <div className="flex">
                <CheckoutText>Extra Payment Amount:</CheckoutText>
                <div className="w-1/3">
                  <InputAmount value={extraPaymentAmount} setValue={setExtraPaymentAmount} />
                </div>
              </div>
              <div className="flex">
                <CheckoutText>Extra Payment:</CheckoutText>
                <div className="w-1/3">
                  <InputAmount value={paymentAmount} setValue={setPaymentAmount} />
                </div>
              </div>
              <div className="flex">
                <CheckoutText>Total Payment:</CheckoutText>
                <CheckoutText>
                  $
                  {(
                    parseFloat(balance.toString()) +
                    parseFloat(extraPaymentAmount) +
                    parseFloat(paymentAmount)
                  ).toLocaleString()}
                </CheckoutText>
              </div>
            </div>
          </form>
        )}
      </div>
      {!paid && (
        <div className="mt-[51px] flex justify-end pr-[35px] gap-[40px]">
          <Button variant="secondary">
            <Link to={'..' + '/dashboard'} relative="path">
              Cancel
            </Link>
          </Button>
          <Dialog>
            <DialogButton isDisabled={isLoading}>{isLoading ? 'Loading...' : 'Pay Now'}</DialogButton>
            <DialogContent className="sm:max-w-[525px] bg-white text-black flex flex-col">
              <DialogHeader>
                <DialogTitle className="border-b border-black text-md">Payment Confirmation</DialogTitle>
              </DialogHeader>
              <div className="text-sm">Are you sure you want to pay a total of ${balance}.00?</div>
              <div className="flex justify-center gap-2">
                <DialogButton variant="outlined-black">Cancel</DialogButton>
                <DialogButton onClick={handleClick}>Confirm</DialogButton>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      )}
    </>
  );
};

export default MakePaymentTable;
