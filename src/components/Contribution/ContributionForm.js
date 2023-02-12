import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const ContributionForm = () => {
  return (
    <View style={styles.form}>
      <TextInput placeholder="Title" style={styles.txtInput} maxLength={100} />
      <TextInput placeholder="Country" style={styles.txtInput} />
      <TextInput
        style={styles.txtInput}
        textAlignVertical="top"
        placeholder="Description"
        numberOfLines={5}
      />
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.txtBtn}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ContributionForm;

const styles = StyleSheet.create({
  form: {
    alignItems: 'center',
  },
  txtInput: {
    width: '95%',
    backgroundColor: '#D9D9D9',
    borderRadius: 20,
    padding: 20,
    color: '#000000',
    opacity: 0.5,
    fontSize: 20,
    lineHeight: 20,
    fontWeight: '400',
    margin: 10,
  },
  btn: {
    width: 155,
    height: 44,
    backgroundColor: '#5FAD41',
    borderRadius: 20,
    margin: 20,
  },
  txtBtn: {
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '600',
    padding: 10,
  },
});
