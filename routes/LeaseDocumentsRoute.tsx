import { Navigate, Route } from 'react-router-dom'
import DummyComponent from './../src/components/DummyComponent';
import WrappedRoute from './WrappedRoute';
import Documents from '@/components/document-page/Documents';
import StatementInvoiceDocument from './../src/components/document-page/StatementInvoiceDocument';

function LeaseDocumentsRoutes() {
  return (
    <WrappedRoute>
      <Route element={<Documents  /> }>
        <Route index element={<Navigate to="invoice" replace />} />
        <Route path="invoice" element={<StatementInvoiceDocument />} />
        <Route path="overview" element={<DummyComponent text="Lease Documents" />} />
      </Route>
    </WrappedRoute>
  );
}

export default LeaseDocumentsRoutes
