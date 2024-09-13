import { Navigate, Route } from 'react-router-dom'
import WrappedRoute from './WrappedRoute';
import Documents from '@/components/document-page/Documents';
import StatementInvoiceDocument from './../src/components/document-page/StatementInvoiceDocument';
import LeaseDocuments from '@/components/document-page/LeaseDocument';

function LeaseDocumentsRoutes() {
  return (
    <WrappedRoute>
      <Route element={<Documents  /> }>
        <Route index element={<Navigate to="invoice" replace />} />
        <Route path="invoice" element={<StatementInvoiceDocument />} />
        <Route path="overview" element={<LeaseDocuments/>} />
      </Route>
    </WrappedRoute>
  );
}

export default LeaseDocumentsRoutes
