import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ModalSearch = ({item, onPress}) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress} style={styles.modal}>
        <Icon name="search" size={20} color={'red'} />
        <Text style={styles.textSearch}>{item.name}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  modal: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    justifyContent: 'space-around',
    paddingLeft: -10,
  },

  textSearch: {
    color: '#323643',
    fontSize: 17,
    fontFamily: 'Poppins-Medium',
    marginLeft: -60,
  },
});

export default ModalSearch;
