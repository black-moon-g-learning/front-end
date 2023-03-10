import React from 'react';
import {Image, StyleSheet, Text, View, LogBox} from 'react-native';
import {
  FailHeader,
  FinalResult,
  GroupBtn,
} from '../../components/G-Game/FailHeader';

const FailPage = ({route}) => {
  LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
  ]);
  const {item, score, totalQuestion, totalCorrectAns, restartQuiz} =
    route.params;
  return (
    <View style={styles.container}>
      <FailHeader score={score} />
      <View style={styles.resultContainer}>
        <View style={styles.result}>
          <Image
            style={styles.failImg}
            source={require('../../assets/images/nomarl.png')}
          />
          <Text style={styles.failTxt}>Failed</Text>
        </View>
        <View style={styles.failIconCon}>
          <Image
            style={styles.failIcon}
            source={require('../../assets/images/fail.png')}
          />
        </View>
        <FinalResult
          totalQuestion={totalQuestion}
          totalCorrectAns={totalCorrectAns}
        />
        <GroupBtn item={item} restartQuiz={restartQuiz} />
      </View>
    </View>
  );
};

export default FailPage;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
  },
  resultContainer: {
    backgroundColor: '#5FAD41',
    borderRadius: 20,
    width: '100%',
  },
  result: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  failIconCon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  failIcon: {
    width: 145,
    height: 145,
  },
  failTxt: {
    fontFamily: 'Poppins-Bold',
    fontSize: 40,
    fontWeight: '500',
    lineHeight: 20,
    color: '#FFFFFF',
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  failImg: {
    width: 101,
    height: 129,
  },
});
