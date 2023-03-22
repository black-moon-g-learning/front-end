import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
const width = Dimensions.get('window').width;

const HYHBHeader = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Have You Heard Before?</Text>
    </View>
  );
};

export default HYHBHeader;

const styles = StyleSheet.create({
  header: {
    marginBottom: 5,
    textAlign: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    width: (width * 2.55) / 3,
    marginLeft: '-7%',
  },
  title: {
    textAlign: 'center',
    color: '#000000',
    fontSize: 20,
    lineHeight: 20,
    paddingTop: 20,
    fontFamily: 'Poppins-Bold',
    width: '100%',
  },
});
