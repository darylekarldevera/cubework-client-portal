import React, { useState } from 'react';
import { AppContext } from './AppContext';

interface AppProviderProps {
  children: React.ReactNode;
}

export function AppContextProvider({ children }: AppProviderProps) {
  const [experimentalUI, setExperimentalUI] = useState(1);

  return (
    <AppContext.Provider
      value={{
        experimentalUI: experimentalUI,
        setExperimentalUI: (flag: number) => {
          setExperimentalUI(flag);
        },
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
