import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export const FailHeader = ({score}) => {
  return (
    <View style={styles.header}>
      <View style={styles.scorebgd}>
        <Text style={styles.score}>{score}</Text>
      </View>
      <Image source={require('../../assets/images/G-GAME.png')} />
    </View>
  );
};

export const GroupBtn = ({item, restartQuiz}) => {
  const navigation = useNavigation();
  const handleRestart = () => {
    restartQuiz();
    navigation.navigate('DisplayQuestions', item);
  };
  return (
    <View style={styles.btnGroup}>
      <TouchableOpacity style={styles.btn}>
        <Text
          style={[styles.btnTxt, {color: '#008000'}]}
          onPress={() => handleRestart()}>
          Play Again
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.btn, {backgroundColor: '#FFC845'}]}
        onPress={() => navigation.navigate('GameLevels', {item})}>
        <Text style={styles.btnTxt}>Menu</Text>
      </TouchableOpacity>
    </View>
  );
};

export const FinalResult = ({totalCorrectAns, totalQuestion}) => {
  return (
    <View style={styles.finalResult}>
      <Text style={styles.txtResult}>
        Your answer: {totalCorrectAns}/{totalQuestion}
      </Text>
    </View>
  );
};
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
  header: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  btnGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 10,
    marginVertical: '5%',
  },
  btn: {
    width: 110,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#5FAD41',
  },
  btnTxt: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    textAlign: 'center',
    color: '#000000',
    padding: 5,
  },
  finalResult: {
    width: '90%',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 10,
    marginHorizontal: '5%',
    marginVertical: '8%',
  },
  txtResult: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '500',
    lineHeight: 20,
    color: '#000000',
  },
});
