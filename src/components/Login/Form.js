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
      <View style={styles.form}>
        <View style={styles.textInput}>
          <Text style={styles.textlabel}>Enter your number</Text>
          <TextInput
            style={styles.input_login}
            // keyboardType="numeric"
          />
        </View>
        <View style={styles.textInput}>
          <Text style={styles.textlabel}>Enter your number</Text>
          <TextInput
            style={styles.input_login}
            // keyboardType="numeric"
          />
        </View>
      </View>
      <View style={styles.button}>
        <TouchableOpacity style={styles.button_login}>
          <Text style={styles.text_login}>SIGN UP</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button_register}>
          <Text style={styles.text_forgot}>Forgot Password ?</Text>
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
  form: {
    height: 170,
  },
  textlabel: {
    width: 300,
    height: 20,
    fontFamily: 'Poppins-Regular',
    color: '#A5A5A5',
  },
  input_login: {
    width: 300,
    height: 35,
    padding: 10,
    borderBottomWidth: 1,
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
    width: '50%',
    height: 40,
    borderRadius: 10,
    backgroundColor: '#5FAD41',
  },
  text_login: {
    color: '#FFFFFF',
    fontSize: 20,
    height: 30,
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text_forgot: {
    paddingTop: 15,
    paddingBottom: 10,
    fontSize: 15,
    fontFamily: 'Poppins-Regular',
    color: '#313131',
  },
  chosemethod: {
    fontSize: 16,
    color: '#5FAD41',
    fontFamily: 'Poppins-Regular',
  },
});
