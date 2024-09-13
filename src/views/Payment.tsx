import Label from '@/components/shared/Label.tsx';
import { Tabs, TabsContent } from '@/components/ui/tabs.tsx';
import TabsButtonWrapper from '@/components/shared/TabsButtonWrapper.tsx';
import TabsButton from '@/components/shared/TabsButton.tsx';
import Account from '@/views/payments/Account.tsx';
import AutoPaySetup from '@/views/payments/AutoPaySetup.tsx';
import MakePaymentTable from '@/views/payments/MakePaymentTable.tsx';

type PaymentProps = object;

const Payment = ({}: PaymentProps) => {
  return (
    <div className="ml-5 mt-[30px]">
      <Label>Payment</Label>
      <Tabs defaultValue="auto-pay" className="w-full mt-[30px]">
        <TabsButtonWrapper>
          <TabsButton link="make-payment">Make Payment</TabsButton>
          <TabsButton link="auto-pay">Auto Pay</TabsButton>
          <TabsButton link="account">Accounts/Verify Bank</TabsButton>
        </TabsButtonWrapper>
        <TabsContent value="make-payment">
          {/*<MakePaymentDashboard />*/}
          <MakePaymentTable />
        </TabsContent>
        <TabsContent value="auto-pay">
          <AutoPaySetup />
        </TabsContent>
        <TabsContent value="account">
          <Account />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Payment;
