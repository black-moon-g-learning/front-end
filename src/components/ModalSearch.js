import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ModalSearch = ({item, onPress}) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress} style={styles.modal}>
        {item === null && <Text style={styles.title}>Khong co Ket qua</Text>}
        <Icon name="search" size={20} color={'black'} />
        <Text style={styles.textSearch}>{item.name}</Text>
        <Image style={styles.flag} source={{uri: item.image}} />
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
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 25,
  },

  textSearch: {
    color: '#323643',
    fontSize: 17,
    fontFamily: 'Poppins-Medium',
    width: '60%',
  },
  flag: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
});

export default ModalSearch;
