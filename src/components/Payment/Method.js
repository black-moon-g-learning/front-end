import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';

const Method = () => {
  const navigation = useNavigation();

  const [radioButtons, setRadioButtons] = useState([
    {
      value: 'Zalo',
      id: '1',
      color: 'green',
      label: (
        <View style={styles.row_method}>
          <Text style={styles.text_row_method}>Zalo</Text>
          <Image
            style={styles.image_method}
            source={require('../../assets/images/ZaloPAy.png')}
          />
        </View>
      ),
    },
    {
      id: '2',
      value: 'Visa card',
      color: 'green',
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

  return (
    <View style={styles.container}>
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
        onPress={() => navigation.navigate('VNPAY')}>
        <Text style={styles.text_submit}>SUBMIT</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Method;

const styles = StyleSheet.create({
  container: {
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
});
