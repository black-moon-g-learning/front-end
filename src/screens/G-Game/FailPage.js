import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const FailPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../../assets/images/G-GAME.png')} />
      </View>
      <View style={styles.resultContainer}>
        <View style={styles.result}>
          <Image
            style={styles.failImg}
            source={require('../../assets/images/nomarl.png')}
          />
          <Text style={styles.failTxt}>Failed</Text>
        </View>
        <View style={styles.failIconCon}>
          <Image
            style={styles.failIcon}
            source={require('../../assets/images/fail.png')}
          />
        </View>
        <View style={styles.finalResult}>
          <Text style={styles.txtResult}>Your answer: 3/15</Text>
        </View>
        <View style={styles.btnGroup}>
          <TouchableOpacity style={styles.btn}>
            <Text style={[styles.btnTxt, {color: '#008000'}]}>Play Again</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.btn, {backgroundColor: '#FFC845'}]}>
            <Text style={styles.btnTxt}>Menu</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default FailPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15,
    justifyContent: 'center',
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  resultContainer: {
    backgroundColor: '#5FAD41',
    borderRadius: 20,
    width: '100%',
  },
  result: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  failIconCon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  failIcon: {
    width: 145,
    height: 145,
  },
  failTxt: {
    fontFamily: 'Poppins-Bold',
    fontSize: 50,
    fontWeight: '500',
    lineHeight: 20,
    color: '#FFFFFF',
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  failImg: {
    width: 101,
    height: 129,
  },
  finalResult: {
    width: '90%',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 10,
    marginHorizontal: '5%',
    marginVertical: '10%',
  },
  txtResult: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '500',
    lineHeight: 20,
    color: '#000000',
  },
  btnGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 10,
    marginVertical: '8%',
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
});
