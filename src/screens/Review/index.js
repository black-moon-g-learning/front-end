import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Modal,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import {ErrorMessage} from '../../components/ErrorMessage';
import ModalAnswer from '../../components/Review/ModalAnswer';
import UseGetdata from '../../hooks/UseContinents';
import ModalNext from '../../components/Review/ModalNextQuestion';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Review = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const {item, splitUrl, videos} = route.params;
  const API = `videos/${item.id}/questions`;
  const {data, isLoading, isSuccess} = UseGetdata(API);
  const [showModal, setShowModal] = useState(false);
  const [showModalResoult, setModalResoult] = useState(false);
  const [indexItem, setIndexItem] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [totalCorrectAns, setTotalCorrectAns] = useState(0);
  const [images, setImages] = useState('');
  const [imagesmain, setImagesmain] = useState('');

  const [AnswerNotificatiion, setAnswerNotificatiion] = useState('');

  const answerOptions = ['A', 'B', 'C', 'D'];
  const question = isSuccess ? data.data[indexItem] : null;
  const totalQuestion = isSuccess ? data.data.length : null;
  const [switchStates, setSwitchStates] = useState(
    question ? new Array(question.answers.length).fill(false) : [],
  );
  const [prevSwitchIndex, setPrevSwitchIndex] = useState(null);
  const [Nguyet, setNguyet] = useState(null);
  const handleModalClose = () => {
    setShowModal(false);
    setModalResoult(false);
  };
  const handleQuestion = (correctAns, totalQues) => {
    if (Nguyet === 1) {
      setTotalCorrectAns(totalCorrectAns + 1);
      setAnswerNotificatiion('You are correct');
      setImages('https://cdn-icons-png.flaticon.com/512/4436/4436481.png');
      setImagesmain(
        'https://123emoji.com/wp-content/uploads/2017/08/sticker-4-50.png',
      );
      setShowModal(true);
    } else {
      setImages(
        'https://www.shareicon.net/data/256x256/2015/09/15/101562_incorrect_512x512.png',
      );
      setImagesmain(
        'https://stickershop.line-scdn.net/stickershop/v1/sticker/8277/android/sticker.png',
      );
      setAnswerNotificatiion('Not Correct');
      setShowModal(true);
    }
  };
  const Result = () => {
    if (indexItem === totalQuestion - 1) {
      setModalResoult(true);
    } else {
      setSwitchStates(new Array(question.answers.length).fill(false));
      setIndexItem(indexItem + 1);
      setSelectedAnswer(null);
    }
  };

  const handleSelectOption = (answer, index) => {
    setSelectedAnswer(answer.content);
    setNguyet(answer.is_correct);

    const newSwitchStates = [...switchStates];
    if (prevSwitchIndex !== null && prevSwitchIndex !== index) {
      newSwitchStates[prevSwitchIndex] = false;
    }
    newSwitchStates[index] = !newSwitchStates[index];
    setPrevSwitchIndex(index);
    setSwitchStates(newSwitchStates);
  };

  const getOptionStyle = answerOption => {
    if (
      answerOption.content === selectedAnswer &&
      answerOption.is_correct === 1
    ) {
      return styles.correctAnswer;
    } else if (
      answerOption.content === selectedAnswer &&
      answerOption.is_correct === 0
    ) {
      return styles.incorrectAnswer;
    } else {
      return null;
    }
  };

  const Item = ({item, answerOption, index}) => (
    <View
      contentContainerStyle={{
        flexGrow: 1,
        paddingLeft: 2,
        justifyContent: 'center',
        alignItems: 'center',
        width: (width * 3) / 3,
      }}
      key={index}>
      <TouchableOpacity style={styles.answersItem}>
        <Image source={{uri: item.image}} style={styles.answersImage} />
        <TouchableOpacity style={[styles.buttonAnswers]}>
          <Switch
            onValueChange={newValue => {
              const newSwitchStates = [...switchStates];
              newSwitchStates[index] = newValue;
              setSwitchStates(newSwitchStates);
              handleSelectOption(item, index);
            }}
            style={[{transform: [{scaleX: 2}, {scaleY: 2}]}]}
            value={switchStates[index]}
          />
          <Text style={styles.textoption}>{answerOption}</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
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
          {showModal && (
            <Modal transparent={true} animationType="fade">
              <ModalNext
                onClose={handleModalClose}
                images={images}
                imagesmain={imagesmain}
                text={AnswerNotificatiion}
                Result={Result}
              />
            </Modal>
          )}
          {showModalResoult && (
            <Modal transparent={true} animationType="fade">
              <ModalAnswer
                onClose={handleModalClose}
                totalQuestion={totalQuestion}
                totalCorrectAns={totalCorrectAns}
                item={item}
                videos={videos}
              />
            </Modal>
          )}
          <View style={styles.flatlist}>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={question.answers}
              numColumns={2}
              getOptionStyle={getOptionStyle}
              ListEmptyComponent={ErrorMessage}
              keyExtractor={item => item.id}
              renderItem={({item, index}) => {
                return (
                  <Item
                    item={item}
                    answerOption={answerOptions[index]}
                    index={index}
                    getOptionStyle={getOptionStyle(item)}
                  />
                );
              }}
            />
          </View>
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
    width: width,
    height: height,
  },
  question: {
    paddingTop: '3%',
    display: 'flex',
    flexDirection: 'row',
  },
  flatlist: {
    width: (width * 3) / 3,
    paddingBottom: (height * 0.7) / 6,
    alignItems: 'center',
    justifyContent: 'center',
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
    width: (width * 2.2) / 3,
    paddingBottom: (height * 0.51) / 6,
    height: 60,
    borderRadius: 20,
    alignItems: 'center',
  },
  vector: {
    marginTop: '13.5%',
    marginRight: '-2.68%',
  },
  answersItem: {
    width: (width * 2.65) / 6,
    height: 170,
    textAlign: 'center',
    alignContent: 'center',
    paddingTop: 15,
    paddingBottom: 18,
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: 10,
    margin: 10,
    elevation: 5,
    backgroundColor: '#FEFEFE',
  },
  answersImage: {
    width: '90%',
    height: '65%',
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
    marginTop: -28,
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
    width: '80%',
    height: 45,
    borderRadius: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    overflow: 'hidden',
    paddingLeft: 5,
  },
  nextButton: {
    width: '100%',
    alignItems: 'center',
    display: 'flex',
    paddingTop: (height * 0.25) / 6,
  },
  btn: {
    marginTop: -80,
    width: 170,
    height: 45,
    borderRadius: 10,
    backgroundColor: '#FFC845',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtBtn: {
    width: 170,
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    color: 'green',
    textAlign: 'center',
  },
});
