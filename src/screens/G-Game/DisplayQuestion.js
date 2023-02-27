import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const DisplayQuestion = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../../assets/images/G-GAME.png')} />
      </View>
      <View style={styles.Timer}>
        <View style={styles.countTime} />
        <Image
          style={styles.clock}
          source={require('../../assets/images/clock.png')}
        />
      </View>
      <View style={styles.questionContainer}>
        <View style={styles.characterCon}>
          <Image
            style={styles.character}
            source={require('../../assets/images/nomarl.png')}
          />
        </View>
        <View style={styles.countQues}>
          <Text style={styles.countTxt}>Question 1/15</Text>
        </View>
        <View style={styles.quesCon}>
          <Text style={styles.question} numberOfLines={4}>
            What is the curent population of Việt Nam?
          </Text>
        </View>
        <View style={styles.ansContainer}>
          <View style={styles.ans}>
            <Text style={styles.option}>A</Text>
            <Text style={styles.answer}>98,186 million people</Text>
          </View>
          <View style={styles.ans}>
            <Text style={styles.option}>A</Text>
            <Text style={styles.answer}>98,186 million people</Text>
          </View>
          <View style={styles.ans}>
            <Text style={styles.option}>A</Text>
            <Text style={styles.answer}>98,186 million people</Text>
          </View>
          <View style={styles.ans}>
            <Text style={styles.option}>A</Text>
            <Text style={styles.answer}>98,186 million people</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.txtBtn}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DisplayQuestion;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
    flex: 1,
    alignItems: 'center',
  },
  questionContainer: {
    backgroundColor: '#5FAD41',
    borderRadius: 20,
    width: '90%',
    marginTop: 50,
    alignItems: 'center',
    position: 'relative',
  },
  countQues: {
    backgroundColor: '#FFFFFF',
    width: '90%',
    height: 40,
    borderRadius: 10,
    marginTop: 60,
  },
  countTxt: {
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    fontWeight: '500',
    lineHeight: 20,
    textAlign: 'center',
    padding: 13,
    color: '#000000',
  },
  quesCon: {
    padding: 10,
  },
  question: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 20,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  ansContainer: {
    width: '90%',
  },
  ans: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderRadius: 100,
    margin: 10,
  },
  option: {
    color: '#000000',
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 20,
    fontFamily: 'Poppins-Bold',
    padding: 15,
    backgroundColor: '#EFD207',
    borderRadius: 100,
    width: 50,
    height: 50,
    textAlign: 'center',
  },
  answer: {
    color: '#323643',
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'Poppins-Bold',
    padding: 10,
    paddingLeft: '10%',
  },
  Timer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15,
    width: '95%',
    backgroundColor: '#5FAD41',
    borderRadius: 20,
    borderColor: '#5FAD41',
    borderWidth: 1,
    borderBottomWidth: 1,
    paddingRight: 10,
  },
  countTime: {
    width: '90%',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 15,
  },
  clock: {
    width: 27,
    height: 27,
  },
  characterCon: {
    position: 'absolute',
    top: -60,
    backgroundColor: '#5FAD41',
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  character: {
    width: 87,
    height: 112,
  },
  btn: {
    width: 94,
    height: 32,
    borderRadius: 10,
    backgroundColor: '#FFC845',
    margin: 10,
  },
  txtBtn: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 20,
    fontFamily: 'Poppins-Bold',
    color: '#000000',
    textAlign: 'center',
    paddingTop: 5,
  },
});
