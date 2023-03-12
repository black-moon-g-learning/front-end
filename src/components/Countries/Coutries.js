import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
export const ItemPopular = ({navigation, item}) => {
  return (
    <ScrollView style={styles.itempopular_container}>
      <TouchableOpacity
        style={styles.itempoopular_item}
        onPress={() => navigation.navigate('TopicCountry', {item})}>
        <Image style={styles.itempopular_image} source={{uri: item.image}} />
        <Text style={styles.itempopular_country}>{item.name}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export const ItemCountries = ({navigation, item}) => {
  return (
    <SafeAreaView>
      <ScrollView style={styles.itemcountries_container}>
        <TouchableOpacity
          style={styles.itemcountries_item}
          onPress={() => navigation.navigate('TopicCountry', {item})}>
          <Image
            style={styles.itemcountries_image}
            source={{uri: item.image}}
          />
          <Text style={styles.itemcountries_country}>{item.name}</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000009',
  },
  itempopular_container: {
    paddingTop: 7,
    width: 170,
    height: 195,
  },
  itemcountries_container: {width: '90%', height: 190, flex: 1},
  itempoopular_item: {
    paddingTop: 5,
    textAlign: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itempopular_image: {
    width: 150,
    height: 90,
    borderRadius: 10,
  },
  itempopular_country: {
    width: 170,
    paddingTop: 5,
    color: '#000000',
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
  },

  itemcountries_item: {
    width: 170,
    height: 160,
    textAlign: 'center',
    alignContent: 'center',
    paddingTop: 15,
    paddingBottom: 18,
    paddingLeft: 3,
    paddingRight: 3,
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#93D94E',
    borderRadius: 20,
    margin: 10,
  },
  itemcountries_image: {
    width: '85%',
    height: '75%',
    borderRadius: 10,
  },
  itemcountries_country: {
    fontSize: 15,
    color: '#323643',
    fontFamily: 'Poppins-Regular',
  },
});
