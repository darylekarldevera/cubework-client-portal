import { useState } from 'react';
import Header from '@/components/Header';
import ContentFullWidthWSidebar from './ContentFullWSidebar';
import ErrorMessage from '@/shared/modals/ErrorMessage';
import { ErrorModalContext } from '@/contexts/ErrorModalContext';

// Define the correct types for the context

function MainLayout() {
  const [showError, setShowError] = useState(false);

  return (
    <div className="main flex flex-col h-full">
      <ErrorModalContext.Provider value={{ showError, setShowError }}>
        <ErrorMessage isVisible={showError} />
        <section>
          <Header />
        </section>
        <ContentFullWidthWSidebar />
      </ErrorModalContext.Provider>
    </div>
  );
}

export default MainLayout;
