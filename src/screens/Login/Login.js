import React from 'react';

import {useNavigation} from '@react-navigation/native';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LoginForm from '../../components/Login/Form';
import {HeaderLogin} from '../../components/Login/Header';
import LoginSocial from '../../components/Login/LoginSocial';

const Login = () => {
  const navigation = useNavigation();
  const ChooseRegister = () => {
    return (
      <View style={styles.container_register}>
        <Text style={styles.text}>Not a member?</Text>
        <TouchableOpacity
          style={styles.registernow}
          onPress={() => navigation.navigate('Register')}>
          <Text style={styles.text_color}>Register now</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View>
      <HeaderLogin />
      <LoginForm />
      <LoginSocial />
      <ChooseRegister />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container_register: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    fontSize: 18,
  },
  text_color: {
    color: '#5FAD41',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    paddingLeft: 5,
  },
});
