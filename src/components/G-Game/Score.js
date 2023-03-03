import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Score = () => {
  // const myScore = async () => {
  //   try {
  //     const finalScore = await AsyncStorage.getItem('score');
  //     console.log('my score', finalScore);
  //     return finalScore;
  //   } catch (error) {
  //     console.log('loi: ', error);
  //   }
  // };
  return (
    <View style={styles.scorebgd}>
      <Text style={styles.score}>0</Text>
    </View>
  );
};

export default Score;

const styles = StyleSheet.create({
  scorebgd: {
    marginLeft: '70%',
    backgroundColor: '#FFD500',
    borderRadius: 100,
    width: 60,
    height: 60,
    marginTop: 3,
  },
  score: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 20,
    fontFamily: 'Poppins-Bold',
    color: '#000000',
    paddingTop: 20,
  },
});
