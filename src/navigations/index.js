import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import DisplayQuestion from '../screens/G-Game/DisplayQuestion';
import IconQuestion from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/Feather';
import Icons from 'react-native-vector-icons/Ionicons';
import ContributionHeader from '../components/Contribution/ContributionHeader';
import LevelHeader from '../components/G-Game/LevelHeader';
import HYHBHeader from '../components/HYHBpage/HYHBHeader';
import {Loading} from '../components/Loading';
import Logout from '../components/Logout';
import {
  TitleContries,
  TitleListVideos,
} from '../components/TitleHeaderNavigate';
import Contribution from '../screens/Contribution';
import Countries from '../screens/Countries';
import DetailCountryPage from '../screens/DetailCountryPage';
import ChooseCountry from '../screens/G-Game/ChooseCountry';
import GameLevels from '../screens/G-Game/GameLevels';
import Home from '../screens/Home';
import HYHBDetail from '../screens/HYHBDetailPage';
import News from '../screens/HYHBpage';
import Information from '../screens/Infor';
import Login from '../screens/Login/Login';
import Register from '../screens/Login/Register';
import Videos from '../screens/Videos';
import PlayVideo from '../screens/Videos/Playvideo';
import Score from '../components/G-Game/Score';
import FailPage from '../screens/G-Game/FailPage';
import GoodPage from '../screens/G-Game/GoodPage';
import GreatePage from '../screens/G-Game/GreatePage';
const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="Country"
        component={Countries}
        options={{
          headerTitle: props => <TitleContries {...props} />,
          headerStyle: {
            backgroundColor: '#F2F2F2',
          },
          headerShadowVisible: false,
          headerTintColor: '#5FAD41',
        }}
      />
      <HomeStack.Screen
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
      <HomeStack.Screen
        name="videos"
        component={Videos}
        options={{
          headerTitle: props => <TitleListVideos {...props} />,
          headerStyle: {
            backgroundColor: '#F2F2F2',
          },
          headerShadowVisible: false,
          headerTintColor: '#5FAD41',
        }}
      />
      <HomeStack.Screen
        name="loading"
        component={Loading}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="playvideo"
        component={PlayVideo}
        options={{
          title: '',
          headerStyle: {
            backgroundColor: '#F2F2F2',
          },
          headerShadowVisible: false,
          headerTintColor: '#5FAD41',
        }}
      />
    </HomeStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function Bottomtab() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Homepage"
        component={HomeStackScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Icon name="home" size={25} color={focused ? '#5FAD41' : 'black'} />
          ),
        }}
      />
      <Tab.Screen
        name="Game"
        component={GreatePage}
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
          animation: 'slide_from_bottom',
        }}>
        <Stack.Screen
          name="login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Tab"
          component={Bottomtab}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Contribution"
          component={Contribution}
          options={{
            headerTitle: props => <ContributionHeader {...props} />,
            headerStyle: {
              backgroundColor: '#F2F2F2',
            },
            headerShadowVisible: false,
          }}
        />
        <Stack.Screen
          name="News"
          component={HYHBDetail}
          options={{
            headerTitle: props => <HYHBHeader {...props} />,
            headerStyle: {
              backgroundColor: '#F2F2F2',
            },
            headerShadowVisible: false,
          }}
        />
        <Stack.Screen
          name="GameLevels"
          component={GameLevels}
          options={{
            headerTitle: props => <LevelHeader {...props} />,
            headerStyle: {
              backgroundColor: '#F2F2F2',
            },
            headerShadowVisible: false,
          }}
        />
        <Stack.Screen
          name="DisplayQuestions"
          component={DisplayQuestion}
          options={{
            headerTitle: props => <Score {...props} />,
            headerStyle: {
              backgroundColor: '#F2F2F2',
            },
            headerShadowVisible: false,
          }}
        />
        <HomeStack.Screen name="logout" component={Logout} />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{headerShown: false}}
        />
        <HomeStack.Screen name="title" component={TitleContries} />
        <HomeStack.Screen name="listvideo" component={TitleListVideos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
