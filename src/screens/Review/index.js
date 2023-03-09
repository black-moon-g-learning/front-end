import {
  StyleSheet,
  Text,
  Image,
  View,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';

import UseGetdata from '../../hooks/UseContinents';
import {ErrorMessage} from '../../components/ErrorMessage';

const Review = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const {item} = route.params;
  const API = `videos/105/questions`;
  const {data, isLoading, isSuccess} = UseGetdata(API);
  const [indexItem, setIndexItem] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  //Index of select answer
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [totalCorrectAns, setTotalCorrectAns] = useState(0);

  //correct answer
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const answerOptions = ['A', 'B', 'C', 'D'];
  //Question is a object
  const question = isSuccess ? data.data[indexItem] : null;
  //total of question
  const totalQuestion = isSuccess ? data.data.length : null;
  const handleQuestion = (correctAns, totalQues) => {
    if (indexItem === totalQuestion - 1) {
      finalScreen();
    } else {
      setIndexItem(indexItem + 1);
      setSelectedAnswerIndex(null);
      setSelectedAnswer(null);
    }
  };
  const finalScreen = () => {
    navigation.navigate('FailScreen', {
      item,
      totalCorrectAns,
      totalQuestion,
      restartQuiz: '',
    });
  };

  const handleSelectOption = answer => {
    setSelectedAnswer(answer.content);
    setSelectedAnswerIndex(answer.id);
    // setQuestionState('answered');
    if (answer.is_correct === 1) {
      setCorrectAnswer(answer.id);
      setTotalCorrectAns(totalCorrectAns + 1);
      console.log('đúng nhaaa');
      // saveScore(score);
    } else {
      console.log('sai nhaa');
    }
  };

  const getOptionStyle = answerOptions => {
    if (
      answerOptions.content === selectedAnswer &&
      answerOptions.id === correctAnswer
    ) {
      return styles.correctAnswer;
    } else if (
      answerOptions.content === selectedAnswer &&
      answerOptions.id !== correctAnswer
    ) {
      return styles.incorrectAnswer;
    } else {
      return null;
    }
  };

  const Item = ({item, answerOption}) => (
    <ScrollView style={styles.item}>
      <TouchableOpacity style={styles.answersItem}>
        <Image source={{uri: item.image}} style={styles.answersImage} />
        <TouchableOpacity
          style={[styles.buttonAnswers, getOptionStyle(item)]}
          onPress={() => handleSelectOption(item)}>
          <Text style={styles.textoption}>{answerOption}</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    </ScrollView>
  );
  return (
    <SafeAreaView style={styles.container}>
      {isLoading && <ActivityIndicator color="#00ff00" size="large" />}
      {isSuccess ? (
        <>
          <View style={styles.question}>
            <Image
              style={styles.character}
              source={require('../../assets/images/nomarl.png')}
            />
            <View style={styles.questionCharacter}>
              <Image
                style={styles.vector}
                source={require('../../assets/images/Vector9.png')}
              />
              <View style={styles.viewQuestion}>
                <Text style={styles.questionText}>{question.content}</Text>
              </View>
            </View>
          </View>
          <View style={styles.countQues}>
            <Text style={styles.countTxt}>
              Question {indexItem + 1}/{totalQuestion}
            </Text>
          </View>
          <>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={question.answers}
              numColumns={2}
              getOptionStyle={getOptionStyle}
              ListEmptyComponent={ErrorMessage}
              keyExtractor={item => item.id}
              renderItem={({item, index}) => {
                return <Item item={item} answerOption={answerOptions[index]} />;
              }}
            />
          </>
          <View style={styles.nextButton}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => handleQuestion(totalCorrectAns, totalQuestion)}>
              <Text style={styles.txtBtn}>Next</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : null}
    </SafeAreaView>
  );
};

export default Review;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  question: {
    paddingTop: 15,
    display: 'flex',
    flexDirection: 'row',
  },
  character: {
    marginTop: '15%',
    width: 70,
    height: 80,
    marginRight: '-2%',
  },
  questionText: {
    paddingTop: 5,
    fontSize: 18,
    width: '80%',
    height: 50,
    textAlign: 'center',
  },
  questionCharacter: {
    display: 'flex',
    flexDirection: 'row',
  },
  viewQuestion: {
    backgroundColor: '#FFC845',
    width: '85%',
    height: 60,
    borderRadius: 20,
    alignItems: 'center',
  },
  vector: {
    marginTop: '13%',
    marginRight: '-2.4%',
  },

  item: {width: '90%', height: 200, display: 'flex'},
  answersItem: {
    width: '90%',
    height: 170,
    textAlign: 'center',
    alignContent: 'center',
    paddingLeft: 3,
    paddingRight: 3,
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 20,
    margin: 10,
  },
  answersImage: {
    width: '100%',
    height: '70%',
    borderRadius: 10,
    marginBottom: 15,
  },
  countQues: {
    width: '100%',
    height: 40,
    borderRadius: 10,
    marginTop: -28,
  },
  countTxt: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    fontWeight: '400',
    lineHeight: 20,
    textAlign: 'center',
    padding: 13,
    color: '#000000',
    marginTop: -15,
  },
  textoption: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    fontWeight: '400',
    lineHeight: 20,
    textAlign: 'center',
    padding: 13,
    color: '#000000',
  },
  incorrectAnswer: {
    backgroundColor: '#E31919',
  },
  correctAnswer: {
    backgroundColor: '#FFBF1C',
  },
  buttonAnswers: {
    backgroundColor: 'white',
    borderWidth: 1,
    width: '60%',
    height: 40,
    borderRadius: 20,
    marginLeft: 10,
  },
  nextButton: {
    width: '100%',
    alignItems: 'center',
    display: 'flex',
  },
  btn: {
    marginTop: -60,

    width: 94,
    height: 32,
    borderRadius: 10,
    backgroundColor: '#FFC845',
  },
  txtBtn: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 20,
    fontFamily: 'Poppins-Bold',
    color: 'green',
    textAlign: 'center',
    paddingTop: 5,
  },
});
