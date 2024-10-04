import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { localStorageKeys } from '@/constants/localStorageKeys';

interface AuthProviderProps {
  children: React.ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const x = localStorage.getItem(localStorageKeys.IS_AUTHENTICATED);
  const [isAuthenticated, setIsAuthenticated] = useState(!!x);

  useEffect(() => {
    setIsAuthenticated(!!x);
  }, [ ]);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!isAuthenticated,
        setIsAuthenticated: (auth) => {
          setIsAuthenticated(auth);

          if (auth) {
            localStorage.setItem(localStorageKeys.IS_AUTHENTICATED, auth.toString());
          } else {
            localStorage.clear();
          }
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
