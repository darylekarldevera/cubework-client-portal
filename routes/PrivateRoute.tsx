import { UNAUTHENTICATED_ROUTES } from '@/constants/restrictedRoute';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

interface IPrivateRouteProps {
  isAuthenticated: boolean;
}

/**
 * A component that prevent to have an access to certain routes based on authentication status.
 * If the user is not authenticated and tries to access a restricted route, they will be redirected to the login page.
 *
 * @component
 * @param {IPrivateRouteProps} props - The properties for the PrivateRoute component.
 * @param {boolean} props.isAuthenticated - Indicates whether the user is authenticated.
 * @returns {JSX.Element} - The rendered component.
 *
 * @example
 * ```tsx
 * <PrivateRoute isAuthenticated={true}>
 *   <ProtectedComponent />
 * </PrivateRoute>
 * ```
 */

function PrivateRoute({ isAuthenticated }: IPrivateRouteProps): JSX.Element {
  const { pathname } = useLocation();

  if (!isAuthenticated && !UNAUTHENTICATED_ROUTES.includes(pathname)) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}

export default PrivateRoute;
