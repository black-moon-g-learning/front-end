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
  header: {
    padding: 10,
  },
  title: {
    paddingTop: 10,
    color: '323643',
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
});
