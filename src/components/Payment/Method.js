import {Continents_URL} from '@env';
// import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Image,
  Modal,
  NativeEventEmitter,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';
import VnpayMerchant, {VnpayMerchantModule} from 'react-native-vnpay-merchant';
import axiosRequest from '../../axios';

const eventEmitter = new NativeEventEmitter(VnpayMerchantModule);
const Method = () => {
  // const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  const [radioButtons, setRadioButtons] = useState([
    {
      id: '1',
      color: 'green',
      value: 'VNPay',
      selected: true,
      label: (
        <View style={styles.row_method}>
          <Text style={styles.text_row_method}>VNPay</Text>
          <Image
            style={styles.image_method}
            source={require('../../assets/images/vnpay.jpg')}
          />
        </View>
      ),
    },
    {
      id: '2',
      value: 'Visa card',
      color: 'green',
      disabled: true,
      label: (
        <View style={styles.row_method}>
          <Text style={styles.text_row_method}>Visa card</Text>
          <Image
            style={styles.image_method}
            source={require('../../assets/images/visacard.png')}
          />
        </View>
      ),
    },
  ]);

  function onPressRadioButton(radioButtonsArray) {
    setRadioButtons(radioButtonsArray);
  }

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
  };

  return (
    <View style={styles.container_big}>
      <Text style={styles.text_method}>Choose a method: </Text>
      <View style={styles.space}></View>
      <View style={styles.btn_method}>
        <RadioGroup
          style={styles.btn_radio}
          onPress={onPressRadioButton}
          radioButtons={radioButtons}
        />
      </View>
      <TouchableOpacity
        style={styles.btn_submit}
        onPress={() => {
          setModalVisible(true);
        }}>
        <Text style={styles.text_submit}>SUBMIT</Text>
      </TouchableOpacity>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={{backgroundColor: '#00000099', flex: 1}}>
          <View style={styles.modalView}>
            <View style={styles.row_formmodal_profile}>
              <Text style={styles.title_form_profile}>Notification</Text>
            </View>
            <View style={styles.viewdes_formmodal_profile}>
              <Text style={styles.des_form_profile}>
                Are you sure payment with VNPAY
              </Text>
            </View>
            <View style={styles.btn_modal_update}>
              <Pressable
                style={styles.buttonC}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Cancel</Text>
              </Pressable>
              <Pressable style={styles.buttonB} onPress={Payment_function}>
                <Text style={styles.textStyle}>CONTINUTE</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Method;

const styles = StyleSheet.create({
  container_big: {
    margin: 20,
    marginTop: 2,
  },
  space: {
    borderBottomWidth: 1,
    width: '55%',
  },
  image_method: {
    width: 50,
    height: 50,
    alignSelf: 'center',
    marginLeft: 20,
    borderRadius: 10,
  },
  row_method: {
    flexDirection: 'row',
    height: 50,
    padding: 10,
    width: '90%',
  },
  text_row_method: {
    alignSelf: 'center',
    width: 200,
    textAlign: 'right',
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
  },
  btn_method: {
    padding: 10,
    width: '96%',
  },
  text_method: {
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
  },
  btn_submit: {
    width: '70%',
    height: 50,
    backgroundColor: '#33AB2B',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },
  text_submit: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    marginTop: '1%',
  },
  container: {
    flex: 1,
  },
  modalView: {
    backgroundColor: '#5FAD41',
    width: '90%',
    height: 300,
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginTop: 200,
    borderRadius: 20,
  },
  row_formmodal_profile: {
    width: '60%',
    height: 50,
    backgroundColor: '#D9D9D9',
    borderRadius: 30,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  title_form_profile: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 24,
    color: 'black',
  },
  viewdes_formmodal_profile: {
    width: '90%',
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  des_form_profile: {
    fontSize: 18,
    color: 'white',
  },
  buttonC: {
    width: 100,
    backgroundColor: '#FFC845',
    height: 40,
    marginRight: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  buttonB: {
    width: 100,
    backgroundColor: '#916EC9',
    height: 40,
    marginLeft: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  btn_modal_update: {
    flexDirection: 'row',
  },
  textStyle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: 'white',
  },
});
