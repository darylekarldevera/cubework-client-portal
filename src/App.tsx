import { RouterProvider } from 'react-router-dom';
import router from './../routes/RouteIndex';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    // <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
    // </AuthContext.Provider>
  );
}

export default App;
