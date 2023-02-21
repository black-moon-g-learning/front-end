import {Alert, StyleSheet} from 'react-native';

export const ValidatetionMessage = () => {
  return Alert.alert('Contribution error', 'Please enter all required fields', [
    {
      text: 'OK',
      style: 'cancel',
    },
  ]);
};

export const SuccessMessage = () => {
  return Alert.alert(
    'Contribute successfully',
    'Thank you for your Contribution',
    [
      {
        text: 'OK',
        style: 'cancel',
      },
    ],
  );
};
const styles = StyleSheet.create({});
