import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import { useNavigation } from '@react-navigation/native';
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
  const navigation = useNavigation()
  GoogleSignin.configure({
    webClientId:
      '1082282985717-m0m9r4gr3lkqbcvmq6fftkjh5sapkd0b.apps.googleusercontent.com',
  });

  const signInWithGoogleAsync = async () => {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
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
  };

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
        <TouchableOpacity style={styles.button_login}>
          <Text style={styles.text_login}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button_register}>
          <Text style={styles.text_login}>Register</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };

  const LoginwithGoogle = () => {
    return (
      <TouchableOpacity
        style={styles.container_gg}
        onPress={() =>
          signInWithGoogleAsync().then(() => navigation.navigate('Tab'))
        }>
        <Text style={styles.name_gg}>login with google</Text>
      </TouchableOpacity>
    );
  };

  const LoginwithFacebook = () => {
    return (
      <View style={styles.container_face}>
        <Text style={styles.name_face}>Login with Facebook</Text>
      </View>
    );
  };

  return (
    <View>
      <LoginForm />
      <LoginwithGoogle />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container_gg: {},
  container_face: {},
  input_login: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
