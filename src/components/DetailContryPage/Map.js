import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Mapitem from './MapItem';
const Map = () => {
  return (
    <View style={styles.maparea}>
      <View style={styles.mapcontainer}>
        <Text style={styles.title}>Map</Text>
        <View style={styles.undertxt} />
      </View>
      <View style={styles.mapView}>
        <Mapitem />
      </View>
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({
  mapcontainer: {marginBottom: 40},
  title: {
    color: '#323643',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 22,
  },
  undertxt: {
    backgroundColor: '#5FAD41',
    width: '20%',
    height: 2,
    margin: 3,
  },

  mapView: {
    width: '100%',
    height: 200,
    marginTop: 30,
  },
});
