import {Continents_URL} from '@env';
import auth, {firebase} from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const Login = () => {
  const navigation = useNavigation();
  GoogleSignin.configure({
    webClientId:
      '1082282985717-m0m9r4gr3lkqbcvmq6fftkjh5sapkd0b.apps.googleusercontent.com',
  });

  const signInWithGoogleAsync = async () => {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    // Sign-in the user with the credential
    const user_sign_in = auth().signInWithCredential(googleCredential);
    user_sign_in
      .then(user => {
        console.log(user);
      })
      .catch(error => {
        console.log(error);
      });

    const idTokenResult = await firebase.auth().onAuthStateChanged(user => {
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
          .then(data => console.log('data 1 ', data));
      } else {
        console.log('not login');
      }
    });
    idTokenResult();
  };

  // Login with facebook

  ///View
  const LoginForm = () => {
    return (
      <TouchableOpacity style={styles.container_form}>
        <View style={styles.logo_form}>
          <Image
            style={styles.image_login}
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
          />
        </View>
        <View>
          <TextInput
            style={styles.input_login}
            placeholder="Enter your number"
          />
          <TextInput
            style={styles.input_login}
            placeholder="Enter password"
            keyboardType="numeric"
          />
        </View>
        <View style={styles.button}>
          <TouchableOpacity style={styles.button_login}>
            <Text style={styles.text_login}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button_register}>
            <Text style={styles.text_register}>Register</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };

  const LoginwithGoogle = () => {
    return (
      <>
        <TouchableOpacity
          style={styles.container}
          onPress={() =>
            signInWithGoogleAsync().then(() => navigation.navigate('Tab'))
          }>
          <Image
            style={styles.image_btn_login}
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
          />
          <Text style={styles.name_gg}>Login with google</Text>
        </TouchableOpacity>
      </>
    );
  };

  const LoginwithFacebook = () => {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image_btn_login}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
        <Text style={styles.name_face}>Login with Facebook</Text>
      </View>
    );
  };

  return (
    <View>
      <LoginForm />
      <LoginwithGoogle />
      <LoginwithFacebook />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    width: '50%',
    alignItems: 'center',
    flexDirection: 'row',
    margin: 10,
    marginLeft: '25%',
    height: 40,
    borderRadius: 10,
  },
  image_btn_login: {
    width: 25,
    height: 25,
    marginRight: 15,
    marginLeft: 5,
  },
  input_login: {
    height: 40,
    margin: 10,
    borderWidth: 1,
    padding: 10,
  },
  image_login: {
    width: 200,
    height: 200,
    marginTop: 40,
  },
  logo_form: {
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  button: {
    alignItems: 'center',
  },
  button_login: {
    borderColor: 'red',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 40,
    borderRadius: 10,
    backgroundColor: 'green',
  },
  text_login: {
    color: 'black',
    fontSize: 20,
    fontWeight: '600',
  },
});
