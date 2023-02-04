import {
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
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
      <TextInput style={styles.searchBar} placeholder="Search..." />
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
  searchBar: {
    width: 320,
    height: 42,
    padding: 10,
    borderWidth: 1,
    borderColor: '#FFBF1C',
    borderRadius: 10,
    backgroundColor: '#F4F1F1',
  },
  character: {
    width: 40.38,
    height: 45,
  },
});
