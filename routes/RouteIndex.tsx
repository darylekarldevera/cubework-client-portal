import { createBrowserRouter, createRoutesFromElements, Navigate, Route } from 'react-router-dom';
import React from 'react';

import MainLayout from '@/layouts/MainLayout';
import DummyComponent from '@/components/DummyComponent';

import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import PaymentsRoute from './PaymentsRoute';
import LeaseProfileRoute from './LeaseProfileRoute';
import LeaseDocumentsRoutes from './LeaseDocumentsRoute';
import ServicesRoute from './ServicesRoute';

import Home from '@/components/Home';
import Login from '@/components/Login';
import ForgotPassword from '@/views/auth/ForgotPassword.tsx';
import VerifyPassword from '@/views/auth/VerifyPassword.tsx';
import PublicLayout from '@/layouts/PublicLayout.tsx';
import HomeV2 from '@/components/HomeV2';
import LicenseSelect from '@/components/LicenseSelect';
import LicenseSelectLogin from '@/components/LicenseSelectLogin';

// Temporary logic for authentication, to be replaced with actual authentication logic
const isAuthenticated = false;

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
      <Route element={<PublicRoute isAuthenticated={isAuthenticated} />}>
        <Route path="/" element={<PublicLayout isAuthenticated={isAuthenticated} />}>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<VerifyPassword />} />
          <Route path="/license-select-login" element={<LicenseSelectLogin />} />
        </Route>
      </Route>

      {/* Private Routes */}
      <Route element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<HomeV2 />} />
          <Route path="/license-select" element={<LicenseSelect />} />
          <Route path="/license-profile/*" element={<LeaseProfileRoute />} />
          <Route path="/payments/*" element={<PaymentsRoute />} />
          <Route path="/license-documents/*" element={<LeaseDocumentsRoutes />} />
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
