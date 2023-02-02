import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import {Text, View} from 'react-native';
import Icons from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/Feather';
import Home from '../screens/Home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function Game() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Game</Text>
    </View>
  );
}

function Information() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Information</Text>
    </View>
  );
}

function Countribuid() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Countribuid</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Loading"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,

          tabBarIcon: () => <Icon name="home" size={20} color="black" />,
        }}
      />
      <Tab.Screen
        name="Game"
        component={Game}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Icons name="game-controller" size={20} color="black" />
          ),
        }}
      />

      <Tab.Screen
        name="Countribuid"
        component={Countribuid}
        options={{
          tabBarLabel: 'Management',
          headerShown: false,
          tabBarIcon: () => <Icons name="message" size={20} color="black" />,
        }}
      />
      <Tab.Screen
        name="Information"
        component={Information}
        options={{
          headerShown: false,
          tabBarIcon: () => <Icon name="user" size={20} color="black" />,
        }}
      />
      {/* <Tab.Screen
        name="Loading"
        component={Loading}
        options={{
          tabBarButton: props => null, //like this
        }}
      /> */}
      {/* <Tab.Screen
        name="SignUp"
        component={SignUp}
        options={{
          tabBarButton: props => null, //like this
        }}
      /> */}
    </Tab.Navigator>
  );
}
const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Tab"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Tab" component={MyTabs} />
        {/* <Stack.Screen name="Detail" component={Details} />
        <Stack.Screen name="addNew" component={CreateProduct} />
        <Stack.Screen name="Login" component={Login} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
