import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

const EarthGifImage = () => {
  return (
    <View style={Styles.container}>
      <Image
        style={Styles.gif}
        source={require('../../assets/images/earth.gif')}
      />
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    paddingLeft: 10,
    borderRadius: 10,
  },
  gif: {width: '100%', height: 190, borderRadius: 10, overlayColor: 'white'},
});

export default EarthGifImage;
