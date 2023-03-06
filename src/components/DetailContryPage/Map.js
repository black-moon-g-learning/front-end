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
  mapcontainer: {paddingLeft: 10, paddingBottom: 10},
  title: {
    color: '#323643',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
  },
  undertxt: {
    backgroundColor: '#5FAD41',
    width: '20%',
    height: 2,
    margin: 3,
    marginBottom: 30,
  },

  mapView: {
    width: '100%',
    height: 300,
    marginTop: 20,
  },
  maparea: {
    // paddingTop: 50,
  },
});
