import React from 'react';

import {useNavigation} from '@react-navigation/native';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LoginForm from '../../components/Login/Form';
import {HeaderLogin} from '../../components/Login/Header';
import LoginSocial from '../../components/Login/LoginSocial';

const Login = () => {
  const navigation = useNavigation();
  console.log('đang ở login');
  const ChooseRegister = () => {
    return (
      <View style={styles.container_register}>
        <Text style={styles.text}>Not a member ?</Text>
        <TouchableOpacity
          style={styles.registernow}
          onPress={() => navigation.navigate('Register')}>
          <Text style={styles.text_color}>Register now</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.containerLogin}>
      <HeaderLogin />
      <View style={styles.containerForm}>
        <LoginForm />
        <LoginSocial />
        <ChooseRegister />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  containerLogin: {
    backgroundColor: '#5FAD41',
  },
  container: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  containerForm: {
    width: '100%',
    backgroundColor: '#F3F4F9',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 5,
  },
  image_btn_login: {
    width: 50,
    height: 50,
  },
  btn_social: {
    alignItems: 'center',
    padding: 10,
  },
  container_register: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    padding: 20,
    display: 'flex',
    flexDirection: 'row',
  },
  text: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#323643',
    marginRight: 10,
  },
  text_color: {fontSize: 16, fontFamily: 'Poppins-Regular', color: '#5FAD41'},
  // text_color: {
  //   color: '#5FAD41',
  //   justifyContent: 'center',
  //   alignContent: 'center',
  //   alignItems: 'center',
  //   paddingLeft: 5,
  // },
});
