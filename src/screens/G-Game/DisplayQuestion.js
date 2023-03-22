import {Continents_URL} from '@env';
import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Animated,
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import {useMutation} from 'react-query';
import axiosRequest from '../../axios';
import {FailHeader} from '../../components/G-Game/FailHeader';
import ListAnswer from '../../components/G-Game/ListAnswer';
import UseGetdata from '../../hooks/UseContinents';
import UseLevelModal from '../../hooks/UseLevelModal';
import TimeupModal from './TimeupModal';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const DisplayQuestion = () => {
  const {isModalVisible, changeModalVisible} = UseLevelModal();
  const navigation = useNavigation();
  const route = useRoute();
  const item = route.params;
  const API = `countries/${item.id}/questions`;
  const {data, isLoading, isSuccess} = UseGetdata(API);
  //Index of question
  const [index, setIndex] = useState(0);
  //Question is a object
  const question = isSuccess ? data.data[index] : null;
  //total of question
  const totalQuestion = isSuccess ? data.data.length : null;
  //total correct answers
  const [totalCorrectAns, setTotalCorrectAns] = useState(0);
  //Select answer
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  //Index of select answer
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  //correct answer
  const [correctAnswer, setCorrectAnswer] = useState(null);
  //score
  const [score, setScore] = useState(0);
  //Width of Wiew to show downtime
  const [viewWidth, setViewWidth] = useState(new Animated.Value(300));
  //total of time to answer the question
  const [timeLeft, setTimeLeft] = useState(15);
  //Option to choose
  const options = ['A', 'B', 'C', 'D'];
  const [questionState, setQuestionState] = useState('unanswered');

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (timeLeft >= 0) {
        setTimeLeft(timeLeft - 1);
        Animated.timing(viewWidth, {
          toValue: viewWidth._value - 20,
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
  const handleQuestion = (myScore, correctAns, totalQues) => {
    if (index === totalQuestion - 1) {
      handleGameHistory(correctAns, totalQues);
      finalScreen(myScore);
    } else {
      setIndex(index + 1);
      setTimeLeft(15);
      viewWidth.setValue(300);
      setSelectedAnswerIndex(null);
      setSelectedAnswer(null);
      setQuestionState('unanswered');
    }
  };
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (questionState === 'unanswered') {
        setQuestionState('timeout');
        changeModalVisible(true);
      }
    }, 15000);

    return () => clearTimeout(timeout);
  }, [questionState]);

  //Clear data to play game again
  const restartQuiz = () => {
    setIndex(0);
    setTotalCorrectAns(0);
    setSelectedAnswer(null);
    setSelectedAnswerIndex(null);
    setCorrectAnswer(null);
    setScore(0);
    viewWidth.setValue(300);
    setTimeLeft(15);
    setQuestionState('unanswered');
  };
  //Navigate to result screens
  const finalScreen = finalScore => {
    if (finalScore <= 500) {
      navigation.navigate('FailScreen', {
        item,
        score,
        totalCorrectAns,
        totalQuestion,
        restartQuiz: restartQuiz,
      });
    } else if (finalScore <= 1000) {
      navigation.navigate('GoodScreen', {
        item,
        score,
        totalCorrectAns,
        totalQuestion,
        restartQuiz: restartQuiz,
      });
    } else {
      navigation.navigate('GreatScreen', {
        item,
        score,
        totalCorrectAns,
        totalQuestion,
        restartQuiz: restartQuiz,
      });
    }
  };
  const handleSelectOption = answer => {
    setSelectedAnswer(answer.content);
    setSelectedAnswerIndex(answer.id);
    setQuestionState('answered');
    if (answer.is_correct === 1) {
      setCorrectAnswer(answer.id);
      setScore(score + 100);
      setTotalCorrectAns(totalCorrectAns + 1);
    }
  };
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
  const handleGameHistory = (correctAns, totalQues) => {
    var dataHistory = new FormData();
    dataHistory.append('total_correct_answers', correctAns);
    dataHistory.append('total_questions', totalQues);
    mutationContribution.mutate(dataHistory);
  };
  const mutationContribution = useMutation(
    ['mutation-post'],
    gameHistory => {
      return axiosRequest.post(
        `${Continents_URL}/countries/${item.id}/history-play-game`,
        gameHistory,
        {
          headers: {'Content-Type': 'multipart/form-data'},
        },
      );
    },
    {
      onSuccess: () => {
        console.log('Success');
      },
    },
  );
  return (
    <View style={styles.container}>
      {isLoading && <ActivityIndicator color="#00ff00" size="large" />}
      {isSuccess ? (
        <>
          <FailHeader score={score} />
          <View style={styles.Timer}>
            <Animated.View style={[styles.countTime, {width: viewWidth}]} />
            <Image
              style={styles.clock}
              source={require('../../assets/images/Clock.png')}
            />
          </View>
          <Modal
            transparent={true}
            animationType="fade"
            visible={isModalVisible}
            nRequestClose={() => changeModalVisible(false)}>
            <TimeupModal
              changeModalVisible={changeModalVisible}
              score={score}
              handleQuestion={handleQuestion}
            />
          </Modal>
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
            <View style={styles.quesCon} key={question.id}>
              <Text style={styles.question} numberOfLines={2}>
                {question.content}
              </Text>
            </View>
            {question.answers.map((answersOption, ind) => (
              <ListAnswer
                key={answersOption.id}
                answersOption={answersOption}
                handleSelectOption={handleSelectOption}
                getOptionStyle={getOptionStyle}
                selectedAnswerIndex={selectedAnswerIndex}
                option={options}
                index={ind}
              />
            ))}
            <TouchableOpacity
              style={styles.btn}
              onPress={() =>
                handleQuestion(score, totalCorrectAns, totalQuestion)
              }>
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
    width: width,
    height: height,
  },
  questionContainer: {
    backgroundColor: '#5FAD41',
    borderRadius: 20,
    width: '90%',
    height: (height * 1.93) / 3,
    marginTop: 50,
    alignItems: 'center',
    position: 'relative',
    paddingVertical: 10,
  },
  countQues: {
    backgroundColor: '#FFFFFF',
    width: '90%',
    height: 40,
    borderRadius: 10,
    // marginTop: 60,
    marginTop: '8%',
  },
  countTxt: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    fontWeight: '400',
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  character: {
    width: 87,
    height: 112,
  },
  btn: {
    width: 120,
    height: 35,
    borderRadius: 10,
    backgroundColor: '#FFC845',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
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
  quesCon: {
    width: '90%',
    height: 100,
    paddingVertical: 5,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  question: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 20,
    textAlign: 'justify',
    color: '#FFFFFF',
  },
});
