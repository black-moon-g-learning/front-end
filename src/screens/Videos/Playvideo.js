import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import YoutubePlayer from 'react-native-youtube-iframe';
import {RecommendVideo} from '../../components/Videos/Listvideos';
import {ErrorMessage} from '../../components/ErrorMessage';

const PlayVideo = ({navigation, route}) => {
  const {item, videos} = route.params;
  const urlAPI = item.url;
  const splitUrl = urlAPI.split(/[=,&]/).slice(1, 2);
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
      <View>
        <Text style={styles.recommend}>RECOMMEND VIDEOS</Text>
      </View>
      <View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={videos}
          horizontal={true}
          ListEmptyComponent={ErrorMessage}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return <RecommendVideo navigation={navigation} item={item} />;
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
    fontSize: 25,
    fontWeight: 'bold',
    color: '#323643',
    paddingBottom: 15,
    textAlign: 'center',
  },
  video: {
    margin: 10,
    height: 210,
    borderRadius: 10,
    borderWidth: 0.8,
    borderColor: '#828282',
    overflow: 'hidden',
  },
  review: {
    marginTop: 30,
    display: 'flex',
    alignItems: 'center',
  },
  recommend: {
    paddingLeft: 10,
    marginTop: 45,
    marginBottom: 20,
    fontSize: 20,
    color: '#323643',
    fontWeight: 'bold',
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
