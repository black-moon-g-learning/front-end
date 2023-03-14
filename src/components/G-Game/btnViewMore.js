import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const BtnViewMore = props => {
  return (
    <View
      style={[
        styles.btnContainer,
        {justifyContent: props.showPrevious ? 'space-between' : 'flex-end'},
      ]}>
      {props.showPrevious && (
        <TouchableOpacity
          style={styles.btn}
          onPress={() => props.handlePrevious()}>
          <Text style={styles.txtBtn}>Previous</Text>
        </TouchableOpacity>
      )}
      <TouchableOpacity
        style={styles.btn}
        onPress={() => props.handleViewMore()}>
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
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
  },
  btn: {
    backgroundColor: '#5FAD41',
    width: 100,
    height: 40,
    borderRadius: 10,
  },
  txtBtn: {
    color: '#FCFCFF',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
    padding: 10,
  },
});
