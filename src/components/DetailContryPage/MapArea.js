import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Searchbar from './Searchbar';
const MapArea = () => {
  return (
    <View style={styles.maparea}>
      <View>
        <Text style={styles.title}>Map</Text>
        <View style={styles.undertxt} />
      </View>
      <Searchbar />
      <View style={styles.mapView}></View>
    </View>
  );
};

export default MapArea;

const styles = StyleSheet.create({
  title: {
    paddingTop: 10,
    color: '#323643',
    fontWeight: '600',
    fontSize: 24,
    lineHeight: 20,
  },
  undertxt: {
    backgroundColor: '#5FAD41',
    width: '20%',
    height: 2,
    margin: 3,
  },
  maparea: {
    padding: 10,
  },
  mapView: {
    backgroundColor: '#5FAD41',
    width: '100%',
    height: 195,
    padding: 10,
  },
});
