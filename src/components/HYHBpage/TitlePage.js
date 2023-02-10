import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const TitlePage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Have You Heard Before?</Text>
    </View>
  );
};

export default TitlePage;

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    padding: 20,
    color: '#000000',
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 20,
  },
});
