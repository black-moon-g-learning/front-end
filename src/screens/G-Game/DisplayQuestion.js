import AsyncStorage from '@react-native-async-storage/async-storage';
import {useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Animated,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {FailHeader} from '../../components/G-Game/FailHeader';
import ListAnswer from '../../components/G-Game/ListAnswer';
import QuestionContainer from '../../components/G-Game/QuestionContainer';
import UseGetdata from '../../hooks/UseContinents';

const DisplayQuestion = () => {
  const route = useRoute();
  const item = route.params;
  const API = `countries/${item.id}/questions`;
  const {data, isLoading, isSuccess} = UseGetdata(API);
  const [index, setIndex] = useState(0);
  const question = isSuccess ? data.data[index] : null;
  const totalQuestion = isSuccess ? data.data.length : null;
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [viewWidth, setViewWidth] = useState(new Animated.Value(300));
  const [timeLeft, setTimeLeft] = useState(15);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft - 1);
        Animated.timing(viewWidth, {
          toValue: viewWidth._value - 20, // giảm độ dài view đi 2 đơn vị mỗi giây
          duration: 1000,
          useNativeDriver: false,
        }).start();
      } else {
        clearInterval(intervalId);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  //Increase the index of the question
  const handleQuestion = () => {
    setIndex(index + 1);
  };
  //Save the Score to Async storage
  // const saveScore = async finalScore => {
  //   try {
  //     await AsyncStorage.setItem('score', finalScore.toString());
  //     console.log('Score saved successfully!');
  //   } catch (error) {
  //     console.log('loi', error);
  //   }
  // };
  //Handle the correct answer
  const handleSelectOption = answer => {
    setSelectedAnswer(answer.content);
    setSelectedAnswerIndex(answer.id);
    if (answer.is_correct === 1) {
      setCorrectAnswer(answer.id);
      setScore(score + 100);
      // saveScore(score);
    }
  };
  //Change the style of selected answer
  const getOptionStyle = option => {
    if (option.content === selectedAnswer && option.id === correctAnswer) {
      return styles.correctAnswer;
    } else if (
      option.content === selectedAnswer &&
      option.id !== correctAnswer
    ) {
      return styles.incorrectAnswer;
    } else {
      return null;
    }
  };
  return (
    <View style={styles.container}>
      {isLoading && <ActivityIndicator color="#00ff00" size="large" />}
      {isSuccess ? (
        <>
          <FailHeader />
          <View style={styles.Timer}>
            <Animated.View style={[styles.countTime, {width: viewWidth}]} />
            <Image
              style={styles.clock}
              source={require('../../assets/images/Clock.png')}
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
              <Text style={styles.countTxt}>
                Question {index + 1}/{totalQuestion}
              </Text>
            </View>
            <QuestionContainer question={question} />
            {question.answers.map(answersOption => (
              <ListAnswer
                key={answersOption.id}
                answersOption={answersOption}
                handleSelectOption={handleSelectOption}
                getOptionStyle={getOptionStyle}
                selectedAnswerIndex={selectedAnswerIndex}
              />
            ))}
            <TouchableOpacity
              style={styles.btn}
              onPress={() => handleQuestion()}>
              <Text style={styles.txtBtn}>Next</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : null}
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
  correctAnswer: {
    backgroundColor: '#FFBF1C',
  },
  incorrectAnswer: {
    backgroundColor: '#E31919',
  },
});
