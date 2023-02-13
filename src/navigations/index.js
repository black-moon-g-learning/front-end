import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Icons from 'react-native-vector-icons/Ionicons';

import IconQuestion from 'react-native-vector-icons/AntDesign';

import {Loading} from '../components/Loading';
import Logout from '../components/Logout';
import Contribution from '../screens/Contribution';
import Countries from '../screens/Countries';
import DetailCountryPage from '../screens/DetailCountryPage';
import HYHBDetail from '../screens/HYHBDetailPage';
import News from '../screens/HYHBpage';
import Home from '../screens/Home';
import Information from '../screens/Infor';
import Login from '../screens/Login/Login';
import Register from '../screens/Login/Register';
import Videos from '../screens/Videos';
import PlayVideo from '../screens/Videos/Playvideo';
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
      <Tab.Screen
        name="Country"
        component={Countries}
        options={{
          headerShown: false,
          tabBarButton: props => null, //like this
        }}
      />
      <Tab.Screen
        name="TopicCountry"
        component={DetailCountryPage}
        options={{
          headerShown: false,
          tabBarButton: props => null, //like this
        }}
      />
      <Tab.Screen
        name="videos"
        component={Videos}
        options={{
          headerShown: false,
          tabBarButton: props => null, //like this
        }}
      />
      <Tab.Screen
        name="playvideo"
        component={PlayVideo}
        options={{
          headerShown: false,
          tabBarButton: props => null, //like this
        }}
      />
    </Tab.Navigator>
  );
}
const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="login"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Tab" component={MyTabs} />
        <Stack.Screen name="Country" component={Countries} />
        <Stack.Screen name="TopicCountry" component={DetailCountryPage} />
        <Stack.Screen name="videos" component={Videos} />
        <Stack.Screen name="loading" component={Loading} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="logout" component={Logout} />
        <Stack.Screen name="News" component={HYHBDetail} />
        <Stack.Screen name="Contribution" component={Contribution} />
        <Stack.Screen name="playvideo" component={PlayVideo} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
