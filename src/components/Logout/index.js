import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/FontAwesome';

const Logout = () => {
  const navigation = useNavigation();

  const signOutUser = async () => {
    await AsyncStorage.removeItem('@Token');
    try {
      await auth()
        .signOut()
        .then(() =>
          navigation.reset({
            index: 0,
            routes: [{name: 'login'}],
          }),
        );
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('History')}
        style={styles.btn_logout}>
        <Icons name="history" size={25} style={styles.icon} />
        <Text style={styles.text_logout}>History</Text>
        <Icons name="angle-right" size={30} />
      </TouchableOpacity>
      <TouchableOpacity onPress={signOutUser} style={styles.btn_logout}>
        <Icon
          name="logout"
          size={25}
          onPress={() => navigation.goBack('login')}
          style={styles.icon}
        />
        <Text style={styles.text_logout}>Logout</Text>
        <Icons name="angle-right" size={30} />
      </TouchableOpacity>
    </View>
  );
};

export default Logout;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '5%',
  },
  btn_logout: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    height: 35,
    width: '100%',
    paddingLeft: '3%',
    paddingRight: '6%',
    alignItems: 'center',
    alignSelf: 'center',
  },
  icon: {
    marginLeft: 20,
  },
  text_logout: {
    marginLeft: '10%',
    fontFamily: 'Poppins-Medium',
    fontSize: 15,
    color: 'black',
  },
});
