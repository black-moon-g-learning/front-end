import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export const FailHeader = () => {
  return (
    <View style={styles.header}>
      <Image source={require('../../assets/images/G-GAME.png')} />
    </View>
  );
};

export const GroupBtn = () => {
  return (
    <View style={styles.btnGroup}>
      <TouchableOpacity style={styles.btn}>
        <Text style={[styles.btnTxt, {color: '#008000'}]}>Play Again</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.btn, {backgroundColor: '#FFC845'}]}>
        <Text style={styles.btnTxt}>Menu</Text>
      </TouchableOpacity>
    </View>
  );
};

export const FinalResult = () => {
  return (
    <View style={styles.finalResult}>
      <Text style={styles.txtResult}>Your answer: 3/15</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  btnGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 10,
    marginVertical: '5%',
  },
  btn: {
    width: 110,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#5FAD41',
  },
  btnTxt: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    textAlign: 'center',
    color: '#000000',
    padding: 5,
  },
  finalResult: {
    width: '90%',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 10,
    marginHorizontal: '5%',
    marginVertical: '8%',
  },
  txtResult: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '500',
    lineHeight: 20,
    color: '#000000',
  },
});
