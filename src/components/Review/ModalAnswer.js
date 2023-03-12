import React from 'react';
import {Image, LogBox, StyleSheet, Text, View} from 'react-native';
import {FinalResult, ReviewBtn} from '../G-Game/FailHeader';

const ModalAnswer = ({
  onClose,
  totalQuestion,
  totalCorrectAns,
  item,
  videos,
}) => {
  LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
  ]);
  // const {item, totalQuestion, totalCorrectAns} = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.resultContainer}>
        <View style={styles.result}>
          <Image
            style={styles.failImg}
            source={require('../../assets/images/nomarl.png')}
          />
          <Text style={styles.failTxt}>Good</Text>
        </View>
        <View style={styles.failIconCon}>
          <Image
            style={styles.failIcon}
            source={require('../../assets/images/good.png')}
          />
        </View>
        <FinalResult
          totalQuestion={totalQuestion}
          totalCorrectAns={totalCorrectAns}
        />
        <ReviewBtn
          onClose={onClose}
          videos={videos}
          item={item}
          totalQuestion={totalQuestion}
          totalCorrectAns={totalCorrectAns}
        />
      </View>
    </View>
  );
};

export default ModalAnswer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    justifyContent: 'center',
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
    width: 122,
    height: 186,
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
