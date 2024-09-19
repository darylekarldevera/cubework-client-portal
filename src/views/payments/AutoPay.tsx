import TabsButtonWrapper from '@/components/shared/TabsButtonWrapper.tsx';
import TabsButton from '@/components/shared/TabsButton.tsx';
import { Link, Outlet } from 'react-router-dom';
import { Tabs, TabsContent } from '@/components/ui/tabs.tsx';

const MakePayment = () => {
  return (
    <Tabs defaultValue="make-payment" className="w-full mt-[30px]">
      <TabsButtonWrapper>
        <TabsButton link="make-payment">Make Payment</TabsButton>
        <TabsButton>
          <Link to={''}>Auto Pay</Link>
        </TabsButton>
        <TabsButton link="account">Accounts/Verify Bank</TabsButton>
      </TabsButtonWrapper>
      <TabsContent value="make-payment">
        <Outlet />
      </TabsContent>
    </Tabs>
  );
};

export default MakePayment;
