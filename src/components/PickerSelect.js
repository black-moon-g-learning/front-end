import React from 'react';
import {StyleSheet} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const PickerSelect = props => {
  return (
    <RNPickerSelect
      style={pickerSelectStyles}
      useNativeAndroidPickerStyle={false}
      placeholder={{
        label: 'Country',
        value: null,
        color: 'red',
      }}
      onValueChange={value =>
        props.onChangeContribution({...props.contribution, country_id: value})
      }
      items={props.data.data.map(country => ({
        label: country.name,
        value: country.id,
      }))}
      value={props.contribution.country_id}
    />
  );
};

export default PickerSelect;

const pickerSelectStyles = StyleSheet.create({
  inputAndroid: {
    fontSize: 16,
    color: '#000000',
    lineHeight: 20,
    fontWeight: '400',
    fontFamily: 'Poppins-Bold',
    paddingLeft: 10,
    opacity: 0.7,
  },
});
