import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import {Text, View} from 'react-native';
// import Icon from 'react-native-vector-icons/Feather';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

function Home() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home</Text>
    </View>
  );
}
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
        // options={{
        //   headerShown: false,

        //   tabBarIcon: () => <Icon name="home" size={20} color="black" />,
        // }}
      />
      <Tab.Screen
        name="Game"
        component={Game}
        // options={{
        //   tabBarLabel: 'Revenue',
        //   tabBarIcon: () => <Icon name="tag" size={20} color="black" />,
        // }}
      />
      <Tab.Screen
        name="Information"
        component={Information}
        // options={{
        //   headerShown: false,
        //   tabBarLabel: 'Updates',
        //   tabBarIcon: () => <Icon name="coffee" size={20} color="black" />,
        // }}
      />
      <Tab.Screen
        name="Countribuid"
        component={Countribuid}
        // options={{
        //   tabBarLabel: 'Management',
        //   tabBarIcon: () => <Icon name="list" size={20} color="black" />,
        // }}
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
