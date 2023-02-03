import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';
import TopicCard from '../components/DetailContryPage/TopicCard';
import useTopics from '../hooks/useTopics';
import TopicTitle from '../components/DetailContryPage/TopicTitle';
import MapArea from '../components/DetailContryPage/MapArea';
const DetailCountryPage = () => {
  const {data, isLoading, isSuccess} = useTopics([]);
  const renderEmpty = () => {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyMessageStyle}>Empty</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      {isLoading && <ActivityIndicator size={30} />}

      {isSuccess && (
        <>
          <TopicTitle />
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.flatlist}
            ListEmptyComponent={renderEmpty}
            keyExtractor={item => item.topicId}
            data={data.data}
            renderItem={({item}) => {
              return <TopicCard item={item} />;
            }}
          />
          <MapArea />
        </>
      )}
    </View>
  );
};

export default DetailCountryPage;

const styles = StyleSheet.create({
  flatlist: {
    width: '100%',
    //height: '60%',
  },
  emptyMessageStyle: {
    textAlign: 'center',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
  },
});
