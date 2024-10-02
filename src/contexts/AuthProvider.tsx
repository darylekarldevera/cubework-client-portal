import React, { useState } from 'react';
import { AuthContext } from './AuthContext';

interface AuthProviderProps {
  children: React.ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: isAuthenticated,
        setIsAuthenticated: (auth) => {
          setIsAuthenticated(auth);
          console.log(auth);
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
