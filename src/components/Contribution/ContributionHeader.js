import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ContributionHeader = ({navigation}) => {
  return (
    <View style={styles.header}>
      <Icon
        style={styles.icon}
        name="arrow-left"
        size={28}
        color="#008000"
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
    fontSize: 28,
    fontWeight: '700',
    lineHeight: 20,
    padding: 10,
  },
});
