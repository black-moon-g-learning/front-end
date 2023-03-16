import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  View,
} from 'react-native';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
export const ListContinents = ({item}) => {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate('title', {item});
    navigation.navigate('Country', {item});
  };
  return (
    <TouchableOpacity style={styles.flatItem} onPress={handlePress}>
      <View style={styles.item}>
        <Image style={styles.img} source={{uri: item.image}} />
        <View>
          <Text style={styles.ContinentsName}>{item.name}</Text>
          <Text style={styles.ContinentsDetail}>
            {item.countries} countries and {item.regions} regions
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  flatItem: {
    width: (width * 5.6) / 6,
    display: 'flex',
    flexDirection: 'row',
    height: 110,
    marginTop: 5,
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
  learnpercent: {paddingRight: 10},
  img: {
    marginLeft: 10,
    marginRight: 13,
    width: 90,
    height: 90,
    borderRadius: 20,
    borderWidth: 1,
  },
  ContinentsName: {
    fontSize: 17,
    color: '#323643',
    fontFamily: 'Poppins-Medium',
  },
  ContinentsDetail: {
    fontSize: 12,
    color: '#323643',
    paddingTop: 5,
    fontFamily: 'Poppins-Regular',
    width: '100%',
  },
});
