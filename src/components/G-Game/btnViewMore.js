import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const BtnViewMore = props => {
  return (
    <View style={styles.btnContainer}>
      <TouchableOpacity style={styles.btn} onPress={() => props.NextPage()}>
        <Text style={styles.txtBtn}>View more</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BtnViewMore;

const styles = StyleSheet.create({
  btnContainer: {
    alignItems: 'flex-end',
    padding: 10,
    marginRight: 10,
  },
  btn: {
    backgroundColor: '#5FAD41',
    width: 110,
    height: 40,
    borderRadius: 10,
  },
  txtBtn: {
    color: '#FCFCFF',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 20,
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
    padding: 10,
  },
});
