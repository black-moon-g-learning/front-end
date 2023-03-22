import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import UseGetdata from '../../hooks/UseContinents';
import {ErrorMessage} from './../../components/ErrorMessage';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const MAX_LENGTH = (width * 0.6) / 6;
const MAX_LENGTH2 = (width * 0.6) / 6;
const HistoryVideo = () => {
  const navigation = useNavigation();
  const API = `watched-history`;
  const {data, isLoading, isSuccess} = UseGetdata(API);

  const AllvideoWatched = ({item, videos}) => {
    const name =
      item.name.length > MAX_LENGTH
        ? `${item.name.slice(0, MAX_LENGTH)}...`
        : item.name;
    const watched =
      item.watched_at.length > MAX_LENGTH
        ? `${item.watched_at.slice(0, MAX_LENGTH)}...`
        : item.watched_at;
    return (
      <TouchableOpacity
        style={styles.item}
        key={item}
        onPress={() => navigation.navigate('playvideo', {item, videos})}>
        <Image source={{uri: item.image}} style={styles.img} />

        <View style={styles.des}>
          <Text style={styles.ContinentsName}>{name}</Text>
          <Text style={styles.ContinentsDetail}>{item.author}</Text>
          <Text style={styles.ContinentsDetail}>Publish: {item.publish}</Text>
          <Text style={styles.ContinentsDetail}>Watched: {watched}</Text>
        </View>
        {item.watched === 1 && (
          <TouchableOpacity
            style={styles.modal_video_watched}
            onPress={() => navigation.navigate('playvideo', {item, videos})}>
            <View style={styles.modal_watched}>
              <Text style={styles.text_video_watched}>Watched</Text>
              <Text style={styles.time}>{item.time}</Text>
            </View>
          </TouchableOpacity>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {isLoading && <ActivityIndicator color="#00ff00" size="large" />}

      {isSuccess && (
        <FlatList
          style={styles.flatlist}
          ListEmptyComponent={ErrorMessage}
          data={data.data}
          keyExtractor={item => item.id}
          renderItem={item => {
            return <AllvideoWatched item={item.item} videos={data.data} />;
          }}
        />
      )}
    </View>
  );
};

export default HistoryVideo;

export const styles = StyleSheet.create({
  container: {
    margin: 10,
    fontSize: 18,
    flex: 1,
  },
  item: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 130,
    marginTop: 1,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#5FAD41',
    // marginBottom: 10,
    alignItems: 'center',
    opacity: 0.9,
    elevation: 10,
    backgroundColor: '#FEFEFE',
    marginBottom: '5%',
  },
  des: {
    width: '57%',
    // borderWidth: 1,
  },
  img: {
    width: '37%',
    height: 100,
    paddingRight: 10,
    borderRadius: 10,
    marginLeft: '2%',
  },
  ContinentsName: {
    fontSize: 13,
    color: '#323643',
    width: '90%',
    fontFamily: 'Poppins-Bold',
  },
  ContinentsDetail: {
    fontSize: 12,
    color: '#323643',
    paddingTop: 5,
    fontFamily: 'Poppins-Regular',
  },
  modal_video_watched: {
    position: 'absolute',
    backgroundColor: '#00000959',
    width: '36%',
    height: 100,
    // margin: 20,
    marginLeft: '2%',
    borderRadius: 10,
    justifyContent: 'center',
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
  imggroup: {
    width: '39%',
    height: 100,
    paddingRight: 10,
    borderRadius: 10,
    marginLeft: '2%',
  },

  images: {
    width: '100%',
    height: '85%',
    borderRadius: 10,

    // borderWidth: 1,
  },

  recommend_name: {
    fontSize: 13,
    color: '#323643',
    width: '100%',
    paddingTop: 15,
    fontFamily: 'Poppins-Bold',
  },

  time: {
    fontSize: 20,
    color: 'white',
    fontWeight: '700',
    alignSelf: 'center',
  },

  modal_watched: {
    width: '100%',
    height: 70,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  text_video_watched: {
    fontSize: 20,
    color: 'white',
    fontWeight: '700',
    alignSelf: 'center',
  },
});
