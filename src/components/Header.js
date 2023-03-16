import React from 'react';
import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width * (13 / 18);

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width * (17 / 18);
const Header = ({value, onChangeText, onPress}) => {
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
        <TouchableOpacity onPress={onPress}>
          <Icon name="search" size={25} color={'black'} />
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container_header: {
    width: width,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  input: {
    width: '80%',
    height: 40,
    borderRadius: 10,
    // paddingLeft: 10,
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
    width: windowWidth,
  },
  character: {
    width: 30,
    height: 45,
  },
});
