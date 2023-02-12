import {
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import React from 'react';
const Header = () => {
  return (
    <View style={styles.container_header}>
      <TouchableOpacity>
        <Image
          style={styles.character}
          source={require('../assets/images/character.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.searchBar}>
        <TextInput style={styles.input} placeholder="Search..." />
        <Icon name="search" size={25} color={'black'} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container_header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  input: {
    width: '75%',
    height: 40,
    borderRadius: 10,
    backgroundColor: '#F4F1F1',
    paddingLeft: 10,
  },
  searchBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // width: 320,
    height: 46,
    padding: 10,
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 20,
    // backgroundColor: '#F4F1F1',
  },
  character: {
    width: 40.38,
    height: 45,
  },
});
