/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {Continents_URL} from '@env';
import React, {useState} from 'react';
import {
  NativeEventEmitter,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
} from 'react-native';
import VnpayMerchant, {VnpayMerchantModule} from 'react-native-vnpay-merchant';
import axiosRequest from '../../axios';

const eventEmitter = new NativeEventEmitter(VnpayMerchantModule);

const PaymentVNpay = () => {
  const [text, setText] = useState('OpenSDK');

  const Payment_function = async () => {
    let UrlPayment = await axiosRequest.get(`${Continents_URL}/payment`);
    console.log('url => ', UrlPayment.data.data.url);
    let query = UrlPayment.data.data.url;

    eventEmitter.addListener('PaymentBack', e => {
      console.log('Sdk back!');
      if (e) {
        console.log('e.resultCode = ' + e.resultCode);
        switch (e.resultCode) {
        }
        eventEmitter.removeAllListeners('PaymentBack');
      }
    });

    VnpayMerchant.show({
      isSandbox: true,
      scheme: 'vn.abahaglobal',
      title: 'Thanh toán VNPAY',
      titleColor: '#333333',
      beginColor: '#ffffff',
      endColor: '#ffffff',
      iconBackName: 'close',
      tmn_code: 'GOGREEN1',
      paymentUrl: query,
    });
    setText('Sdk opened');
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView
        style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <TouchableOpacity
          style={{
            paddingHorizontal: 24,
            paddingVertical: 10,
            backgroundColor: 'blue',
            borderRadius: 10,
          }}
          onPress={Payment_function}>
          <Text style={{color: 'white'}}>{text}</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

export default PaymentVNpay;
