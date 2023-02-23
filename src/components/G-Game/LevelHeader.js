import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const LevelHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>G-GAME</Text>
      <Image
        style={styles.img}
        source={require('../../assets/images/score.png')}
      />
    </View>
  );
};

export default LevelHeader;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '95%',
  },
  title: {
    color: '#000000',
    fontWeight: '700',
    lineHeight: 20,
    fontSize: 24,
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
    padding: 10,
    marginLeft: '10%',
  },
  img: {
    width: 57,
    height: 54,
    margin: 5,
    left: 0,
  },
});
