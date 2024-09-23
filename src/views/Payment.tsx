import Label from '@/components/shared/Label.tsx';
import { Tabs, TabsContent } from '@/components/ui/tabs';
import TabsButtonWrapper from '@/components/shared/TabsButtonWrapper.tsx';
import TabsButton from '@/components/shared/TabsButton.tsx';
import AutoPayList from '@/views/payments/AutoPayList.tsx';
import AccountDashboard from '@/views/payments/AccountDashboard.tsx';
import { MakePaymentTable } from '@/views/payments/MakePaymentTable.tsx';
import { IMakePaymentTableProps } from '@/types/payments';

type PaymentProps = object;

const Payment = ({}: PaymentProps) => {

  // TODO: Remove dummy data
  const dummyData: IMakePaymentTableProps = {
    items: [
      {
        description: 'Rent-warehouse',
        date: '8/20/2024',
        chargeBalance: 88.0,
        balance: 88.0,
      },
    ],
    totalAmount: 88.99,
    totalPayment: 88.0,
  };

  return (
    <div className="ml-5 mt-[30px]">
      <Label>Payment</Label>
      <Tabs defaultValue="make-payment" className="w-full mt-[30px]">
        <TabsButtonWrapper>
          <TabsButton link="make-payment">Make Payment</TabsButton>
          <TabsButton link="auto-pay">Auto Pay</TabsButton>
          <TabsButton link="account">Accounts/Verify Bank</TabsButton>
        </TabsButtonWrapper>
        <TabsContent value="make-payment">
          <MakePaymentTable
            items={dummyData.items}
            totalAmount={dummyData.totalAmount}
            totalPayment={dummyData.totalPayment}
          />
        </TabsContent>
        <TabsContent value="auto-pay">
          <AutoPayList />
        </TabsContent>
        <TabsContent value="account">
          <AccountDashboard />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Payment;
