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
  ansContainer: {
    width: '90%',
  },
  ans: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderRadius: 100,
    margin: 10,
    backgroundColor: '#FFFFFF',
  },
  option: {
    color: '#000000',
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 20,
    fontFamily: 'Poppins-Bold',
    padding: 15,
    backgroundColor: '#EFD207',
    borderRadius: 100,
    width: 50,
    height: 50,
    textAlign: 'center',
  },
  answer: {
    color: '#323643',
    fontSize: 16,
    //fontWeight: '400',
    fontFamily: 'Poppins-Bold',
    padding: 10,
    paddingLeft: '3%',
  },
  correctAnswer: {
    backgroundColor: 'yellow',
  },
});
