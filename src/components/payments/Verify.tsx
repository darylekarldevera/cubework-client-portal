import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog.tsx';
import Button from '@/components/shared/Button.tsx';
import { Label as ShadCNLabel } from '@/components/ui/label.tsx';
import Select from '@/components/shared/Select.tsx';
import DialogButton from '@/components/shared/DialogButton.tsx';

interface VerifyProps {
  handleClick: () => void;
}

const Verify = ({ handleClick }: VerifyProps) => {
  return (
    <Dialog>
      <DialogButton variant="destructive">
        <span className="w-full">Verify Now</span>
      </DialogButton>
      <DialogContent className="sm:max-w-[525px] bg-white text-black">
        <DialogHeader>
          <DialogTitle className="border-b border-black text-sm">Verify Bank Account</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-2 items-center gap-4">
            <ShadCNLabel className="text-xs text-[#212529]">
              Account Name<span className="text-red-500">*</span>
            </ShadCNLabel>
            <input
              value="Chan User"
              type="text"
              className="h-[30px] px-3 text-[11px] leading-relaxed w-full bg-white border border-cw-darkgray text-black rounded-[6px]"
            />
          </div>
          <div className="grid grid-cols-2 items-center gap-4">
            <ShadCNLabel className="text-xs text-[#212529]">
              Account Number<span className="text-red-500">*</span>
            </ShadCNLabel>
            <input
              value="********1234"
              type="text"
              className="h-[30px] px-3 text-[11px] leading-relaxed w-full bg-white border border-cw-darkgray text-black rounded-[6px]"
            />
          </div>
          <div className="grid grid-cols-2 items-center gap-4">
            <ShadCNLabel className="text-xs text-[#212529]">
              Routing Number<span className="text-red-500">*</span>
            </ShadCNLabel>
            <input
              value="12,500"
              type="text"
              className="h-[30px] px-3 text-[11px] leading-relaxed w-full bg-white border border-cw-darkgray text-black rounded-[6px]"
            />
          </div>
          <div className="grid grid-cols-2 items-center gap-4">
            <ShadCNLabel className="text-xs ">
              Account Type<span className="text-red-500">*</span>
            </ShadCNLabel>
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
  );
};

export default Verify;
