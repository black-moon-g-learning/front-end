import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import OtherCard from './OtherCard';
const HYHBCard = ({item}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>{item.title}</Text>
      <View style={styles.author}>
        <Text style={styles.txt}>Time: {item.public}</Text>
        <Text style={styles.txt}>Author: {item.author}</Text>
      </View>
      <View style={styles.desc}>
        <Text style={styles.content}>{item.description}</Text>
      </View>
      <View style={styles.imgContainer}>
        <Image
          style={styles.img}
          source={{
            uri: item.image,
          }}
        />
      </View>
      <OtherCard country={item.country} id={item.id} />
    </ScrollView>
  );
};

export default HYHBCard;

const styles = StyleSheet.create({
  title: {
    padding: 10,
    fontSize: 20,
    lineHeight: 20,
    color: '#000000',
    fontFamily: 'Poppins-Medium',
    width: '100%',
    textAlign: 'justify',
  },
  txt: {
    fontSize: 15,
    lineHeight: 20,
    color: '#000000',
    fontFamily: 'Poppins-Italic',
  },
  desc: {
    width: '100%',
  },
  content: {
    padding: 10,
    width: '100%',
    fontSize: 18,
    lineHeight: 20,
    color: '#000000',
    textAlign: 'justify',
  },
  author: {
    display: 'flex',
    alignItems: 'flex-start',
    padding: 10,
    borderBottomColor: '#008000',
    borderBottomWidth: 1,
    margin: 10,
  },
  img: {
    width: '100%',
    height: 213,
  },
  imgContainer: {
    alignItems: 'center',
    padding: 10,
  },
});
