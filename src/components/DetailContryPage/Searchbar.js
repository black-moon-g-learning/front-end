import {
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const Searchbar = () => {
  return (
    <View style={styles.container_header}>
      <TouchableOpacity>
        <Image
          style={styles.character}
          source={require('../../assets/images/character.png')}
        />
      </TouchableOpacity>
      <TextInput style={styles.searchBar} placeholder="Search..." />
      <Icon name="arrow-left" size={28} />
    </View>
  );
};

export default Searchbar;

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
