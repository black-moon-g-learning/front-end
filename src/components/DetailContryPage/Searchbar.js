import React from 'react';
import {
  Image,
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
const Searchbar = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={require('../../assets/images/character.png')}
      />
      <View style={styles.searchbar}>
        <TextInput style={styles.txt} />
        <TouchableOpacity>
          <Icon name="search" size={24} color="#323643" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Searchbar;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  searchbar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '70%',
    height: 44,
    backgroundColor: '#F4F4F4',
    borderRadius: 16,
    borderColor: '#000000',
    borderWidth: 1,
    padding: 10,
  },
  txt: {
    width: '70%',
    height: 44,
  },
  img: {
    width: 51,
    height: 63,
  },
  searchIcon: {
    display: 'flex',
    left: 0,
  },
});
