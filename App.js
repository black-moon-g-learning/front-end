import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {QueryClient, QueryClientProvider} from 'react-query';
import {
  NotificationListner,
  requestUserPermission,
} from './src/components/Login/LoginSocial';
import Navigation from './src/navigations';

const queryClient = new QueryClient();
const App = () => {
  const config = {
    screens: {
      Tab: {
        screens: {
          Homepage: {
            screens: {
              Home: 'homepage',
            },
          },
        },
      },
      Payment: 'payment',
    },
  };

  const linking = {
    prefixes: ['g-learning://open.app'],
    config,
  };

  useEffect(() => {
    SplashScreen.hide();
    NotificationListner();
    requestUserPermission();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer linking={linking}>
        <Navigation />
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
