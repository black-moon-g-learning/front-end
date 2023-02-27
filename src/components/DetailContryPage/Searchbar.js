import React from 'react';
import {Modal, StyleSheet, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import UseLevelModal from '../../hooks/UseLevelModal';
import ContributionModal from '../Contribution/ContributionModal';
import Header from '../Header';

const Searchbar = () => {
  const {isModalVisible, changeModalVisible} = UseLevelModal();
  return (
    <View style={styles.container_header}>
      <Header />
      <TouchableOpacity
        style={styles.Icon}
        onPress={() => changeModalVisible(true)}>
        <Icon name="pluscircle" size={40} color="#FFBF1C" />
      </TouchableOpacity>
      <Modal
        transparent={true}
        animationType="fade"
        visible={isModalVisible}
        nRequestClose={() => changeModalVisible(false)}>
        <ContributionModal changeModalVisible={changeModalVisible} />
      </Modal>
    </View>
  );
};

export default Searchbar;

const styles = StyleSheet.create({
  container_header: {
    width: '90%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  Icon: {
    paddingLeft: 10,
  },
});
