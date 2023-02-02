import {QueryClient, QueryClientProvider, useQuery} from 'react-query';

import React from 'react';
import Navigation from './src/navigations';
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Navigation />
    </QueryClientProvider>
  );
};

export default App;
