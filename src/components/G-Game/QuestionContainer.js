import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const QuestionContainer = props => {
  return (
    <View style={styles.quesCon}>
      <Text style={styles.question} numberOfLines={1}>
        {props.question}
      </Text>
    </View>
  );
};

export default QuestionContainer;

const styles = StyleSheet.create({
  quesCon: {
    padding: 10,
  },
  question: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 20,
    textAlign: 'center',
    color: '#FFFFFF',
  },
});
