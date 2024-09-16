import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';

type modalAccountProps = {
  DialogButtonTrigger: JSX.Element;
};

const ModalAddAccount = ({}: modalAccountProps) => {
  return (
    <DialogContent className="h-[261px] w-[468px] bg-white">
      <DialogHeader className="bg-white">
        <DialogTitle>Are you absolutely sure?</DialogTitle>
        <DialogDescription className="bg-white">
          This action cannot be undone. This will permanently delete your account and remove your data from our servers.
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  );
};

export default ModalAddAccount;
