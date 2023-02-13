import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const RegisterForm = () => {
  return (
    <TouchableOpacity style={styles.container_form}>
      <View style={styles.textInput}>
        <TextInput style={styles.input_login} placeholder="Enter your name" />
        <TextInput style={styles.input_login} placeholder="Enter your number" />
        <TextInput style={styles.input_login} placeholder="Enter password" />
        <TextInput style={styles.input_login} placeholder="Comfirm password" />
      </View>
      <View style={styles.button}>
        <TouchableOpacity style={styles.button_login}>
          <Text style={styles.text_login}>REGISTER</Text>
        </TouchableOpacity>
        <Text style={styles.chosemethod}>------- or ------ </Text>
      </View>
    </TouchableOpacity>
  );
};

export default RegisterForm;

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
    fontFamily: 'Poppins',
  },
  text_forgot: {
    padding: 10,
    fontSize: 16,
  },
  chosemethod: {
    padding: 5,
    fontSize: 22,
    color: '#323643',
  },
});
