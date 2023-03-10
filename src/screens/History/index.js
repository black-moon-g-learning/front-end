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
} from 'react-native';
import UseGetdata from '../../hooks/UseContinents';
import {ErrorMessage} from './../../components/ErrorMessage';

const HistoryVideo = () => {
  const navigation = useNavigation();
  const API = `watched-history`;
  const {data, isLoading, isSuccess} = UseGetdata(API);

  const AllvideoWatched = ({item, videos}) => {
    return (
      <TouchableOpacity
        style={styles.item}
        key={item}
        onPress={() => navigation.navigate('playvideo', {item, videos})}>
        <TouchableOpacity>
          <Image source={{uri: item.image}} style={styles.img} />
          <Text style={styles.time}>{item.time}</Text>
        </TouchableOpacity>
        <View>
          <Text style={styles.ContinentsName}>{item.name}</Text>
          <Text style={styles.ContinentsDetail}>{item.author}</Text>
          <Text style={styles.ContinentsDetail}>Publish: {item.publish}</Text>
          <Text style={styles.ContinentsDetail}>
            Watched: {item.watched_at}
          </Text>
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

  return (
    <>
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
    </>
  );
};

export default HistoryVideo;

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
  time: {
    position: 'absolute',
    alignSelf: 'flex-end',
    marginTop: '53%',
    marginRight: '53%',
    color: 'black',
    fontWeight: '500',
    fontSize: 16,
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
