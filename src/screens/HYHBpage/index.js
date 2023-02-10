import React from 'react';
import {StyleSheet, View, FlatList, ActivityIndicator} from 'react-native';
import Searchbar from '../../components/DetailContryPage/Searchbar';
import NewsCard from '../../components/HYHBpage/NewsCard';
import {ErrorMessage} from '../../components/ErrorMessage';
import UseNews from '../../hooks/UseNews';
import ContributionBtn from '../../components/Contribution/ConBtn';
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
            ListFooterComponent={ContributionBtn}
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
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 10,
    position: 'relative',
  },
  flatlist: {
    marginTop: 20,
    padding: 10,
  },
});
