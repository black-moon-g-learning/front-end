import React from 'react';
import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import Header from '../Header';

const Searchbar = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container_header}>
      <Header />
      <TouchableOpacity
        style={styles.Icon}
        onPress={() => navigation.navigate('Contribution')}>
        <Icon name="pluscircle" size={40} color="#FFBF1C" />
      </TouchableOpacity>
    </View>
  );
};

export default Searchbar;

const styles = StyleSheet.create({
  container_header: {
    width: '90%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  Icon: {
    paddingLeft: 10,
  },
});
