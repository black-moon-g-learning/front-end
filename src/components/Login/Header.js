import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const HeaderLogin = () => {
  return (
    <View style={styles.container_header_login}>
      <View style={styles.logo_form}>
        <Image
          style={styles.image_login}
          source={require('../../assets/images/img-signup.png')}
        />
      </View>
      <View style={styles.text}>
        <Text style={styles.text_big}>Hi Student</Text>
        <Text style={styles.text_title}>Signin to continue</Text>
      </View>
    </View>
  );
};
const HeaderRegister = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container_header_login}>
      <Icon
        name="arrow-left"
        size={30}
        color={'#FFFFFF'}
        onPress={() => navigation.goBack('login')}
      />
      <View style={styles.logo_form}>
        <Image
          style={styles.image_login}
          source={require('../../assets/images/img-signup.png')}
        />
      </View>
      <View style={styles.text}>
        <Text style={styles.text_big}>Hi Student</Text>
        <Text style={styles.text_title}>Register to continue</Text>
      </View>
    </View>
  );
};

export {HeaderRegister, HeaderLogin};

const styles = StyleSheet.create({
  container_header_login: {
    width: '100%',
    backgroundColor: '#5FAD41',
    height: 270,
  },
  logo_form: {
    height: 150,
    alignItems: 'flex-end',
    paddingTop: 30,
    paddingRight: 40,
    paddingBottom: 0,
  },
  image_login: {
    width: '40%',
    height: 160,
  },
  text_big: {
    fontSize: 35,
    fontWeight: '700',
    color: '#FFFFFF',
    paddingLeft: 30,
  },
  text_title: {
    fontSize: 25,
    fontWeight: '400',
    color: '#FFFFFF61',
    paddingLeft: 30,
  },
});
