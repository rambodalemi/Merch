import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import DeleteProduct from './DeleteProductButton';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <DeleteProduct/>
    </QueryClientProvider>
  );
}

export default App;
