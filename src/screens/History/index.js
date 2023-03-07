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
  console.log('data => ', data);

  const AllvideoWatched = ({item, videos}) => {
    return (
      <TouchableOpacity
        style={styles.item}
        key={item}
        onPress={() => navigation.navigate('playvideo', {item, videos})}>
        <Image source={{uri: item.image}} style={styles.img} />
        <View>
          <Text style={styles.ContinentsName}>{item.name}</Text>
          <Text style={styles.ContinentsDetail}>{item.author}</Text>
          <Text style={styles.ContinentsDetail}>Publish: {item.publish}</Text>
          <Text style={styles.ContinentsDetail}>
            Watched: {item.watched_at}
          </Text>
        </View>
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
            console.log('item => ', item.item);
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
});
