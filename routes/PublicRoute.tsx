import { AUTHENTICATED_ROUTES } from '@/constants/restrictedRoute';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

interface IPublicRouteProps {
  isAuthenticated: boolean;
}

/**
 * A component that restricts access to public routes based on authentication status.
 * If the user is authenticated and the current path is not in the list of authenticated routes,
 * the user will be redirected to the "/home" route.
 *
 * @component
 * @param {} props - The properties for the PublicRoute component.
 * @param {} props.isAuthenticated - Indicates whether the user is authenticated.
 * @returns {JSX.Element} - The rendered component.
 *
 * @example
 * ```tsx
 * <PrivateRoute isAuthenticated={true}>
 *   <ProtectedComponent />
 * </PrivateRoute>
 * ```
 */

function PublicRoute({ isAuthenticated }: IPublicRouteProps): JSX.Element {
  const { pathname } = useLocation();

  if (isAuthenticated && !AUTHENTICATED_ROUTES.includes(pathname)) {
    return <Navigate to="/home" />;
  }

  return <Outlet />;
}

export default PublicRoute;
