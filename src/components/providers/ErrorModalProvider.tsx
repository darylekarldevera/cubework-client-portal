import { ErrorModalContext } from '@/contexts/ErrorModalContext';
import { useState } from 'react';

interface IErrorModalProvider {
  children: React.ReactNode;
}

function ErrorModalProvider({ children }: IErrorModalProvider) {
  const [showError, setShowError] = useState(false);
  return (
    <ErrorModalContext.Provider value={{ showError, setShowError }}>
      <ErrorModalContext.Consumer>
        {() => children}
      </ErrorModalContext.Consumer>
    </ErrorModalContext.Provider>
  )
}

export default ErrorModalProvider
