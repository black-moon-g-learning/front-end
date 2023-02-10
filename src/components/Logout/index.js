import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const Logout = () => {
  const navigation = useNavigation();

  const signOutUser = async () => {
    try {
      await auth()
        .signOut()
        .then(() => navigation.navigate('login'));
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <TouchableOpacity onPress={signOutUser}>
      <Text>Logout</Text>
    </TouchableOpacity>
  );
};

export default Logout;

const styles = StyleSheet.create({});
