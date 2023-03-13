import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Animated, Easing, Image, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const HeaderLogin = () => {
  const rotateValue = new Animated.Value(0);
  const RotateImage = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  useEffect(() => {
    rotateValue.setValue(0);
    Animated.loop(
      Animated.timing(rotateValue, {
        toValue: 1,
        duration: 5000,
        easing: Easing.linear(),
        useNativeDriver: false,
      }),
    ).start();
  });

  return (
    <View style={styles.container_header_login}>
      <View style={styles.logo_form}>
        <Animated.Image
          style={[styles.image_login, {transform: [{rotate: RotateImage}]}]}
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
      <View>
        <Icon
          name="arrow-left"
          size={30}
          color={'#FFFFFF'}
          onPress={() => navigation.goBack('login')}
          style={styles.icon}
        />
        <View style={styles.logo_form}>
          <Image
            style={styles.image_login}
            source={require('../../assets/images/img-signup.png')}
          />
        </View>
      </View>
      <View style={styles.text}>
        <Text style={styles.text_big}>Hi Student</Text>
        <Text style={styles.text_title}>Register to continue</Text>
      </View>
    </View>
  );
};

export {HeaderLogin, HeaderRegister};

const styles = StyleSheet.create({
  container_header_login: {
    width: '100%',
    backgroundColor: '#5FAD41',
    height: 270,
  },
  icon: {
    position: 'absolute',
    padding: 10,
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
    fontSize: 28,
    color: '#FFFFFF',
    paddingLeft: 30,

    fontFamily: 'Poppins-Medium',
  },
  text_title: {
    fontSize: 18,
    fontWeight: '400',
    color: '#C1DFB5',
    paddingLeft: 30,
    fontFamily: 'Poppins-Regular',
  },
});
