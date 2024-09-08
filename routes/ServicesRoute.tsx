import React from 'react'
import { Navigate, Route } from 'react-router-dom';
import WrappedRoute from './WrappedRoute';
import DummyComponent from '../src/components/DummyComponent';

function ServicesRoute() {
  return (
    <WrappedRoute>
      <Route element={<DummyComponent text="Services" />}>
        <Route index element={<Navigate to="" replace/>} />
        <Route path="details" element={<DummyComponent text="Service Details" />} />
        <Route path="payment" element={<DummyComponent text="Payment" />} />
      </Route>
    </WrappedRoute>
  )
}

export default ServicesRoute
