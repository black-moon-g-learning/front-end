import React from 'react';
import {StyleSheet, View} from 'react-native';
import ContributionForm from '../../components/Contribution/ContributionForm';

const Contribution = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ContributionForm navigation={navigation} />
    </View>
  );
};

export default Contribution;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flex: 1,
  },
});
