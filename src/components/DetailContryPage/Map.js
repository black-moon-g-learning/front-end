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
    paddingTop: 6,
    color: '#323643',
    fontWeight: '600',
    fontSize: 24,
    lineHeight: 20,
    width: '20%',
  },
  undertxt: {
    backgroundColor: '#5FAD41',
    width: '20%',
    height: 2,
    margin: 3,
    // marginBottom: 5,
  },
  maparea: {
    padding: 10,
  },
  mapView: {
    width: '100%',
    height: 230,
    padding: 10,
    marginTop: 30,
  },
});