import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const TimeupModal = props => {
  const CloseModal = bool => {
    props.changeModalVisible(bool);
  };
  const nextContribution = () => {
    // props.handleQuestion(props.score);
    props.handleQuestion(props.score);
    CloseModal(false);
  };
  return (
    <TouchableOpacity style={styles.container} disabled={true}>
      <View style={styles.modal}>
        <View>
          <Text style={styles.title}>Opps</Text>
          <Text style={styles.title}>Time's up!</Text>
        </View>
        <View style={styles.btnGroup}>
          <TouchableOpacity>
            <Text style={styles.btn} onPress={() => nextContribution()}>
              OK
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TimeupModal;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    width: '80%',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 20,
    fontFamily: 'Poppins-Bold',
    color: '#000000',
    padding: 20,
    textAlign: 'center',
  },
  btnGroup: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  btn: {
    color: '#5FAD41',
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 20,
    fontFamily: 'Poppins-Bold',
    padding: 10,
  },
});
