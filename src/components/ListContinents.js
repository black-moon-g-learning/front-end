import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';

const ListContinents = ({item}) => {
  return (
    <TouchableOpacity style={styles.item}>
      <Image style={styles.img} source={{uri: item.img}} />
      <View>
        <Text style={styles.ContinentsName}>{item.continents_name}</Text>
        <Text style={styles.ContinentsDetail}>
          {item.numberOfCountry} countries and {item.regions} regions
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListContinents;

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    height: 120,
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#5FAD41',
    marginBottom: 10,
    alignItems: 'center',
  },
  img: {
    margin: 20,
    width: 100,
    height: 100,
    paddingRight: 10,
  },
  ContinentsName: {
    fontSize: 20,
    color: '#323643',
    // fontWeight: 500,
  },
  ContinentsDetail: {
    fontSize: 13,
    color: '#323643',
    paddingTop: 5,
  },
});
