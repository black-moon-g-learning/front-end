import React from 'react';
import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
const Header = ({value, onChangeText}) => {
  return (
    <View style={styles.container_header}>
      <TouchableOpacity>
        <Image
          style={styles.character}
          source={require('../assets/images/character.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.searchBar}>
        <TextInput
          onChangeText={onChangeText}
          value={value}
          style={styles.input}
          placeholder="Search..."
        />
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
    width: '70%',
    height: 40,
    borderRadius: 10,
    paddingLeft: 10,
  },
  searchBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 46,
    padding: 10,
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 20,
  },
  character: {
    width: 40.38,
    height: 45,
  },
});
