import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import HYHBCard from '../../components/HYHBpage/HYHBCard';
const HYHBDetail = ({navigation, route}) => {
  const {item} = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Have You Heard Before?</Text>
      </View>
      <HYHBCard item={item} />
    </View>
  );
};

export default HYHBDetail;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    marginBottom:5,
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
