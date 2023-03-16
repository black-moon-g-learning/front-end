import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';
import {QueryClient, QueryClientProvider} from 'react-query';
import {
  NotificationListner,
  requestUserPermission,
} from './src/components/Login/LoginSocial';
import Navigation from './src/navigations';
// import SplashScreen from 'react-native-splash-screen'

const queryClient = new QueryClient();
const App = () => {
  useEffect(() => {
    SplashScreen.hide();
    NotificationListner();
    requestUserPermission();
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
      <GestureHandlerRootView style={{flex: 1}}>
        <NavigationContainer linking={linking}>
          <Navigation />
        </NavigationContainer>
      </GestureHandlerRootView>
    </QueryClientProvider>
  );
};

export default App;
