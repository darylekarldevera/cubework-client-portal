import { Label as ShadCNLabel } from '@/components/ui/label.tsx';
import { Card } from '@/components/ui/card.tsx';
import Button from '@/components/shared/Button.tsx';
import { Button as ShadCNButton } from '@/components/ui/button.tsx';
import ManageIcon from '@/assets/manage-icon.svg';

const Account = () => {
  return (
    <>
      <div className="py-[14px] pl-[10px]">
        <ShadCNLabel className="text-xs font-regular text-cw-gray">
          Make a secure, one-time payment through this page
        </ShadCNLabel>
      </div>
      <Card className="h-[153px] w-full rounded-[16px] overflow-auto">
        <div className="h-2/3 flex justify-between px-[36px] items-center bg-gradient-to-r from-[#4EB951] to-white">
          <div className="flex flex-col gap-1">
            <ShadCNLabel className="text-xs font-medium text-white ">Balance</ShadCNLabel>
            <ShadCNLabel className="text-2xl font-semibold text-white">$8000.88</ShadCNLabel>
          </div>
          <div>
            <Button>Pay Now</Button>
          </div>
        </div>
        <div className="h-1/3 flex items-center gap-1 pl-[16px]">
          <ShadCNButton className="flex items-center gap-1">
            <img src={ManageIcon} alt="" className="h-[20px]" />
            <ShadCNLabel className="text-xs text-cw-green border-b border-cw-gray">Manage Auto Pay</ShadCNLabel>
          </ShadCNButton>
        </div>
      </Card>
    </>
  );
};

export default Account;
