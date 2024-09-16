import { Navigate, Route } from 'react-router-dom';
import DummyComponent from '@/components/DummyComponent';
import WrappedRoute from './WrappedRoute';
import Payment from '@/views/Payment.tsx';

function PaymentsRoute() {
  return (
    <WrappedRoute>
      <Route element={<Payment />}>
        {/*<Route element={<DummyComponent text="Payments" />}>*/}
        {/* Make Payments Routes */}
        <Route index element={<Navigate to="make-payments" replace />} />
        <Route path="make-payments" element={<DummyComponent text="Make Payments" />}>
          <Route path="details" element={<DummyComponent text="Payment Details" />} />
        </Route>

        {/* Auto Pay Routes */}
        <Route path="auto-pay" element={<DummyComponent text="Auto Pay Account" />}>
          <Route path="space-option" element={<DummyComponent text="Choose Your Space" />} />
          <Route path="payment-setup" element={<DummyComponent text="Setup Auto Pay" />} />
          <Route path="details" element={<DummyComponent text="Payment Account Details" />} />
        </Route>

        {/* Accounts/Verify Bank Routes */}
        <Route path="bank-accounts" element={<DummyComponent text="Accounts/Verify Bank" />} />
      </Route>
    </WrappedRoute>
  );
}

export default PaymentsRoute;
