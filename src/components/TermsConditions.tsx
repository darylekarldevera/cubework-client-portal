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
import { ChangeEvent, useState } from 'react';

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
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckChange = (event: ChangeEvent<HTMLInputElement>) => setIsChecked(event.target.checked);
  const handleClick = () => setIsChecked(!isChecked);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="w-full text-xs leading-relaxed flex items-center gap-2">
          <input type="checkbox" className="rounded-[4px]" onChange={handleCheckChange} checked={isChecked} />
          {checkboxText}
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[525px] bg-white overflow-auto max-h-[500px]">
        <DialogHeader>
          <DialogTitle className="text-sm">{title}</DialogTitle>
          <DialogDescription className="text-xs">Last updated 9/17/2024</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4 text-xs">{text}</div>
        {variant === 'double' ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-sm">{title2}</DialogTitle>
              <DialogDescription className="text-xs">Last updated 9/17/2024</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4 text-xs">{text2}</div>
          </>
        ) : (
          <></>
        )}
        <DialogFooter>
          <DialogTrigger className=" flex items-center gap-2">
            <Button variant="outlined-black">Decline</Button>
            <Button onClick={handleClick}>Accept</Button>
          </DialogTrigger>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default TermsConditions;
