import { createContext, Dispatch, SetStateAction } from "react";

interface IErrorModalContext {
  showError: boolean;
  setShowError: Dispatch<SetStateAction<boolean>>;
}

// Provide the initial values with correct types
export const ErrorModalContext = createContext<IErrorModalContext>({
  showError: false,
  setShowError: () => {},
});
