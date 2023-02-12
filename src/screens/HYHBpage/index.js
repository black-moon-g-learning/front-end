import React from 'react';
import {StyleSheet, View, FlatList, ActivityIndicator} from 'react-native';
import Searchbar from '../../components/DetailContryPage/Searchbar';
import NewsCard from '../../components/HYHBpage/NewsCard';
import {ErrorMessage} from '../../components/ErrorMessage';
import UseNews from '../../hooks/UseNews';
const News = () => {
  const {data, isLoading, isSuccess} = UseNews([]);
  return (
    <View style={styles.container}>
      {isLoading && <ActivityIndicator color="#00ff00" size="large" />}

      {isSuccess && (
        <>
          <Searchbar />
          <FlatList
            showsVerticalScrollIndicator={false}
            style={styles.flatlist}
            ListEmptyComponent={ErrorMessage}
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
