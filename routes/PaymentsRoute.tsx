import { Navigate, Route } from 'react-router-dom';
import WrappedRoute from './WrappedRoute';
import MakePaymentDashboard from '@/views/payments/MakePaymentDashboard.tsx';
import MakePaymentTable from '@/views/payments/MakePaymentTable.tsx';
import AutoPayVerify from '@/views/payments/AutoPayVerify.tsx';
import Payment from '@/views/Payment.tsx';
import MakePayment from '@/views/payments/MakePayment.tsx';
import AutoPay from '@/views/payments/AutoPay.tsx';
import Account from '@/views/payments/Account.tsx';
import AutoPayList from '@/views/payments/AutoPayList.tsx';
import AccountDashboard from '@/views/payments/AccountDashboard.tsx';

function PaymentsRoute() {
  return (
    <WrappedRoute>
      <Route element={<Payment />}>
        {/*<Route element={<DummyComponent text="Payments" />}>*/}
        {/* Make Payments Routes */}
        <Route index element={<Navigate to="make-payments" replace />} />
        <Route path="make-payments" element={<MakePayment />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<MakePaymentDashboard />} />
          <Route path="details" element={<MakePaymentTable />} />
        </Route>

        {/* Auto Pay Routes */}
        <Route path="auto-pay" element={<AutoPay />}>
          <Route path="payment-selection" element={<AutoPayVerify />} />
          <Route path="details" element={<AutoPayList />} />
        </Route>

        {/* Accounts/Verify Bank Routes */}
        <Route path="bank-accounts" element={<Account />}>
          <Route path="dashboard" element={<AccountDashboard />} />
        </Route>
      </Route>
    </WrappedRoute>
  );
}

export default PaymentsRoute;
