import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card.tsx';
import { Label as ShadCNLabel } from '@/components/ui/label.tsx';
import { Button as ShadCNButton } from '@/components/ui/button.tsx';
import Button from '@/components/shared/Button.tsx';
import ManageIcon from '@/assets/manage-icon.svg';
import { formatCurrency } from '@/lib/utils.ts';

const MakePaymentDashboard = () => {
  return (
    <>
      <div className="py-[14px] pl-[10px]">
        <ShadCNLabel className="text-[11px] leading-relaxed  font-regular text-cw-charcoal">
          Make a secure, one-time payment through this page
        </ShadCNLabel>
      </div>
      <Card className="mt-[12px] h-[153px] w-full rounded-[16px] overflow-auto shadow-lg">
        <div className="h-2/3 flex justify-between px-[36px] items-center bg-gradient-to-r from-[#4EB951] to-white">
          <div className="flex flex-col gap-1">
            <ShadCNLabel className="text-[11px] leading-relaxed  font-medium text-white ">Balance</ShadCNLabel>
            <ShadCNLabel className="text-xl font-semibold text-white">${formatCurrency(8000.88)}</ShadCNLabel>
          </div>
          <div>
            <Button>
              <Link to={'..' + '/details'} relative="path">
                Pay Now
              </Link>
            </Button>
          </div>
        </div>
        <div className="h-1/3 flex items-center gap-1 pl-[16px]">
          <Link to={'../..' + '/auto-pay/payment-selection'} relative="path">
            <ShadCNButton className="flex items-center gap-1">
              <img src={ManageIcon} alt="" className="h-[20px]" />
              <ShadCNLabel className="text-[11px] leading-relaxed  text-cw-green border-b border-cw-green">
                Manage Auto Pay
              </ShadCNLabel>
            </ShadCNButton>
          </Link>
        </div>
      </Card>
    </>
  );
};

export default MakePaymentDashboard;
