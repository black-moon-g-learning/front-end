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
  return (
    <View style={styles.container}>
      <View style={styles.resultContainer}>
        <View style={styles.result}>
          <Text style={styles.failTxt}>congratulation</Text>
        </View>
        <View style={styles.failIconCon}>
          <Image
            style={styles.failIcon}
            source={{
              uri: 'https://2.bp.blogspot.com/-126-SB_EZwQ/WDZvUU8HKDI/AAAAAAAELHE/gSZ66Ccbho8b0edAwL3QSPTrRe7XUSr-ACLcB/s1600/AS000576_03.gif',
            }}
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  resultContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#ffff',
    borderRadius: 20,
    width: '90%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,

    elevation: 4,
    paddingBottom: 10,
  },
  result: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  failIconCon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  failIcon: {
    width: 200,
    height: 186,
  },
  failTxt: {
    fontFamily: 'Poppins-Bold',
    fontSize: 30,
    fontWeight: '500',
    lineHeight: 20,
    color: '#FFC845',
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  failImg: {
    width: 101,
    height: 129,
  },
});
