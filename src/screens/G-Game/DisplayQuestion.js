import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const DisplayQuestion = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.title}
          source={require('../../assets/images/G-GAME.png')}
        />
        <View style={styles.scorebgd}>
          <Text style={styles.score}>100</Text>
        </View>
      </View>
      <View style={styles.questionContainer}>
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
      </View>
    </View>
  );
};

export default DisplayQuestion;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    alignItems: 'center',
  },
  title: {
    left: 25,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scorebgd: {
    backgroundColor: '#FFD500',
    borderRadius: 100,
    width: 70,
    height: 70,
    right: -70,
  },
  score: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 20,
    fontFamily: 'Poppins-Bold',
    color: '#000000',
    paddingTop: 30,
  },
  questionContainer: {
    backgroundColor: '#5FAD41',
    borderRadius: 10,
    width: '90%',
    marginTop: 10,
    //flex: 0.9,
    alignItems: 'center',
  },
  countQues: {
    backgroundColor: '#FFFFFF',
    width: '90%',
    height: 40,
    borderRadius: 10,
    marginTop: 20,
  },
  countTxt: {
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    fontWeight: '500',
    lineHeight: 20,
    textAlign: 'center',
    padding: 13,
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
    marginBottom: 10,
  },
  ans: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderTopLeftRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 30,
    borderTopRightRadius: 30,
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
});
