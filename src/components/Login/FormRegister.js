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
        <TextInput
          style={styles.input_login}
          placeholder="Enter password"
          secureTextEntry={true}
        />
        <TextInput
          style={styles.input_login}
          placeholder="Comfirm password"
          secureTextEntry={true}
        />
      </View>
      <View style={styles.button}>
        <TouchableOpacity style={styles.button_login}>
          <Text style={styles.text_login}>REGISTER</Text>
        </TouchableOpacity>
        <Text style={styles.chosemethod}>------- Or -------</Text>
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
    height: 45,
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
    paddingTop: 5,
  },
  text_login: {
    color: '#FFFFFF',
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
  },
  text_forgot: {
    padding: 10,
    fontSize: 16,
  },
  chosemethod: {
    paddingTop: 15,
    fontSize: 18,
    color: '#323643',
    fontFamily: 'Poppins',
  },
});
