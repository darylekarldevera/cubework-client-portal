import Label from '@/components/shared/Label.tsx';
import { Outlet } from 'react-router-dom';
import PaymentTabs from '@/views/payments/PaymentTabs.tsx';

const Payment = () => {
  return (
    <div className="ml-5 mt-[30px]">
      <Label>Payments</Label>
      <div className="w-full mt-[30px]">
        <PaymentTabs />
        <Outlet />
      </div>
    </div>
  );
};

export default Payment;
