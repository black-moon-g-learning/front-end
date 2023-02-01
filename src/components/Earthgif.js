import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

const EarthGifImage = () => {
  return (
    <View style={Styles.container}>
      <Image
        style={Styles.gif}
        source={{
          uri: 'https://i.chzbgr.com/full/6855613952/h835E9CAA/nasa-earth-at-nigh',
        }}
      />
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    marginTop: 20,
    paddingLeft: 10,
    borderRadius: 10,
  },
  gif: {width: '100%', height: 190, borderRadius: 10, overlayColor: 'white'},
});

export default EarthGifImage;
