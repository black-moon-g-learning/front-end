import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import React from 'react';
import Navigation from './src/navigators';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Navigation />
    </QueryClientProvider>
  );
};

export default App;
