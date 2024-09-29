import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog.tsx';
import Button from '@/components/shared/Button.tsx';
import { Label as ShadCNLabel } from '@/components/ui/label.tsx';
import Input from '@/components/shared/Input.tsx';
import Select from '@/components/shared/Select.tsx';
import { Checkbox } from '@/components/ui/checkbox.tsx';
import { TERMS_CONDITIONS, TITLE_TERMS_CONDITIONS } from '@/__mocks__/termsConditions.ts';

const AddBankAccountModal = () => {
  return (
    <Dialog>
      <DialogTrigger>
        {' '}
        <Button variant="outlined">+ Bank Account</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[525px] bg-white text-black">
        <DialogHeader>
          <DialogTitle className="border-b border-black">Add Bank Account</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-2 items-center gap-4">
            <ShadCNLabel className="text-xs text-[#212529]">Account Name</ShadCNLabel>
            <Input />
          </div>
          <div className="grid grid-cols-2 items-center gap-4">
            <ShadCNLabel className="text-xs text-[#212529]">Account Number</ShadCNLabel>
            <Input />
          </div>
          <div className="grid grid-cols-2 items-center gap-4">
            <ShadCNLabel className="text-xs text-[#212529]">Routing Number</ShadCNLabel>
            <Input />
          </div>
          <div className="grid grid-cols-2 items-center gap-4">
            <ShadCNLabel className="text-xs">Account Type</ShadCNLabel>
            <Select items={['Checking Account', 'Savings Account']} />
          </div>
        </div>
        <DialogFooter className="pt-3 border-t border-black w-full flex gap-[63px]">
          <div className="w-full text-xs leading-relaxed flex items-center gap-2">
            <Dialog>
              <DialogTrigger asChild>
                <div className=" w-full text-xs leading-relaxed flex items-center gap-2">
                  <Checkbox className="rounded-[4px]" />
                  <div className="w-[80px]"> Set as default</div>
                </div>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[925px] bg-white overflow-auto max-h-[500px]">
                <DialogHeader>
                  <DialogTitle>{TITLE_TERMS_CONDITIONS}</DialogTitle>
                  <DialogDescription>Last updated 9/17/2024</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">{TERMS_CONDITIONS}</div>
                <DialogFooter></DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
          <DialogTrigger asChild className=" flex gap-2">
            <Button variant="outlined-black">Cancel</Button>
            <Button>Save</Button>
          </DialogTrigger>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddBankAccountModal;
