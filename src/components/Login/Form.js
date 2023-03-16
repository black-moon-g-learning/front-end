import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
const windowHeight = Dimensions.get('window').width * (10 / 11);
const windowWidth = Dimensions.get('window').width;
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
          <Text style={styles.text_forgot}>Forgot Password ?</Text>
        </TouchableOpacity>
        <Text style={styles.chosemethod}>Or continue with</Text>
      </View>
    </TouchableOpacity>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  container_form: {
    width: windowWidth,
    height: windowHeight,
  },
  textInput: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    marginTop: '10%',
    marginBottom: 10,
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
    height: 50,
    margin: 10,
    paddingLeft: 10,
    borderWidth: 1,
    borderRadius: 10,
    // fontWeight: '300',
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
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
    marginTop: '2%',
    width: '50%',
    height: 45,
    borderRadius: 10,
    backgroundColor: '#5FAD41',
    padding: 5,
  },
  text_login: {
    color: '#FFFFFF',
    fontSize: 16,
    height: 30,
    fontFamily: 'Poppins-Medium',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text_forgot: {
    paddingTop: 25,
    fontSize: 12,
    fontFamily: 'Poppins-MediumItalic',
  },
  chosemethod: {
    paddingTop: 15,
    fontSize: 15,
    color: '#5FAD41',
    fontFamily: 'Poppins-Medium',
  },
});
