import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const TopicTitle = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Topics</Text>
      <View style={styles.undertxt} />
    </View>
  );
};

export default TopicTitle;

const styles = StyleSheet.create({
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
    marginBottom: 15,
  },
});
