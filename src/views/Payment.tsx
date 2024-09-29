import Label from '@/components/shared/Label.tsx';
import { Outlet } from 'react-router-dom';
import PaymentTabs from '@/views/payments/PaymentTabs.tsx';

const Payment = () => {
  return (
    <div>
      <Label>Payments</Label>
      <div className="w-full mt-[30px]">
        <PaymentTabs />
        <Outlet />
      </div>
    </div>
  );
};

export default Payment;
