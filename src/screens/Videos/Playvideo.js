import React, {useEffect} from 'react';
import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import {ErrorMessage} from '../../components/ErrorMessage';
import {RecommendVideo} from '../../components/Videos/Listvideos';
import Player from '../../components/VideoCustom/PlayVideoCustom';
const windowHeight = Dimensions.get('window').width * (10 / 16);
const windowWidth = Dimensions.get('window').width;
const PlayVideo = ({navigation, route}) => {
  const {item, videos} = route.params;
  const urlAPI = item.url;
  const splitUrl = item.url.split(/[=,&]/).slice(1, 2);
  const checkURL = item.url.includes('youtube');
  useEffect(() => {
    return () => {
      // stop video when component unmounts
      YoutubePlayer.stopVideo();
    };
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.video}>
        {checkURL ? (
          <YoutubePlayer play={true} videoId={splitUrl} height={230} />
        ) : (
          <Player urlVideo={urlAPI} />
        )}
        <Text style={styles.name}>{item.name}</Text>
      </View>
      <View style={styles.review}>
        <TouchableOpacity
          style={styles.reviewbutton}
          onPress={() =>
            navigation.navigate('review', {item, splitUrl, videos})
          }>
          <Text style={styles.text}>REVIEW HERE</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.recommend}>Recommend videos</Text>
      </View>
      <View>
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
    marginTop: 10,
    width: '100%',
    fontSize: 20,
    color: '#323643',
    paddingBottom: 10,
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
    // borderWidth: 1,
  },
  video: {
    marginTop: 20,
    margin: 10,
    height: 280,
    borderRadius: 10,
    borderWidth: 0.8,
    borderColor: '#F2F2F2',
    overflow: 'hidden',
  },
  review: {
    // marginTop: 10,
    display: 'flex',
    alignItems: 'center',
    // borderWidth: 1,
  },
  recommend: {
    paddingLeft: 10,
    marginTop: 20,
    marginBottom: 10,
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
