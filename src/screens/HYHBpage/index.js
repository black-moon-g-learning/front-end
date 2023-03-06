import React from 'react';
import {ActivityIndicator, FlatList, StyleSheet, View} from 'react-native';
import Searchbar from '../../components/DetailContryPage/Searchbar';
import {ErrorMessage} from '../../components/ErrorMessage';
import NewsCard from '../../components/HYHBpage/NewsCard';
import UseGetdata from '../../hooks/UseContinents';
import Emty from '../../components/Popup/Emty';

const News = () => {
  const API = `information`;
  const {data, isLoading, isSuccess} = UseGetdata(API);
  return (
    <View style={styles.container}>
      {isLoading && <ActivityIndicator color="#00ff00" size="large" />}
      {isSuccess && (
        <>
          <Searchbar />
          <FlatList
            showsVerticalScrollIndicator={false}
            style={styles.flatlist}
            ListEmptyComponent={Emty}
            keyExtractor={item => item.id}
            data={data.data}
            renderItem={({item}) => {
              return <NewsCard item={item} />;
            }}
          />
        </>
      )}
    </View>
  );
};

export default News;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
  flatlist: {
    marginTop: 10,
    padding: 10,
  },
});
