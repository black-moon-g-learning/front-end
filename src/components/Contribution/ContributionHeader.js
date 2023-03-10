import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ContributionHeader = ({navigation}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Contribution</Text>
    </View>
  );
};

export default ContributionHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
  },
  title: {
    textAlign: 'center',
    color: '#000000',
    fontSize: 30,
    lineHeight: 20,
    padding: 30,
    fontFamily: 'Poppins-Bold',
  },
});
