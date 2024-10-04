import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';
import router from './../routes/RouteIndex';
import { AuthProvider } from './contexts/AuthProvider';
import { AppContextProvider } from './contexts/AppContextProvider';
import Debugger from './components/Debugger';

const queryClient = new QueryClient();

function App() {
  return (
    <AppContextProvider>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
        <Debugger />
      </AuthProvider>
    </AppContextProvider>
  );
}

export default App;
