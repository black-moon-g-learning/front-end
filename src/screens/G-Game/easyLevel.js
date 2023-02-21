import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const EasyLevel = ({item}) => {
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
        source={require('../../assets/images/easy.png')}
      />
    </TouchableOpacity>
  );
};

export default EasyLevel;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-around',
  },
  easyContainer: {
    position: 'relative',
    width: '60%',
    backgroundColor: '#BFAE48',
    borderRadius: 15,
    margin: 10,
    padding: 10,
    left: 30,
  },
  level: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 24,
    lineHeight: 20,
    fontWeight: '700',
    fontFamily: 'Poppins-Bold',
    paddingTop: 5,
  },
  desc: {
    color: '#000000',
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    fontWeight: '700',
    lineHeight: 20,
    textAlign: 'justify',
    padding: 20,
  },
  img: {
    position: 'absolute',
    alignItems: 'flex-start',
    left: 30,
    bottom: -15,
  },
});
