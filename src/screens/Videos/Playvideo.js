import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import {ErrorMessage} from '../../components/ErrorMessage';
import {RecommendVideo} from '../../components/Videos/Listvideos';

const PlayVideo = ({navigation, route}) => {
  const {item, videos} = route.params;
  console.log(item);
  const urlAPI = item.url;
  const splitUrl = urlAPI.split(/[=,&]/).slice(1, 2);
  return (
    <View style={styles.container}>
      <View style={styles.video}>
        <YoutubePlayer play={true} videoId={splitUrl} height={230} />
        <Text style={styles.name}>{item.name}</Text>
      </View>
      <View style={styles.review}>
        <TouchableOpacity style={styles.reviewbutton}>
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
    width: '100%',
    fontSize: 20,
    color: '#323643',
    paddingBottom: 10,
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
  },
  video: {
    margin: 10,
    height: 280,
    borderRadius: 10,
    borderWidth: 0.8,
    borderColor: '#F2F2F2',
    overflow: 'hidden',
  },
  review: {
    display: 'flex',
    alignItems: 'center',
  },
  recommend: {
    paddingLeft: 10,
    marginTop: 30,
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
