import React from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const ContributionBtn = () => {
  return (
    <View style={styles.container}>
      <Icon name="pluscircle" size={28} color="#000000" />
    </View>
  );
};

export default ContributionBtn;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
  },
});
