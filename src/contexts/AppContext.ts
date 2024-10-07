// @ts-ignore
import { createContext, Dispatch, SetStateAction } from 'react';

interface IAppContext {
  experimentalUI: number | null;
  setExperimentalUI: Function;
  activeLicense: number | null;
  setActiveLicense: Function;
}

export const AppContext = createContext<IAppContext>({
  experimentalUI: null,
  setExperimentalUI: Function,
  activeLicense: null,
  setActiveLicense: Function,
});
