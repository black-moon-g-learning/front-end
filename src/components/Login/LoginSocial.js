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

import {Image, TouchableOpacity} from 'react-native';

const LoginSocial = () => {
  // const [userInfo, setUserInfo] = useState({});
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

    const user_sign_in = auth().signInWithCredential(googleCredential);
    user_sign_in
      .then(user => {
        console.log(user);
      })
      .catch(error => {
        console.log(error);
      });
    await firebase.auth().onAuthStateChanged(user => {
      if (user && flag) {
        user
          .getIdTokenResult()
          .then(data => {
            console.log(data.token);
            return data.token;
          })
          .then(data => {
            return axios.post(`${Continents_URL}/login`, {
              token: data,
            });
          })
          .then(async data => {
            const userInfo = data.data.data.access_token;
            await AsyncStorage.setItem('@Token', JSON.stringify(userInfo));
            const currentUser = await AsyncStorage.getItem('@Token');
            console.log('tokennnnn', currentUser);
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
    const user_sign_in = auth().signInWithCredential(facebookCredential);
    user_sign_in
      .then(user => {
        console.log(user);
      })
      .catch(error => {
        console.log(error);
      });
    await firebase.auth().onAuthStateChanged(user => {
      if (user && flag) {
        user
          .getIdTokenResult()
          .then(data => {
            console.log(data.token);
            return data.token;
          })
          .then(data => {
            return axios.post(`${Continents_URL}/login`, {
              token: data,
            });
          })
          .then(async data => {
            const userInfo = data.data.data.access_token;
            await AsyncStorage.setItem('@Token', JSON.stringify(userInfo));
            const currentUser = await AsyncStorage.getItem('@Token');
            console.log('token : ', currentUser);
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
          onPress={() =>
            signInWithGoogleAsync().then(() => navigation.navigate('Tab'))
          }>
          <Image
            style={styles.image_btn_login_gg}
            source={require('../../assets/images/google.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn_social}
          onPress={() =>
            onFacebookButtonPress().then(() => navigation.navigate('Tab'))
          }>
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
