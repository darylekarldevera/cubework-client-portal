import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog.tsx';
import Button from '@/components/shared/Button.tsx';
import { Label as ShadCNLabel } from '@/components/ui/label.tsx';
import Input from '@/components/shared/Input.tsx';
import Select from '@/components/shared/Select.tsx';
import { TERMS_CONDITIONS, TITLE_TERMS_CONDITIONS } from '@/__mocks__/termsConditions.ts';
import TermsConditions from '@/components/TermsConditions.tsx';

const AddBankAccountModal = () => {
  return (
    <Dialog>
      <DialogTrigger>
        {' '}
        <Button variant="outlined">+ Bank Account</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[525px] bg-white text-black">
        <DialogHeader>
          <DialogTitle className="border-b border-black text-sm">Add Bank Account</DialogTitle>
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
            <TermsConditions text={TERMS_CONDITIONS} title={TITLE_TERMS_CONDITIONS} checkboxText="Set as default" />
            <DialogTrigger className=" flex gap-2">
              <Button variant="outlined-black">Cancel</Button>
              <Button>Save</Button>
            </DialogTrigger>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddBankAccountModal;
