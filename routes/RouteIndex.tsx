import { 
  Navigate,
  Route, 
  createBrowserRouter, 
  createRoutesFromElements 
} from 'react-router-dom';
import React from 'react';

import MainLayout from '@/layouts/MainLayout';
import DummyComponent from '@/components/DummyComponent';

import PublicRoute  from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import PaymentsRoute from './PaymentsRoute';
import LeaseProfileRoute from './LeaseProfileRoute';
import LeaseDocumentsRoutes from './LeaseDocumentsRoute';
import ServicesRoute from './ServicesRoute';

// Temporary logic for authentication, to be replaced with actual authentication logic
const isAuthenticated = true;

/**
 * This setup defines the route structure for the application using `react-router-dom`.
 * It includes public and private routes, and only one of them can be accessed based on the user's authentication status.
 *
 * Route Configuration:
 * - Public routes:
 *   - These are public routes wrapped in the 'PublicRoute' component, which handles logic for redirecting and 
 *   preventing access if the user is authenticated.
 *
 * - Private routes:
 *   - These are private routes wrapped in the 'PrivateRoute' component, which can only be accessed if the user
 *   is authenticated, and will redirect to public routes if not.
 *
 * Notes:
 * - `isAuthenticated` is a boolean variable that simulates the user's authentication status.
 *   This will later be replaced with real authentication logic.
 */

const router = createBrowserRouter(
  createRoutesFromElements(
    <React.Fragment>
      {/* Public Routes */}
      <Route path="/" element={<PublicRoute isAuthenticated={isAuthenticated} />}>
        <Route path="/" element={<DummyComponent text="Login" />} />
        <Route path="/login" element={<DummyComponent text="Login" />} />
        <Route path="/forgot-password" element={<DummyComponent text="Forgot Password" />} />
        <Route path="/reset-password" element={<DummyComponent text="Reset Password" />} />
      </Route>

      {/* Private Routes */}
      <Route element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<DummyComponent text="Home" />} />
          <Route path="/lease-profile/*" element={<LeaseProfileRoute />} />
          <Route path="/payments/*" element={<PaymentsRoute />} />
          <Route path="/lease-documents/*" element={<LeaseDocumentsRoutes />} />
          <Route path="/services/*" element={<ServicesRoute />} />
        </Route>
      </Route>

      {/* 404 Not Found Page */}
      <Route path="*" element={<Navigate to="/404" replace />} />
      <Route path="/404" element={<DummyComponent text="Not Found" />} />
    </React.Fragment>
  )
);

export default router;
