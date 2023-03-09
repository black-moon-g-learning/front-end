import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const LevelHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>G-GAME</Text>
      <View>
        <Image source={require('../../assets/images/reward.png')} />
      </View>
    </View>
  );
};

export default LevelHeader;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
  },
  title: {
    marginLeft: '15%',
    color: '#000000',
    fontWeight: '700',
    lineHeight: 20,
    fontSize: 26,
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
    paddingTop: 15,
  },
  scorebgd: {
    backgroundColor: '#FFD500',
    borderRadius: 100,
    width: 60,
    height: 60,
  },
});
