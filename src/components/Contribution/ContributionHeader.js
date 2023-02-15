import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ContributionHeader = ({navigation}) => {
  return (
    <View style={styles.header}>
      <Icon
        name="arrow-left"
        size={30}
        color={'#5FAD41'}
        onPress={navigation.goBack}
      />
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
    fontSize: 22,
    lineHeight: 20,
    padding: 10,
    fontFamily: 'Poppins-Bold',
  },
});
