import { Label as ShadCNLabel } from '@/components/ui/label.tsx';
import { Card, CardContent, CardHeader } from '@/components/ui/card.tsx';
import TableHeader from '@/components/shared/TableHeader';
import Button from '@/components/shared/Button.tsx';
import TableItem from '@/components/shared/TableItem.tsx';

const AutoPaySetup = () => {
  return (
    <>
      <div className="flex gap-[28px]">
        <div className="w-2/3">
          <div className="py-[14px] pr-[20px] pl-[10px] flex justify-between">
            <ShadCNLabel className="text-xs font-bold text-black">Bank Account(s)</ShadCNLabel>
            <Button variant="outlined">+ Bank Account</Button>
          </div>
          <div className="pl-[10px]">
            <ShadCNLabel className="text-xs text-[#797979]">
              Use the bank accounts listed below to make payments or schedule monthly automatic payments.
            </ShadCNLabel>
          </div>
          <Card className="mt-[15px]  w-full rounded-[16px] flex flex-col">
            <div className="py-4 h-[10px] px-[10px] flex flex-row items-center justify-between border-b ">
              <div className="w-full  ">
                <TableHeader>Account Name</TableHeader>
              </div>
              <div className="w-full  ">
                <TableHeader>Account</TableHeader>
              </div>
              <div className="w-full  ">
                <TableHeader>Status</TableHeader>
              </div>
            </div>
            <CardContent className="h-full flex flex-row px-[10px] py-[15px] w-full">
              <div className="w-full flex items-center">
                <div className="w-full  ">
                  <TableItem>Test</TableItem>
                </div>
                <div className="w-full  ">
                  <TableItem>Checking-****1234</TableItem>
                </div>
                <div className="w-full  ">
                  <Button variant="destructive">Verify Now</Button>
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="mt-[33px] pr-[20px] pl-[10px] flex justify-between">
            <ShadCNLabel className="text-xs font-bold text-black">Credit Cards</ShadCNLabel>
            <Button variant="outlined">+ Credit Cards</Button>
          </div>
          <div className="pl-[10px]">
            <ShadCNLabel className="text-xs text-[#797979]">
              Use the credit cards below to make one-time payments.
            </ShadCNLabel>
          </div>
          <Card className="mt-[15px]  w-full rounded-[16px] flex flex-col">
            <div className="py-4 h-[10px] px-[10px] flex flex-row items-center justify-between border-b ">
              <div className="w-full  ">
                <TableHeader>Card Type</TableHeader>
              </div>
              <div className="w-full  ">
                <TableHeader>Card Number</TableHeader>
              </div>
            </div>
            <CardContent className="h-full flex flex-row px-[10px] py-[15px] w-full">
              <div className="w-full ">
                <TableItem>There are no accounts on file. Select ‘+ Add Credit Card’ to get started. </TableItem>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="mt-[15px] w-1/3">
          <Card className="w-full rounded-[16px]">
            <CardHeader className="h-[15px] border-b border-[#ECECEC] flex justify-center pl-[10px] items-start">
              <TableHeader>How to verify a new bank account</TableHeader>
            </CardHeader>
            <CardContent className="pt-[10px]">
              <TableItem>
                <p>1. Add new Bank Account </p>
                <p>2. Look for a small deposit (less than $1) in your bank account.** </p>
                <p>3. Click ‘Verify Now’ and enter the amount.</p>
                <p>4. Once confirmed, payments can be processed by selecting the verified bank.</p>
                <br />
                **Allow 1-2 business days for deposit to appear. Deposit name will be, ‘Cubework Penny “Company Name”
                Account Verify”.
              </TableItem>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};
export default AutoPaySetup;
