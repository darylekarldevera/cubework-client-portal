import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';

interface AuthProviderProps {
  children: React.ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const x = localStorage.getItem('isAuthenticated');
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
            localStorage.setItem('isAuthenticated', auth.toString());
          } else {
            localStorage.removeItem('isAuthenticated');
          }
          console.log(auth);
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
