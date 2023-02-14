import {Continents_URL} from '@env';
import auth, {firebase} from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import React from 'react';
import {StyleSheet, View} from 'react-native';

import {Image, TouchableOpacity} from 'react-native';

const LoginSocial = () => {
  const navigation = useNavigation();
  GoogleSignin.configure({
    webClientId:
      '1082282985717-m0m9r4gr3lkqbcvmq6fftkjh5sapkd0b.apps.googleusercontent.com',
  });

  const signInWithGoogleAsync = async () => {
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
      if (user) {
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
          .then(data => console.log('data 1  ', data));
      } else {
        console.log('not login');
      }
    });
  };

  // Login with facebook

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
            style={styles.image_btn_login}
            source={require('../../assets/images/google.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn_social}>
          <Image
            style={styles.image_btn_login}
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
  image_btn_login: {
    width: 50,
    height: 50,
    borderRadius: 20,
  },
  btn_social: {
    alignItems: 'center',
    padding: 10,
  },
  container_register: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 18,
  },
  text_color: {color: '#5FAD41'},
});
