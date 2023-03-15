import React, {useEffect} from 'react';
import {
  Animated,
  Easing,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
export const ItemPopular = ({navigation, item}) => {
  const rotateValue = new Animated.Value(0);
  const RotateImage = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  useEffect(() => {
    rotateValue.setValue(0);
    Animated.loop(
      Animated.timing(rotateValue, {
        toValue: 1,
        duration: 7000,
        easing: Easing.linear(),
        useNativeDriver: false,
      }),
    ).start();
  });
  return (
    <ScrollView style={styles.itempopular_container}>
      <TouchableOpacity
        style={styles.itempoopular_item}
        onPress={() => navigation.navigate('TopicCountry', {item})}>
        <Animated.Image
          resizeMode="contain"
          style={styles.itempopular_image}
          source={{uri: item.image}}
        />
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
    // paddingTop: 7,
    width: 170,
    paddingBottom: 7,
    // height: 195,
  },
  // itemcountries_container: {width: '90%', height: 190},
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
    // width: 170,
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
