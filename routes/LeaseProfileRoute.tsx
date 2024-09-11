import { Navigate, Route } from 'react-router-dom';
import DummyComponent from '@/components/DummyComponent';
import WrappedRoute from './WrappedRoute';
import LeaseContacts from '@/components/LeaseContacts';
import LeaseMySpace from '@/components/LeaseMySpace';
import LeaseChargeSchedule from '@/components/LeaseChargeSchedule';

function LeaseProfileRoute() {
  return (
    <WrappedRoute>
      <Route element={<DummyComponent text="Lease Profile" />}>
        <Route index element={<Navigate to="contacts" replace />} />
        <Route index path="contacts" element={<LeaseContacts />} />
        <Route path="my-space" element={<LeaseMySpace />} />
        <Route path="charge-schedule" element={<LeaseChargeSchedule />} />
      </Route>
    </WrappedRoute>
  );
}

export default LeaseProfileRoute;
