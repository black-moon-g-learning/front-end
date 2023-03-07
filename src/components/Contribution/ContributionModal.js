import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const ContributionModal = props => {
  const navigation = useNavigation();
  const CloseModal = bool => {
    props.changeModalVisible(bool);
  };
  const nextContribution = () => {
    navigation.navigate('Contribution');
    CloseModal(false);
  };
  return (
    <TouchableOpacity style={styles.container} disabled={true}>
      <View style={styles.modal}>
        <View>
          <Text style={styles.title}>Let's contribute your interest!</Text>
        </View>
        <View style={styles.btnGroup}>
          <TouchableOpacity onPress={() => CloseModal(false)}>
            <Text style={styles.btn}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => nextContribution()}>
            <Text style={styles.btn}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ContributionModal;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    width: '80%',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    lineHeight: 24,
    fontFamily: 'Poppins-Bold',
    color: '#000000',
    padding: 20,
    textAlign: 'center',
  },
  btnGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
  },
  btn: {
    color: '#5FAD41',
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 20,
    fontFamily: 'Poppins-Bold',
    padding: 10,
  },
});
