import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import YoutubePlayer from 'react-native-youtube-iframe';
import Icon from 'react-native-vector-icons/FontAwesome';
const SCREEN_WIDTH = Dimensions.get('screen').width;
const SCREEN_HEIGHT = Dimensions.get('screen').height;
const PlayVideo = ({navigation, route}) => {
  const {item} = route.params;
  const urlAPI = item.url;
  const splitUrl = urlAPI.split(/[=,&]/).slice(1, 2);
  console.log('link n ha', splitUrl);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon
          name="arrow-left"
          size={28}
          color={'#5FAD41'}
          onPress={navigation.goBack}
        />
      </View>
      <View style={styles.video}>
        <YoutubePlayer play={true} videoId={splitUrl} height={230} />
        <Text style={styles.name}>{item.name}</Text>
      </View>
      <View style={styles.review}>
        <TouchableOpacity style={styles.reviewbutton}>
          <Text style={styles.text}>REVIEW HERE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PlayVideo;

const styles = StyleSheet.create({
  container: {
    // margin: 10,
    // alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 20,
    marginBottom: 10,
    backgroundColor: '#FFFFFF',
  },
  name: {
    width: '100%',
    fontSize: 25,
    fontWeight: 'bold',
    color: '#323643',
    paddingBottom: 15,
    textAlign: 'center',
  },
  video: {
    margin: 10,
    // width: '100%',
    borderRadius: 10,
    borderWidth: 0.8,
    borderColor: '#828282',
    // alignItems: 'center',
    // paddingTop: 1,
  },
  review: {
    marginTop: 20,
    display: 'flex',
    alignItems: 'center',
  },
  reviewbutton: {
    width: 200,
    height: 50,
    backgroundColor: '#5FAD41',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {color: '#FFFFFF'},
});
