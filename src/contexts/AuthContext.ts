import { createContext, Dispatch, SetStateAction } from 'react';

interface IAuthContext {
  isAuthenticated: boolean;
  setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
}

// Provide the initial values with correct types
export const AuthContext = createContext<IAuthContext>({
  isAuthenticated: true,
  setIsAuthenticated: () => {},
});
