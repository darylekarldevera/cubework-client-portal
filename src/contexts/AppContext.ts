import { createContext, Dispatch, SetStateAction } from 'react';

interface IAppContext {
  experimentalUI: number;
  setExperimentalUI: Dispatch<SetStateAction<number>>;
}

export const AppContext = createContext<IAppContext>({
  experimentalUI: 0,
  setExperimentalUI: () => {},
});
