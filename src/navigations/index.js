import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {Text, View} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/Feather';

import IconQuestion from 'react-native-vector-icons/AntDesign';

import {Loading} from '../components/Loading';
import Logout from '../components/Logout';
import Countries from '../screens/Countries';
import DetailCountryPage from '../screens/DetailCountryPage';
import HYHBDetail from '../screens/HYHBDetailPage';
import Contribution from '../screens/Contribution';
import News from '../screens/HYHBpage';
import Home from '../screens/Home';
import Information from '../screens/Infor';
import Login from '../screens/Login/Login';
import Videos from '../screens/Videos';
import PlayVideo from '../screens/Videos/Playvideo';

// import {CountriesTitle} from '../screens/Countries';
function Game() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Game</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Icon name="home" size={25} color={focused ? '#5FAD41' : 'black'} />
          ),
        }}
      />
      <Tab.Screen
        name="Game"
        component={Game}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Icons
              name="md-game-controller-outline"
              size={25}
              color={focused ? '#5FAD41' : 'black'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="HYHB"
        component={News}
        options={{
          tabBarLabel: 'Management',
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <IconQuestion
              name="questioncircleo"
              size={25}
              color={focused ? '#5FAD41' : 'black'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Information"
        component={Information}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Icon name="user" size={25} color={focused ? '#5FAD41' : 'black'} />
          ),
        }}
      />
      {/* <Tab.Screen
        name="Country"
        component={Countries}
        options={{
          headerShown: false,
          tabBarButton: props => null, //like this
        }}
      /> */}
      {/* <Tab.Screen
        name="TopicCountry"
        component={DetailCountryPage}
        options={{
          headerShown: false,
          tabBarButton: props => null, //like this
        }}
      /> */}
      {/* <Tab.Screen
        name="videos"
        component={Videos}
        options={{
          headerShown: false,
          tabBarButton: props => null, //like this
        }}
      /> */}
      {/* <Tab.Screen
        name="playvideo"
        component={PlayVideo}
        options={{
          headerShown: false,
          tabBarButton: props => null, //like this
        }}
      /> */}
    </Tab.Navigator>
  );
}
const CustomerHeader = () => {
  return (
    <View
      style={{
        position: 'absolute',
        margin: 0,
        padding: 20,
        height: 10,
        width: 10,
        alignItems: 'center',
        zIndex: 0,
      }}></View>
  );
};
const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="login"
        screenOptions={{
          animation: 'slide_from_bottom',
        }}>
        <Stack.Screen
          name="Tab"
          component={MyTabs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Country"
          component={Countries}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '#F2F2F2',
            },
            headerShadowVisible: false,
            headerTintColor: '#5FAD41',
          }}
        />
        <Stack.Screen
          name="TopicCountry"
          component={DetailCountryPage}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '#5FAD41',
            },
            headerShadowVisible: false,
            headerTintColor: '#ffffff',
          }}
        />
        <Stack.Screen
          name="videos"
          component={Videos}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '#F2F2F2',
            },
            headerShadowVisible: false,
          }}
        />
        <Stack.Screen
          name="loading"
          component={Loading}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen name="logout" component={Logout} />
        <Stack.Screen name="News" component={HYHBDetail} />
        <Stack.Screen
          name="Contribution"
          component={Contribution}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '#F2F2F2',
            },
            headerShadowVisible: false,
          }}
        />
        <Stack.Screen
          name="playvideo"
          component={PlayVideo}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '#F2F2F2',
            },
            headerShadowVisible: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
