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
  variant?: 'single' | 'double';
  text2?: string;
  title2?: string;
  checkboxText: string;
}

const TermsConditions = ({ text, title, variant = 'single', title2, text2, checkboxText }: ITermsConditionsProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="w-full text-xs leading-relaxed flex items-center gap-2">
          <Checkbox className="rounded-[4px]" value={0} />
          {checkboxText}
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[525px] bg-white overflow-auto max-h-[500px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>Last updated 9/17/2024</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4 text-sm">{text}</div>
        {variant === 'double' ? (
          <>
            <DialogHeader>
              <DialogTitle>{title2}</DialogTitle>
              <DialogDescription>Last updated 9/17/2024</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4 text-sm">{text2}</div>
          </>
        ) : (
          <></>
        )}
        <DialogFooter>
          <DialogTrigger className=" flex items-center gap-2">
            <Button variant="outlined-black">Decline</Button>
            <Button>Accept</Button>
          </DialogTrigger>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default TermsConditions;
