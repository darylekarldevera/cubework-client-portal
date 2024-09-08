import { Navigate, Route } from 'react-router-dom'
import DummyComponent from './../src/components/DummyComponent';
import WrappedRoute from './WrappedRoute';

function LeaseDocumentsRoutes() {
  return (
    <WrappedRoute>
      <Route element={<DummyComponent text="Lease Documents" />}>
        <Route index element={<Navigate to="invoice" replace />} />
        <Route path="invoice" element={<DummyComponent text="Statements/Invoice" />} />
        <Route path="overview" element={<DummyComponent text="Lease Documents" />} />
      </Route>
    </WrappedRoute>
  );
}

export default LeaseDocumentsRoutes
