import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const TopicCard = ({item, navigation}) => {
  return (
    <TouchableOpacity
      style={styles.TopicCards_container}
      onPress={() => navigation.navigate('videos', {item})}>
      <View style={styles.TopicCards_item}>
        <Image
          style={styles.TopicCards_img}
          source={{
            uri: item.image,
          }}
        />
        <Text style={styles.TopicCards_name}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TopicCard;

const styles = StyleSheet.create({
  TopicCards_container: {
    width: 180,
    height: 170,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  TopicCards_item: {
    margin: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    width: 160,
    height: 147,
    backgroundColor: '#5FAD41',
    borderRadius: 10,
  },
  TopicCards_img: {
    width: 131,
    height: 84,
  },
  TopicCards_name: {
    color: '#000',
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 18,
    textAlign: 'center',
  },
  imgBgd: {
    backgroundColor: '#FFFFFF',
    width: 131,
    height: 84,
  },
});
