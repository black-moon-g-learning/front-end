import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useRoute} from '@react-navigation/native';

export const TitleContries = () => {
  const route = useRoute();
  const {item} = route.params;
  return (
    <View>
      <Text style={styles.name}>{item.name}</Text>
    </View>
  );
};
export const TitleListVideos = () => {
  const route = useRoute();
  const {item} = route.params;
  console.log('first', item.name);
  return (
    <View>
      <Text style={styles.name}>{item.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  name: {
    width: '100%',
    fontSize: 23,
    color: '#323643',
    paddingLeft: -15,
    fontFamily: 'Poppins-Bold',
    alignItems: 'center',
  },
});
