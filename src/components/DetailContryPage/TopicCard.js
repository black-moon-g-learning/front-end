import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const TopicCard = ({item, navigation}) => {
  const handlePress = () => {
    navigation.navigate('listvideo', {item});
    navigation.navigate('header', {item});
    navigation.navigate('videos', {item});
  };
  return (
    <TouchableOpacity style={styles.TopicCards_container} onPress={handlePress}>
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
    width: 190,
    height: 160,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    paddingBottom: 10,
    paddingTop: 5,
  },
  TopicCards_item: {
    margin: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    width: 175,
    height: 145,
    backgroundColor: '#5FAD41',
    borderRadius: 20,
  },
  TopicCards_img: {
    width: 150,
    height: 90,
    borderRadius: 15,
  },
  TopicCards_name: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 18,
    textAlign: 'center',
    paddingBottom: 7,
  },
  imgBgd: {
    backgroundColor: '#FFFFFF',
    width: 131,
    height: 84,
  },
});
