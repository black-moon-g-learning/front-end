import {QueryClient, QueryClientProvider, useQuery} from 'react-query';

import React from 'react';
import Navigation from './src/navigations';
import Home from './src/screens/Home';
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
};

export default App;
