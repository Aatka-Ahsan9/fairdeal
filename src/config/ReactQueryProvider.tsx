import React, {ReactNode} from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2, // Retry failed requests 2 times
      refetchOnWindowFocus: false, // Disable refetch on app focus (more common in mobile apps)
    },
  },
});

interface ReactQueryProviderProps {
  children: ReactNode;
}

const ReactQueryProvider = ({children}: ReactQueryProviderProps) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default ReactQueryProvider;
