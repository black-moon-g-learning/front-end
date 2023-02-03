import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

const TopicCard = ({item}) => {
  return (
    <TouchableOpacity style={styles.card}>
      <View style={styles.imgBgd}>
        <Image style={styles.img} source={{uri: item.image}} />
      </View>
      <Text style={styles.title}>{item.name}</Text>
    </TouchableOpacity>
  );
};

export default TopicCard;

const styles = StyleSheet.create({
  card: {
    margin: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: 160,
    height: 147,
    backgroundColor: '#5FAD41',
    borderRadius: 10,
  },
  img: {
    width: 131,
    height: 84,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 18,
  },
  imgBgd: {
    backgroundColor: '#FFFFFF',
    width: 131,
    height: 84,
  },
});
