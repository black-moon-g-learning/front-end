import React, {useEffect} from 'react';
import {
  Animated,
  Easing,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
export const ItemPopular = ({navigation, item}) => {
  let scaleValue = new Animated.Value(0);
  scaleValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [1, 1.1, 1.2],
  });
  useEffect(() => {
    scaleValue.setValue(0);
    Animated.timing(scaleValue, {
      toValue: 1,
      duration: 1500,
      easing: Easing.linear(),
      useNativeDriver: false,
    }).start();
  });
  return (
    <ScrollView style={styles.itempopular_container}>
      <TouchableOpacity
        style={styles.itempoopular_item}
        onPress={() => navigation.navigate('TopicCountry', {item})}>
        <Animated.Image
          resizeMode="contain"
          style={[styles.itempopular_image]}
          source={{uri: item.image}}
        />
        <Text style={styles.itempopular_country}>{item.name}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export const ItemCountries = ({navigation, item}) => {
  // let scaleValue = new Animated.Value(0);
  // const cardScale = scaleValue.interpolate({
  //   inputRange: [0, 0.5, 1],
  //   outputRange: [1, 1.1, 1.2],
  // });

  // useEffect(() => {
  //   scaleValue.setValue(0);
  //   Animated.timing(scaleValue, {
  //     toValue: 1,
  //     duration: 2000,
  //     easing: Easing.linear(),
  //     useNativeDriver: false,
  //   }).start();
  // });
  return (
    <SafeAreaView>
      <TouchableOpacity
        style={styles.itemcountries_item}
        onPress={() => navigation.navigate('TopicCountry', {item})}>
        <Animated.Image
          style={[styles.itemcountries_image]}
          source={{uri: item.image}}
        />
        <Text style={styles.itemcountries_country}>{item.name}</Text>
      </TouchableOpacity>
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
    paddingBottom: 7,
  },
  // itemcountries_container: {width: '90%', height: 190},
  itempoopular_item: {
    width: (width * 2.88) / 6,
    height: 120,
    textAlign: 'center',
    alignContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: 10,
  },
  itempopular_image: {
    width: '85%',
    height: 90,
    borderRadius: 10,
  },
  itempopular_country: {
    paddingTop: 5,
    color: '#000000',
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
  },

  itemcountries_item: {
    width: (width * 2.5) / 6,
    height: 160,
    textAlign: 'center',
    alignContent: 'center',
    paddingTop: 15,
    paddingBottom: 18,
    paddingRight: 3,
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#93D94E',
    borderRadius: 10,
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
