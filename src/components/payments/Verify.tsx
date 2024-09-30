import {
  Dialog,
  DialogClose,
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

interface VerifyProps {
  handleClick: () => void;
}

const Verify = ({ handleClick }: VerifyProps) => {
  return (
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
  );
};

export default Verify;
