import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const GLevelDetail = props => {
  const CloseModal = bool => {
    props.changeModalVisible(bool);
  };
  return (
    <TouchableOpacity style={styles.container} disabled={true}>
      <View style={styles.modal}>
        <View>
          <Text style={styles.title}>{props.level.name} Level</Text>
          <Text style={styles.desc}>{props.level.description}</Text>
        </View>
        <View style={styles.btnGroup}>
          <TouchableOpacity onPress={() => CloseModal(false)}>
            <Text style={styles.btn}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => CloseModal(false)}>
            <Text style={styles.btn}>Play now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default GLevelDetail;

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
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 20,
    fontFamily: 'Poppins-Bold',
    color: '#000000',
    paddingTop: 20,
    textAlign: 'center',
  },
  desc: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
    fontFamily: 'Poppins-Bold',
    color: '#000000',
    padding: 10,
    textAlign: 'justify',
  },
  btnGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
  },
  btn: {
    color: '#5FAD41',
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 20,
    fontFamily: 'Poppins-Bold',
    padding: 10,
  },
});
