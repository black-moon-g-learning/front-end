import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  View,
} from 'react-native';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export const FailHeader = ({score}) => {
  return (
    <View style={styles.headercontainer}>
      <View style={styles.header}>
        <Image
          style={styles.headerImg}
          source={require('../../assets/images/G-GAME.png')}
        />
        <View style={styles.scorebgd}>
          <Text style={styles.score}>{score}</Text>
        </View>
      </View>
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
          style={[styles.btnTxt, {color: '#000000'}]}
          onPress={() => handleRestart()}>
          Play Again
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.btn, {backgroundColor: '#FFC845'}]}
        onPress={() => navigation.navigate('GameLevels', {item})}>
        <Text style={styles.btnTxt}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};
export const ReviewBtn = ({item, videos, onClose}) => {
  console.log('o day nhan dc ko', item);
  const handlePlayVideo = () => {
    navigation.navigate('playvideo', {item, videos});
    navigation.replace('playvideo', {item, videos});
  };

  const handlePress = () => {
    onClose();
    handlePlayVideo();
  };
  const navigation = useNavigation();
  return (
    <View style={styles.btnGroup}>
      <TouchableOpacity
        style={[styles.btnReview]}
        onPress={() => handlePress()}>
        <Text style={styles.btnTxt}>BACK</Text>
      </TouchableOpacity>
    </View>
  );
};

export const FinalResult = ({totalCorrectAns, totalQuestion}) => {
  return (
    <View style={styles.finalResult}>
      <Text style={styles.txtResult}>Your answers:</Text>
      <Text style={styles.txtTitle}>
        {totalCorrectAns}/{totalQuestion}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  scorebgd: {
    // marginLeft: '70%',
    backgroundColor: '#FFD500',
    borderRadius: 100,
    width: 60,
    height: 60,
    marginTop: 3,
  },
  headerImg: {
    marginTop: '6%',
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
  headercontainer: {
    width: width,
    paddingLeft: '4%',
    paddingRight: '4%',
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    // alignItems: 'center',
    paddingVertical: 10,
    justifyContent: 'space-between',
    marginBottom: '8%',
  },
  btnGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 10,
    marginVertical: '5%',
  },
  btn: {
    width: 100,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#5FAD41',
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnReview: {
    backgroundColor: '#5FAD41',
    borderRadius: 30,
    paddingBottom: 10,
    paddingTop: 10,
    paddingLeft: 60,
    paddingRight: 60,
  },
  btnTxt: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    textAlign: 'center',
    color: '#000000',
    padding: 5,
  },
  txtResult: {
    fontFamily: 'Poppins-Mediium',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '500',
    lineHeight: 20,
    color: '#000000',
    padding: 5,
  },
  txtTitle: {
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '700',
    lineHeight: 20,
    color: 'red',
    padding: 5,
  },
  finalResult: {
    flexDirection: 'row',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
