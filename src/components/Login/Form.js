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
        <TextInput
          style={styles.input_login}
          placeholder="Enter password"
          secureTextEntry={true}
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
    alignContent: 'center',
    marginTop: 30,
  },
  input_login: {
    width: 300,
    height: 50,
    margin: 10,
    paddingLeft: 10,
    borderWidth: 1,
    borderRadius: 10,
    // fontWeight: '300',
    fontFamily: 'Poppins-SemiBold',
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
    width: '40%',
    height: 40,
    borderRadius: 10,
    backgroundColor: '#5FAD41',
    padding: 5,
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
    fontFamily: 'Poppins-MediumItalic',
  },
  chosemethod: {
    paddingTop: 10,
    fontSize: 18,
    color: '#5FAD41',
    fontFamily: 'Poppins-Regular',
  },
});
