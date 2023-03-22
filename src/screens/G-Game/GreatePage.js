import React from 'react';
import {Image, LogBox, Modal, StyleSheet, Text, View} from 'react-native';
import {FinalResult, GroupBtn} from '../../components/G-Game/FailHeader';

const GreatPage = ({route}) => {
  LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
  ]);
  const {item, score, totalQuestion, totalCorrectAns, restartQuiz} =
    route.params;
  const [modalVisible, setModalVisible] = React.useState(true);

  return (
    <View style={styles.container}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.modal}>
          <View style={[styles.modalView, styles.shadowProp]}>
            <View style={styles.row_formmodal_profile}>
              <Image
                style={styles.failIcon}
                source={require('../../assets/images/image26.png')}
              />
            </View>
            <Text style={styles.title}>EXCELLENT</Text>
            <View style={styles.finalResult}>
              <Text style={styles.txtResult}>Your score:</Text>
              <Text style={styles.txtTitle}>{score}</Text>
            </View>
            <FinalResult
              totalQuestion={totalQuestion}
              totalCorrectAns={totalCorrectAns}
            />
            <View style={styles.btn_modal_update}>
              <GroupBtn item={item} restartQuiz={restartQuiz} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default GreatPage;

const styles = StyleSheet.create({
  failIconCon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  failIcon: {
    width: 119,
    height: 211,
  },
  txtResult: {
    fontFamily: 'Poppins-Mediium',
    fontSize: 20,
    textAlign: 'center',
    lineHeight: 20,
    color: '#000000',
    padding: 10,
  },
  txtTitle: {
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '700',
    lineHeight: 20,
    color: 'red',
    padding: 10,
  },
  modalView: {
    width: '90%',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
  },
  modal: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  finalResult: {
    flexDirection: 'row',
  },
  title: {
    fontFamily: 'Poppins-Medium',
    fontSize: 28,
    textAlign: 'center',
    fontWeight: '700',
    lineHeight: 20,
    color: 'red',
    paddingTop: 20,
    paddingBottom: 10,
  },
  shadowProp: {
    shadowOffset: {width: -2, height: 4},
    shadowColor: 'red',
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
