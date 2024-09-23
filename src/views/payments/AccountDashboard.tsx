import { Label as ShadCNLabel } from '@/components/ui/label.tsx';
import { Card, CardContent, CardHeader } from '@/components/ui/card.tsx';
import TableHeader from '@/components/shared/TableHeader';
import Button from '@/components/shared/Button.tsx';
import TableItem from '@/components/shared/TableItem.tsx';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog.tsx';
import Select from '@/components/shared/Select.tsx';
import Input from '@/components/shared/Input.tsx';
import { Checkbox } from '@/components/ui/checkbox.tsx';
import TermsConditions from '@/__mocks__/termsConditions.ts';

const AutoPaySetup = () => {
  return (
    <>
      <div className="flex gap-[28px]">
        <div className="w-2/3">
          <div className="py-[14px] pr-[20px] pl-[10px] flex justify-between">
            <ShadCNLabel className="text-xs font-bold text-black">Bank Account(s)</ShadCNLabel>
            <Dialog>
              <DialogTrigger>
                {' '}
                <Button variant="outlined">+ Bank Account</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] bg-white">
                <DialogHeader>
                  <DialogTitle className="border-b border-black">Add Bank Account</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-2 items-center gap-4">
                    <ShadCNLabel className="text-xs text-cw-gray">Account Name</ShadCNLabel>
                    <Input />
                  </div>
                  <div className="grid grid-cols-2 items-center gap-4">
                    <ShadCNLabel className="text-xs text-cw-gray">Account</ShadCNLabel>
                    <Input />
                  </div>
                  <div className="grid grid-cols-2 items-center gap-4">
                    <ShadCNLabel className="text-xs text-cw-gray">Routing Number</ShadCNLabel>
                    <Input />
                  </div>
                  <div className="grid grid-cols-2 items-center gap-4">
                    <ShadCNLabel className="text-xs text-cw-gray">Account Type</ShadCNLabel>
                    <Select items={['Checking Account']} />
                  </div>
                </div>
                <DialogFooter className="border-t border-black w-full flex gap-[63px]">
                  <div className=" text-xs leading-relaxed flex items-center gap-2">
                    <Checkbox />
                    Set as default
                  </div>
                  <div className=" flex">
                    <Button>Cancel</Button>
                    <Button>Save</Button>
                  </div>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
          <div className="pl-[10px]">
            <ShadCNLabel className="text-xs text-cw-gray">
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
            <Dialog>
              <DialogTrigger>
                {' '}
                <Button variant="outlined">+ Credit Cards</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[825px] bg-white">
                <DialogHeader>
                  <DialogTitle className="border-b border-black">Add Credit Card</DialogTitle>
                </DialogHeader>
                <div className="grid grid-cols-2 gap-[34px]  ">
                  <div className="grid grid-rows-2 gap-4 py-4  ">
                    <div className="grid grid-cols-2 items-center gap-4  ">
                      <ShadCNLabel className="text-xs text-cw-gray  ">Card Details</ShadCNLabel>
                      <Input />
                    </div>
                    <div className="grid grid-cols-2 items-center gap-4  ">
                      <ShadCNLabel className="text-xs text-cw-gray">Card Number</ShadCNLabel>
                      <Input />
                    </div>
                    <div className="grid grid-cols-2 items-center gap-4  ">
                      <ShadCNLabel className="text-xs text-cw-gray">CVC</ShadCNLabel>
                      <Input />
                    </div>
                    <div className="grid grid-cols-2 gap-[23px]">
                      <div className="grid grid-rows-2 items-center gap-4  ">
                        <ShadCNLabel className="text-xs text-cw-gray">Expiry Date</ShadCNLabel>
                        <Input />
                      </div>
                      <div className="grid grid-rows-2 items-center gap-4  ">
                        <ShadCNLabel className="text-xs text-cw-gray">Expiry Month</ShadCNLabel>
                        <Input />
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-rows-2 gap-4 py-4  ">
                    <div className="grid grid-cols-2 items-center gap-4  ">
                      <ShadCNLabel className="text-xs text-cw-gray  ">Account Name</ShadCNLabel>
                      <Input />
                    </div>
                    <div className="grid grid-cols-2 items-center gap-4  ">
                      <ShadCNLabel className="text-xs text-cw-gray">Card Number</ShadCNLabel>
                      <Input />
                    </div>
                    <div className="grid grid-cols-2 items-center gap-4  ">
                      <ShadCNLabel className="text-xs text-cw-gray">Routing Number</ShadCNLabel>
                      <Input />
                    </div>
                    <div className="grid grid-cols-2 gap-[23px]">
                      <div className="grid grid-rows-2 items-center gap-4  ">
                        <ShadCNLabel className="text-xs text-cw-gray">State</ShadCNLabel>
                        <Input />
                      </div>
                      <div className="grid grid-rows-2 items-center gap-4  ">
                        <ShadCNLabel className="text-xs text-cw-gray">Zip Code</ShadCNLabel>
                        <Input />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-black w-full flex justify-between pt-3">
                  <Dialog>
                    <DialogTrigger asChild>
                      <div className="w-full text-xs leading-relaxed flex items-center gap-2">
                        <Checkbox />I agree to the terms and conditions
                      </div>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[925px] bg-white overflow-auto max-h-[500px]">
                      <DialogHeader>
                        <DialogTitle>CUBEWORK TERMS AND CONDITIONS</DialogTitle>
                        <DialogDescription>Last updated 9/17/2024</DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">{TermsConditions}</div>
                      <DialogFooter></DialogFooter>
                    </DialogContent>
                  </Dialog>
                  <div className="flex w-full justify-around">
                    <Button variant="outlined-black">Cancel</Button>
                    <Button>Save</Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
          <div className="pl-[10px]">
            <ShadCNLabel className="text-xs text-cw-gray">
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
