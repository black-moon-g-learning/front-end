import React from 'react';
import {Dimensions, View, Image, StyleSheet} from 'react-native';
const windowHeight = Dimensions.get('window').width * (9.65 / 18);

const width = Dimensions.get('window').width;
const EarthGifImage = () => {
  return (
    <View style={Styles.container}>
      <Image
        resizeMode="cover"
        style={Styles.gif}
        source={require('../../assets/images/earth.gif')}
      />
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    width: width,
    height: windowHeight,
    alignContent: 'center',
    paddingLeft: 10,
    paddingRight: 10,

    borderRadius: 10,
  },
  gif: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    overlayColor: 'white',
  },
});

export default EarthGifImage;
