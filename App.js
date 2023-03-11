import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {QueryClient, QueryClientProvider} from 'react-query';
import Navigation from './src/navigations';
// import SplashScreen from 'react-native-splash-screen'
import {
  NotificationListner,
  requestUserPermission,
} from './src/utills/Pushnotification';

const queryClient = new QueryClient();
const App = () => {
  useEffect(() => {
    SplashScreen.hide();
    requestUserPermission();
    NotificationListner();
  }, []);

  const config = {
    screens: {
      Payment: 'payment',
    },
  };

  const linking = {
    prefixes: ['g-learning://'],
    config,
  };
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer linking={linking}>
        <Navigation />
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
