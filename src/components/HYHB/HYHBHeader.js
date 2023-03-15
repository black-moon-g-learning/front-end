import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

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
    flexDirection: 'row',
    marginBottom: 5,
  },
  title: {
    textAlign: 'center',
    color: '#000000',
    fontSize: 24,
    lineHeight: 20,
    paddingTop: 20,
    fontFamily: 'Poppins-Bold',
  },
});
