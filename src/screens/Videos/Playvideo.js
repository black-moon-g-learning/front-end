import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import YouTube from 'react-native-youtube-iframe';
import {ErrorMessage} from '../../components/ErrorMessage';
import {RecommendVideo} from '../../components/Videos/Listvideos';
import Player from '../../components/VideoCustom/PlayVideoCustom';
const windowHeight = Dimensions.get('window').width * (10 / 18);
const windowHeight2 = Dimensions.get('window').width * (9.9 / 18);

const windowWidth = Dimensions.get('window').width;
const PlayVideo = ({navigation, route}) => {
  const {item, videos} = route.params;
  const urlAPI = item.url;
  console.log(urlAPI);
  const checkURL = item.url.includes('g-learning');

  useEffect(() => {
    return () => {
      YouTube.stopVideo();
    };
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.video}>
        {checkURL ? (
          <Player urlVideo={urlAPI} />
        ) : (
          <YouTube
            play={true}
            videoId={urlAPI}
            height={windowHeight}
            width={windowWidth}
          />
        )}
      </View>
      <Text style={styles.name}>{item.name}</Text>
      <View style={styles.review}>
        <TouchableOpacity
          style={styles.reviewbutton}
          onPress={() => navigation.navigate('review', {item, urlAPI, videos})}>
          <Text style={styles.text}>REVIEW HERE</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.rcmvideos}>
        <View>
          <Text style={styles.recommend}>Recommend videos</Text>
        </View>
        <View style={styles.flatlistRCM}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={videos}
            horizontal={true}
            ListEmptyComponent={ErrorMessage}
            keyExtractor={item => item.id}
            renderItem={({item}) => {
              return (
                <RecommendVideo
                  navigation={navigation}
                  item={item}
                  videos={videos}
                />
              );
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default PlayVideo;

const styles = StyleSheet.create({
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
    fontSize: 20,
    color: '#323643',
    paddingBottom: 10,
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
  },
  video: {
    marginTop: '1%',
    margin: 10,
    height: windowHeight2,
    borderRadius: 10,
    borderWidth: 0.8,
    borderColor: '#F2F2F2',
    overflow: 'hidden',
  },
  review: {
    marginTop: '2%',
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1%',
  },
  flatlistRCM: {
    alignItems: 'center',
    justifyContent: 'center',
    width: (windowWidth * 3) / 3,
  },
  recommend: {
    paddingLeft: 10,
    marginTop: 20,
    marginBottom: '2%',
    fontSize: 21,
    color: '#323643',
    fontFamily: 'Poppins-Bold',
  },
  reviewbutton: {
    width: 200,
    height: 50,
    backgroundColor: '#5FAD41',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {color: '#FFFFFF', fontFamily: 'Poppins-Bold'},
});
