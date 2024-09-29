import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog.tsx';
import { Checkbox } from '@/components/ui/checkbox.tsx';
import Button from '@/components/shared/Button.tsx';

interface ITermsConditionsProps {
  setCheck?: (b: boolean) => void;
  value?: boolean;
  text: string;
  title: string;
}

const TermsConditions = ({ text, title }: ITermsConditionsProps) => {
  // const handleClick = () => setCheck(!value);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="w-full text-xs leading-relaxed flex items-center gap-2">
          <Checkbox className="rounded-[4px]" value={0} />I agree to the terms and conditions
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[925px] bg-white overflow-auto max-h-[500px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>Last updated 9/17/2024</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">{text}</div>
        <DialogFooter>
          <Button variant="outlined-black">Decline</Button>
          <DialogTrigger asChild>
            <Button>Accept</Button>
          </DialogTrigger>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default TermsConditions;
