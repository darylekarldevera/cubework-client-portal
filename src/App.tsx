import { useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './../routes/RouteIndex';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthContext } from './contexts/AuthContext';

const queryClient = new QueryClient();

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <AuthContext.Provider value={{
      isAuthenticated: isAuthenticated,
      setIsAuthenticated: (auth) => {
        setIsAuthenticated(auth);
        console.log(auth);
      },
    }}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthContext.Provider>
  );
}

export default App;
