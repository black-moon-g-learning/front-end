import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
const NewsCard = ({item}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={{uri: item.image}} />
      <View style={styles.infor}>
        <View style={styles.author}>
          <Text style={styles.txt}>{item.public}</Text>
          <View style={styles.devide} />
          <Text numberOfLines={1} style={styles.txt}>
            {item.author}
          </Text>
        </View>
        <View>
          <Text numberOfLines={2} style={styles.title}>
            {item.title}
          </Text>
          <Text numberOfLines={2} style={styles.txt}>
            {item.description}
          </Text>
          <TouchableOpacity style={styles.btn}>
            <Text
              style={styles.btnTxt}
              onPress={() => navigation.navigate('News', {item})}>
              Read more
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default NewsCard;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 198,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#5FAD41',
    borderRadius: 10,
    marginBottom: 10,
  },
  infor: {
    width: 215,
  },
  author: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 5,
  },
  devide: {
    width: 1,
    height: 18,
    backgroundColor: '#FFFFFF',
    marginLeft: 10,
    marginRight: 10,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 18,
    marginBottom: 5,
  },
  txt: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 16,
    marginBottom: 5,
  },
  btn: {
    width: 100,
    height: 33,
    padding: 5,
    backgroundColor: '#FFC845',
    borderRadius: 10,
    marginTop: 10,
  },
  btnTxt: {
    color: '#012030',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 16,
    padding: 5,
    textAlign: 'center',
  },
  img: {
    width: 130,
    height: 125,
    borderRadius: 10,
  },
});
