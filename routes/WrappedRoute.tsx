import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import DummyComponent from '../src/components/DummyComponent'

/**
 * WrappedRoute component that wraps its children with a set of routes.
 * It includes a default route for handling 404 Not Found pages.
 *
 * @param {Object} props - The properties object.
 * @param {React.ReactNode} props.children - The child components to be wrapped by the Routes.
 * @returns {JSX.Element} The WrappedRoute component.
 *
 * @example
 * ```tsx
 * <WrappedRoute>
 *   <Route path="/home" element={<HomeComponent />} />
 *   <Route path="/about" element={<AboutComponent />} />
 * </WrappedRoute>
 * ```
 *
 * This will render the HomeComponent or AboutComponent based on the path, and navigate to the 404 page for any other paths.
 */

function WrappedRoute({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <Routes>
      {children}

      {/* 404 Not Found Page */}
      <Route path="*" element={<Navigate to="/404" replace />} />
      <Route path="/404" element={<DummyComponent text="Not Found" />} />
    </Routes>
  );
}

export default WrappedRoute
