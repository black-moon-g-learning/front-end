import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import ShowCountries from './src/screens/Countries';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ShowCountries />
    </QueryClientProvider>
  );
};

export default App;
