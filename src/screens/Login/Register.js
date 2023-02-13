import React from 'react';
import {StyleSheet, View} from 'react-native';
import RegisterForm from '../../components/Login/FormRegister';
import {HeaderRegister} from '../../components/Login/Header';
import LoginSocial from '../../components/Login/LoginSocial';

const Register = () => {
  return (
    <View>
      <HeaderRegister />
      <RegisterForm />
      <LoginSocial />
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({});
