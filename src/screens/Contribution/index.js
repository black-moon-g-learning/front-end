import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import ContributionForm from '../../components/Contribution/ContributionForm';

const Contribution = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <ContributionForm />
    </ScrollView>
  );
};

export default Contribution;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flex: 1,
  },
});
