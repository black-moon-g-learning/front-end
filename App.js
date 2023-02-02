import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import React from 'react';
import ShowCountries from './src/screens/ShowCountries';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ShowCountries />
    </QueryClientProvider>
  );
};

export default App;
