import { Label as ShadCNLabel } from '@/components/ui/label.tsx';
import { Card, CardContent, CardHeader } from '@/components/ui/card.tsx';
import TableHeader from '@/components/shared/TableHeader';
import Button from '@/components/shared/Button.tsx';
import TableItem from '@/components/shared/TableItem.tsx';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog.tsx';
import Select from '@/components/shared/Select.tsx';
import Input from '@/components/shared/Input.tsx';
import { useState } from 'react';
import AddBankAccountModal from '@/components/payments/AddBankAccountModal.tsx';
import AddCreditCardModal from '@/components/payments/AddCreditCardModal.tsx';

// type CreditCardProps = {
//   TermsConditions: boolean;
// };

// type BankAccountProps = {
//   TermsConditions: boolean;
// };

const AccountDashboard = () => {
  const [isVerifyShow, setIsVerifyShow] = useState(true);
  // const [isCreditCardTC, setIsCreditCardTC] = useState(false);
  // const [formCreditCard, setFormCreditCard] = useState({} as CreditCardProps);
  // const [formBankAccount, setFormBankAccount] = useState({} as BankAccountProps);

  const handleClick = () => {
    setIsVerifyShow(false);
  };

  return (
    <>
      <div className="flex gap-[28px] text-[#212529]">
        <div className="w-2/3">
          <div className="py-[14px] pr-[20px] pl-[10px] flex justify-between">
            <ShadCNLabel className="text-xs font-bold text-black">Bank Account(s)</ShadCNLabel>
            <AddBankAccountModal />
          </div>
          <div className="pl-[10px]">
            <ShadCNLabel className="text-xs text-[#212529]">
              Use the bank accounts listed below to make payments or schedule monthly automatic payments.
            </ShadCNLabel>
          </div>
          <Card className="mt-[15px]  w-full rounded-[16px] flex flex-col shadow-lg">
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
                  {isVerifyShow ? (
                    <Dialog>
                      <DialogTrigger>
                        {' '}
                        <Button variant="destructive">Verify Now</Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[525px] bg-white text-black">
                        <DialogHeader>
                          <DialogTitle className="border-b border-black">Verify Bank Account</DialogTitle>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <div className="grid grid-cols-2 items-center gap-4">
                            <ShadCNLabel className="text-xs text-[#212529]">Account Name</ShadCNLabel>
                            <Input value="Chan User" />
                          </div>
                          <div className="grid grid-cols-2 items-center gap-4">
                            <ShadCNLabel className="text-xs text-[#212529]">Account Number</ShadCNLabel>
                            <Input value="********1234" />
                          </div>
                          <div className="grid grid-cols-2 items-center gap-4">
                            <ShadCNLabel className="text-xs text-[#212529]">Routing Number</ShadCNLabel>
                            <Input value="12,500" />
                          </div>
                          <div className="grid grid-cols-2 items-center gap-4">
                            <ShadCNLabel className="text-xs ">Account Type</ShadCNLabel>
                            <Select items={['Checking Account', 'Savings Account']} />
                          </div>
                        </div>
                        <DialogFooter className="pt-3 border-t border-black w-full items-center flex gap-[63px]">
                          <DialogClose asChild>
                            <Button onClick={handleClick}>Verify</Button>
                          </DialogClose>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  ) : (
                    <TableItem>Verified</TableItem>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="mt-[55px] pr-[20px] pl-[10px] flex justify-between">
            <ShadCNLabel className="text-xs font-bold text-black">Credit Cards</ShadCNLabel>
            <AddCreditCardModal />
          </div>
          <div className="pl-[10px]">
            <ShadCNLabel className="text-xs text-[#212529]">
              Use the credit cards below to make one-time payments.
            </ShadCNLabel>
          </div>
          <Card className="mt-[15px]  w-full rounded-[16px] flex flex-col shadow-lg">
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
          <Card className="w-full rounded-[16px] shadow-lg">
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
                <span className="text-[9px] leading-relaxed">
                  **Allow 1-2 business days for deposit to appear. Deposit name will be, ‘Cubework Penny “Company Name”
                  Account Verify”.
                </span>
              </TableItem>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};
export default AccountDashboard;
