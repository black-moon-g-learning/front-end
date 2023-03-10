import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
const GameHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>G-GAME</Text>
    </View>
  );
};

export default GameHeader;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  title: {
    color: '#FFFFFF',
    fontFamily: 'Poppins-Bold',
    fontSize: 30,
    lineHeight: 20,
    fontWeight: '700',
    textAlign: 'center',
    padding: 30,
  },
});
