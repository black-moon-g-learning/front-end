import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Learnpercent from './Learnpercent';
const ListContinents = ({item}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.flatItem}
      onPress={() => navigation.navigate('Country', {item})}>
      <View style={styles.item}>
        <Image style={styles.img} source={{uri: item.image}} />
        <View>
          <Text style={styles.ContinentsName}>{item.name}</Text>
          <Text style={styles.ContinentsDetail}>
            {item.countries} countries and {item.regions} regions
          </Text>
        </View>
      </View>
      <Learnpercent />
    </TouchableOpacity>
  );
};

export default ListContinents;

const styles = StyleSheet.create({
  flatItem: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    height: 120,
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#5FAD41',
    marginBottom: 10,
    justifyContent: 'space-between',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
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
  },
  ContinentsDetail: {
    fontSize: 13,
    color: '#323643',
    paddingTop: 5,
  },
});