import React from 'react';
import {StyleSheet} from 'react-native';

const UseLevelModal = () => {
  const [isModalVisible, setisModalVisible] = React.useState(false);
  const changeModalVisible = bool => {
    setisModalVisible(bool);
  };
  return {
    isModalVisible,
    setisModalVisible,
    changeModalVisible,
  };
};

export default UseLevelModal;

const styles = StyleSheet.create({});
