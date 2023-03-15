import {Continents_URL} from '@env';
import auth, {firebase} from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import React from 'react';
import {StyleSheet, View} from 'react-native';
// import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AccessToken, LoginManager} from 'react-native-fbsdk-next';

import messaging from '@react-native-firebase/messaging';
import {Image, TouchableOpacity} from 'react-native';
export async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
    return GetFCMToke();
  }
}

async function GetFCMToke() {
  let fcmtoken = await AsyncStorage.getItem('fcmtoken');
  console.log('old token', fcmtoken);

  if (!fcmtoken) {
    try {
      let fcmtoken = await messaging().getToken();
      if (fcmtoken) {
        console.log('New token', fcmtoken);
        await AsyncStorage.setItem('fcmtoken', fcmtoken);
      } else {
      }
    } catch (error) {
      console.log(error, 'error in fcm token');
    }
  }
  return fcmtoken;
}

export const NotificationListner = () => {
  // Assume a message-notification contains a "type" property in the data payload of the screen to open

  messaging().onNotificationOpenedApp(remoteMessage => {
    console.log(
      'Notification caused app to open from background state:',
      remoteMessage.notification,
    );
  });

  // Check whether an initial notification is available
  messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      if (remoteMessage) {
        console.log(
          'Notification caused app to open from quit state:',
          remoteMessage.notification,
        );
      }
    });

  messaging().onMessage(async remoteMessage => {
    console.log('notification on froground state....', remoteMessage);
  });
};

const LoginSocial = () => {
  // const queryClient = useQueryClient();
  const navigation = useNavigation();
  GoogleSignin.configure({
    webClientId:
      '1082282985717-m0m9r4gr3lkqbcvmq6fftkjh5sapkd0b.apps.googleusercontent.com',
  });

  const signInWithGoogleAsync = async () => {
    let flag = true;
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    const {idToken} = await GoogleSignin.signIn();

    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    await auth().signInWithCredential(googleCredential);
    const tokenfcm = await requestUserPermission();

    await firebase.auth().onAuthStateChanged(user => {
      if (user && flag) {
        user
          .getIdTokenResult()
          .then(data => {
            return data.token;
          })
          .then(data => {
            console.log('cau xin m');
            return axios.post(`${Continents_URL}/login`, {
              token: data,
              device_token: tokenfcm,
            });
          })
          .then(async data => {
            const userInfo = data.data.data.access_token;
            await AsyncStorage.setItem('@Token', JSON.stringify(userInfo));
            navigation.reset({
              index: 0,
              routes: [{name: 'Tab'}],
            });
          });
        flag = false;
      } else {
        console.log('not login');
      }
    });
  };

  // Login with facebook
  const onFacebookButtonPress = async () => {
    let flag = true;
    const result = await LoginManager.logInWithPermissions([
      'public_profile',
      'email',
    ]);

    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }

    const data = await AccessToken.getCurrentAccessToken();

    if (!data) {
      throw 'Something went wrong obtaining access token';
    }

    const facebookCredential = auth.FacebookAuthProvider.credential(
      data.accessToken,
    );
    await auth().signInWithCredential(facebookCredential);
    const tokenfcm = await requestUserPermission();

    await firebase.auth().onAuthStateChanged(user => {
      if (user && flag) {
        user
          .getIdTokenResult()
          .then(data => {
            return data.token;
          })
          .then(data => {
            return axios.post(`${Continents_URL}/login`, {
              token: data,
              device_token: tokenfcm,
            });
          })
          .then(async data => {
            const userInfo = data.data.data.access_token;
            await AsyncStorage.setItem('@Token', JSON.stringify(userInfo));
            // await AsyncStorage.getItem('@Token');
          });
        flag = false;
      } else {
        console.log('not login');
      }
    });
  };

  ///View
  const Loginwithsocial = () => {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.btn_social}
          onPress={() => signInWithGoogleAsync()}>
          <Image
            style={styles.image_btn_login_gg}
            source={require('../../assets/images/google.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn_social}
          onPress={() => onFacebookButtonPress()}>
          <Image
            style={styles.image_btn_login_fb}
            source={require('../../assets/images/facebook.png')}
          />
        </TouchableOpacity>
      </View>
    );
  };
  return <Loginwithsocial />;
};

export default LoginSocial;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  image_btn_login_gg: {
    width: 37,
    height: 37,
    borderRadius: 20,
  },
  image_btn_login_fb: {
    width: 37,
    height: 37,
    borderRadius: 20,
  },
  btn_social: {
    alignItems: 'center',
    padding: 5,
  },
  container_register: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 17,
  },
  text_color: {color: '#5FAD41'},
});
