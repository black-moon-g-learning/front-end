import React from 'react';
import {LogBox, StyleSheet, View} from 'react-native';
import Method from '../../components/Payment/Method';
import Package from '../../components/Payment/Package';

LogBox.ignoreLogs(['new NativeEventEmitter']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

const Payment = () => {
  return (
    <>
      <Package />
      <View style={styles.space}></View>
      <Method />
    </>
  );
};

export default Payment;

const styles = StyleSheet.create({
  space: {
    borderBottomWidth: 1,
    margin: 30,
    width: '94%',
    alignSelf: 'center',
  },
});
