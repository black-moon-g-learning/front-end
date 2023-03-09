import {Continents_URL} from '@env';
import React from 'react';

import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import axiosRequest from '../../axios';
export const ListVideo = ({navigation, item, videos}) => {
  const VideoWatched = () => {
    axiosRequest
      .post(`${Continents_URL}/videos/${item.id}/store-history`)
      .then(response => {
        console.log('successful => ', response.data);
      })
      .catch(error => console.log(error.response.data));
  };

  return (
    <TouchableOpacity
      style={styles.item}
      key={item}
      onPressIn={VideoWatched}
      onPress={() => navigation.navigate('playvideo', {item, videos})}>
      <Image source={{uri: item.image}} style={styles.img} />
      <View>
        <Text style={styles.ContinentsName}>{item.name}</Text>
        <Text style={styles.ContinentsDetail}>{item.author}</Text>
        <Text style={styles.ContinentsDetail}>Publish: {item.publish}</Text>
      </View>
      {item.watched === 1 && (
        <TouchableOpacity
          style={styles.modal_video_watched}
          onPress={() => navigation.navigate('playvideo', {item, videos})}>
          <Text style={styles.text_video_watched}>Watched</Text>
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
};

export const RecommendVideo = ({navigation, item, videos}) => {
  return (
    <TouchableOpacity
      style={styles.itemRecommend_container}
      key={item}
      onPress={() =>
        navigation.replace('playvideo', {item: item, videos: videos})
      }>
      <View style={styles.item_RCMVideos}>
        <Image source={{uri: item.image}} style={styles.recommend_image} />
        <View>
          <Text style={styles.recommend_name}>{item.name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    height: 120,
    marginTop: 15,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#5FAD41',
    marginBottom: 10,
    alignItems: 'center',
  },
  itemRecommend_container: {
    width: 190,
    height: 170,
  },
  item_RCMVideos: {
    paddingTop: 5,
    textAlign: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  recommend_image: {
    width: 170,
    height: 100,
    borderRadius: 10,
  },
  img: {
    margin: 20,
    width: 140,
    height: 100,
    paddingRight: 10,
    borderRadius: 10,
  },
  ContinentsName: {
    fontSize: 16,
    color: '#323643',
    width: '100%',
    fontFamily: 'Poppins-Bold',
  },
  recommend_name: {
    fontSize: 13,
    color: '#323643',
    width: '100%',
    paddingTop: 15,
    fontFamily: 'Poppins-Bold',
  },
  ContinentsDetail: {
    fontSize: 13,
    color: '#323643',
    paddingTop: 5,
    fontFamily: 'Poppins-Regular',
  },
  modal_video_watched: {
    position: 'absolute',
    backgroundColor: '#00000959',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  text_video_watched: {
    fontSize: 20,
    color: 'white',
    fontWeight: '700',
    alignSelf: 'center',
    marginRight: '50%',
  },
});
