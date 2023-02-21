import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const NomarlLevel = ({item}) => {
  return (
    <TouchableOpacity style={styles.container} key={item.id}>
      <View style={styles.easyContainer}>
        <Text style={styles.level}>{item.name}</Text>
        <Text numberOfLines={6} style={styles.desc}>
          {item.description}
        </Text>
      </View>
      <Image
        style={styles.img}
        source={require('../../assets/images/nomarl.png')}
      />
    </TouchableOpacity>
  );
};

export default NomarlLevel;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-around',
  },
  easyContainer: {
    position: 'relative',
    width: '60%',
    backgroundColor: '#5FAD41',
    borderRadius: 15,
    margin: 10,
    padding: 10,
    left: 30,
    height: 189,
  },
  level: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 24,
    lineHeight: 20,
    fontWeight: '700',
    fontFamily: 'Poppins-Bold',
    padding: 10,
  },
  desc: {
    color: '#000000',
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    fontWeight: '700',
    lineHeight: 20,
    textAlign: 'justify',
    padding: 10,
  },
  img: {
    position: 'absolute',
    alignItems: 'flex-start',
    left: 15,
    bottom: -10,
  },
});
