import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const ListAnswer = () => {
  return (
    <View style={styles.ansContainer}>
      <View style={styles.ans}>
        <Text style={styles.option}>A</Text>
        <Text style={styles.answer}>98,186 million people</Text>
      </View>
      <TouchableOpacity style={styles.ans}>
        <Text style={styles.option}>A</Text>
        <Text style={styles.answer}>98,186 million people</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.ans}>
        <Text style={styles.option}>A</Text>
        <Text style={styles.answer}>98,186 million people</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.ans}>
        <Text style={styles.option}>A</Text>
        <Text style={styles.answer}>98,186 million people</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ListAnswer;

const styles = StyleSheet.create({
  ansContainer: {
    width: '90%',
  },
  ans: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderRadius: 100,
    margin: 10,
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
    fontWeight: '400',
    fontFamily: 'Poppins-Bold',
    padding: 10,
    paddingLeft: '10%',
  },
});
