import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const ListAnswer = props => {
  return (
    <TouchableOpacity
      style={[styles.ans, props.getOptionStyle(props.answersOption)]}
      onPress={() => props.handleSelectOption(props.answersOption)}
      disabled={props.selectedAnswerIndex !== null}>
      <Text style={[styles.option, props.getOptionStyle(props.answersOption)]}>
        {props.option[props.index]}
      </Text>
      <Text numberOfLines={1} style={styles.answer}>
        {props.answersOption.content}
      </Text>
    </TouchableOpacity>
  );
};

export default ListAnswer;

const styles = StyleSheet.create({
  ans: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderRadius: 100,
    margin: 8,
    backgroundColor: '#FFFFFF',
  },
  option: {
    color: '#000000',
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 20,
    fontFamily: 'Poppins-Bold',
    padding: 10,
    backgroundColor: '#EFD207',
    borderRadius: 100,
    width: 40,
    height: 40,
    textAlign: 'center',
  },
  answer: {
    color: '#323643',
    fontSize: 14,
    fontFamily: 'Poppins-Bold',
    paddingVertical: 10,
    paddingLeft: '2%',
  },
  correctAnswer: {
    backgroundColor: 'yellow',
  },
});
