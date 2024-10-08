import React, { useState } from 'react';
import { AppContext } from './AppContext';
import { localStorageKeys } from '@/constants/localStorageKeys';

interface AppProviderProps {
  children: React.ReactNode;
}

export function AppContextProvider({ children }: AppProviderProps) {
  const _activeLicense = localStorage.getItem(localStorageKeys.ACTIVE_LICENSE);
  const [experimentalUI, setExperimentalUI] = useState(1);
  const [activeLicense, setActiveLicense] = useState<number | null>(_activeLicense ? parseInt(_activeLicense) : null);

  return (
    <AppContext.Provider
      value={{
        experimentalUI: experimentalUI,
        setExperimentalUI: (flag: number) => {
          setExperimentalUI(flag);
        },
        activeLicense: activeLicense,
        setActiveLicense: (id: number) => {
          setActiveLicense(id);
          localStorage.setItem(localStorageKeys.ACTIVE_LICENSE, id.toString());
        }
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
