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

const Searchbar = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container_header}>
      <TouchableOpacity>
        <Image
          style={styles.character}
          source={require('../../assets/images/character.png')}
        />
      </TouchableOpacity>
      <TextInput style={styles.searchBar} placeholder="Search..." />
      <TouchableOpacity onPress={() => navigation.navigate('Contribution')}>
        <Icon name="pluscircle" size={40} color="#FFBF1C" />
      </TouchableOpacity>
    </View>
  );
};

export default Searchbar;

const styles = StyleSheet.create({
  container_header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
  },
  searchBar: {
    width: 260,
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
