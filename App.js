import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {QueryClient, QueryClientProvider} from 'react-query';
import Navigation from './src/navigations';
// import SplashScreen from 'react-native-splash-screen'
const queryClient = new QueryClient();
const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <Navigation />
    </QueryClientProvider>
  );
};

export default App;