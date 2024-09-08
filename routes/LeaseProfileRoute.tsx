import { Navigate, Route } from 'react-router-dom';
import DummyComponent from '@/components/DummyComponent';
import WrappedRoute from './WrappedRoute';

function LeaseProfileRoute() {
  return (
    <WrappedRoute>
      <Route element={<DummyComponent text="Lease Profile" />}>
        <Route index element={<Navigate to="contacts" replace />} />
        <Route index path="contacts" element={<DummyComponent text="Contacts" />} />
        <Route path="my-space" element={<DummyComponent text="My Space(s)" />} />
        <Route path="charge-schedule" element={<DummyComponent text="Charge Schedule" />} />
      </Route>
    </WrappedRoute>
  );
}

export default LeaseProfileRoute;
