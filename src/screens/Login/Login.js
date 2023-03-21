import React from 'react';

import {useNavigation} from '@react-navigation/native';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import LoginForm from '../../components/Login/Form';
import {HeaderLogin} from '../../components/Login/Header';
import LoginSocial from '../../components/Login/LoginSocial';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
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
      <View style={styles.containerHeader}>
        <HeaderLogin />
      </View>
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
    width: width,
    height: height,
    backgroundColor: '#5FAD41',
  },
  containerHeader: {
    height: (height * 2) / 6,
  },
  container: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  containerForm: {
    width: width,
    backgroundColor: '#F3F4F9',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: (height * 4) / 6,
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
    display: 'flex',
    flexDirection: 'row',
    width: width,
    height: (height * 0.5) / 6,
  },
  text: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#323643',
    marginRight: 10,
  },
  text_color: {fontSize: 16, fontFamily: 'Poppins-Regular', color: '#5FAD41'},
});
