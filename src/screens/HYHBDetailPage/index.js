import React from 'react';
import {StyleSheet, View} from 'react-native';
import HYHBCard from '../../components/HYHBpage/HYHBCard';
const HYHBDetail = ({route}) => {
  const {item} = route.params;
  return (
    <View style={styles.container}>
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
});
