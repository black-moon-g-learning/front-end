import React from 'react';
import {StyleSheet} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Icon from 'react-native-vector-icons/AntDesign';

const PickerSelect = props => {
  return (
    <RNPickerSelect
      style={pickerSelectStyles}
      useNativeAndroidPickerStyle={false}
      placeholder={{
        label: 'Country',
        value: null,
      }}
      onValueChange={value =>
        props.onChangeContribution({...props.contribution, country_id: value})
      }
      items={props.data.data.map(country => ({
        label: country.name,
        value: country.id,
      }))}
      value={props.contribution.country_id}
      Icon={() => {
        return (
          <Icon
            style={{padding: 10}}
            name="caretdown"
            size={20}
            color="#5FAD41"
          />
        );
      }}
    />
  );
};

export default PickerSelect;

const pickerSelectStyles = StyleSheet.create({
  inputAndroid: {
    fontSize: 16,
    color: '#000000',
    lineHeight: 20,
    fontFamily: 'Poppins-Medium',
    paddingLeft: 10,
    opacity: 0.7,
  },
  placeholder: {
    color: '#000000',
    opacity: 0.3,
    fontSize: 16,
    lineHeight: 20,
    fontFamily: 'Poppins-Medium',
  },
});
