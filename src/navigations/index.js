import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useState, useEffect} from 'react';
import firebase from '@react-native-firebase/app';
import IconQuestion from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/Feather';
import Icons from 'react-native-vector-icons/Ionicons';
import ContributionHeader from '../components/Contribution/ContributionHeader';
import MapViewCountry from '../components/DetailContryPage/MapView';
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
import DisplayQuestion from '../screens/G-Game/DisplayQuestion';
import FailPage from '../screens/G-Game/FailPage';
import GameLevels from '../screens/G-Game/GameLevels';
import GoodPage from '../screens/G-Game/GoodPage';
import GreatePage from '../screens/G-Game/GreatePage';
import ModalAnswer from '../components/Review/ModalAnswer';
import HYHBDetail from '../screens/HYHBDetailPage';
import News from '../screens/HYHBpage';
import HistoryVideo from '../screens/History';
import Home from '../screens/Home';
import Login from '../screens/Login/Login';
import Register from '../screens/Login/Register';
import Payment from '../screens/Payment';
import Videos from '../screens/Videos';
import PlayVideo from '../screens/Videos/Playvideo';
import Information from './../screens/Infor/index';
import Review from '../screens/Review';
import ModalNext from '../components/Review/ModalNextQuestion';
import AsyncStorage from '@react-native-async-storage/async-storage';
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
        component={ChooseCountry}
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
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      setIsLoggedIn(user ? true : false);
    });

    return unsubscribe;
  }, []);
  return (
    <Stack.Navigator
      initialRouteName="login"
      screenOptions={{
        animation: 'slide_from_bottom',
      }}>
      {isLoggedIn ? (
        <Stack.Screen
          name="Tab"
          component={Bottomtab}
          options={{headerShown: false}}
        />
      ) : (
        <Stack.Screen
          name="login"
          component={Login}
          options={{headerShown: false}}
        />
      )}
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
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="FailScreen"
        component={FailPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="GoodScreen"
        component={GoodPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ModalAnswer"
        component={ModalAnswer}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="GreatScreen"
        component={GreatePage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="next"
        component={ModalNext}
        options={{headerShown: false}}
      />
      <HomeStack.Screen name="logout" component={Logout} />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <HomeStack.Screen name="title" component={TitleContries} />
      <HomeStack.Screen name="listvideo" component={TitleListVideos} />
      <HomeStack.Screen name="Payment" component={Payment} />
      <HomeStack.Screen
        name="mapview"
        component={MapViewCountry}
        options={{
          title: 'G - MAP',
          headerTintColor: '#5FAD41',
        }}
      />
      <HomeStack.Screen
        name="review"
        component={Review}
        options={{
          title: 'REVIEW',
          headerTintColor: '#5FAD41',
        }}
      />
      <HomeStack.Screen name="History" component={HistoryVideo} />
    </Stack.Navigator>
  );
}
