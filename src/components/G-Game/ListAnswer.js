import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const ListAnswer = props => {
  return (
    <TouchableOpacity
      style={[styles.ans, props.getOptionStyle(props.answersOption)]}
      onPress={() => props.handleSelectOption(props.answersOption)}
      disabled={props.selectedAnswerIndex !== null}>
      <View style={[styles.option, props.getOptionStyle(props.answersOption)]}>
        <Text style={[styles.optionChoose]}>{props.option[props.index]}</Text>
      </View>
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
    height: '10%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderRadius: 100,
    margin: 6,
    backgroundColor: '#FFFFFF',
  },
  option: {
    // padding: 10,
    backgroundColor: '#EFD207',
    borderRadius: 100,
    width: '16%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionChoose: {
    color: '#000000',
    fontSize: 18,
    // fontWeight: '400',
    // lineHeight: 20,
    fontFamily: 'Poppins-Bold',
  },
  answer: {
    color: '#323643',
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    paddingVertical: 10,
    paddingLeft: '2%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  correctAnswer: {
    backgroundColor: 'yellow',
  },
});
