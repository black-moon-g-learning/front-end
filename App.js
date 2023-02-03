import {QueryClient, QueryClientProvider} from 'react-query';
import React from 'react';
import DetailCountryPage from './src/screens/DetailCountryPage';
const queryClient = new QueryClient();
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <DetailCountryPage />
    </QueryClientProvider>
  );
};

export default App;
