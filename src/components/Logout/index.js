import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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
    <View style={styles.container}>
      <TouchableOpacity onPress={signOutUser} style={styles.btn_logout}>
        <Icon
          name="bell-ring-outline"
          size={30}
          // color={'#FFFFFF'}
          onPress={() => navigation.goBack('login')}
          style={styles.icon}
        />
        <Text style={styles.text_logout}>Help & Support</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={signOutUser} style={styles.btn_logout}>
        <Icon
          name="logout"
          size={30}
          // color={'#FFFFFF'}
          onPress={() => navigation.goBack('login')}
          style={styles.icon}
        />
        <Text style={styles.text_logout}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Logout;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn_logout: {
    flexDirection: 'row',
    width: '98%',
    height: 50,
    borderBottomWidth: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  icon: {
    marginLeft: 20,
  },
  text_logout: {
    paddingLeft: 30,
  },
});
