import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const LoginForm = () => {
  return (
    <TouchableOpacity style={styles.container_form}>
      <View style={styles.textInput}>
        <TextInput style={styles.input_login} placeholder="Enter your number" />
        {/* <Text numberOfLines={1}>
          _________________________________________________
        </Text> */}
        <TextInput
          style={styles.input_login}
          placeholder="Enter password"
          // keyboardType="numeric"
        />
      </View>
      <View style={styles.button}>
        <TouchableOpacity style={styles.button_login}>
          <Text style={styles.text_login}>SIGN UP</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button_register}>
          <Text style={styles.text_forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <Text style={styles.chosemethod}>Or continue with</Text>
      </View>
    </TouchableOpacity>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  textInput: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  input_login: {
    width: 300,
    height: 40,
    margin: 10,
    padding: 10,
    fontFamily: 'Poppins-Bold',
    borderBottomWidth: 0.2,
  },

  logo_form: {
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  button: {
    alignItems: 'center',
    padding: 10,
  },
  button_login: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '60%',
    height: 40,
    borderRadius: 10,
    backgroundColor: '#5FAD41',
  },
  text_login: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '400',
    fontFamily: 'Poppins-Bold',
  },
  text_forgot: {
    padding: 10,
    fontSize: 14,
    fontFamily: 'Poppins-Bold',
  },
  chosemethod: {
    paddingTop: 5,
    fontSize: 18,
    color: '#5FAD41',
    fontFamily: 'Poppins-Bold',
  },
});
