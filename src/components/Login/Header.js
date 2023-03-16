import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {
  Animated,
  Easing,
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

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
        duration: 7000,
        easing: Easing.linear(),
        useNativeDriver: false,
      }),
    ).start();
  });

  return (
    <View style={styles.container_header_login}>
      <View style={styles.logo_formContainer}>
        <View style={styles.logo_form}>
          <Animated.Image
            style={[styles.image_login, {transform: [{rotate: RotateImage}]}]}
            source={require('../../assets/images/img-signup.png')}
            resizeMode="contain"
          />
        </View>
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
    width: windowWidth,
    backgroundColor: '#5FAD41',
    height: windowHeight,
  },
  icon: {
    position: 'absolute',
    padding: 10,
  },
  logo_formContainer: {
    width: windowWidth,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginTop: '7%',
  },
  logo_form: {
    width: (windowWidth * 2.5) / 6,
    height: 120,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingTop: 20,
    paddingRight: 20,
    paddingBottom: 0,
  },
  image_login: {
    width: '100%',
    height: 130,
  },
  text_big: {
    fontSize: 27,
    color: '#FFFFFF',
    paddingLeft: 30,
    marginTop: -15,
    fontFamily: 'Poppins-Medium',
  },
  text_title: {
    fontSize: 16,
    fontWeight: '400',
    color: '#C1DFB5',
    paddingLeft: 30,
    paddingBottom: 10,

    fontFamily: 'Poppins-Regular',
  },
});
