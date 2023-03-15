import React from 'react';
import {ActivityIndicator, FlatList, StyleSheet, View} from 'react-native';
import Searchbar from '../../components/DetailContry/Searchbar';
import NewsCard from '../../components/HYHB/NewsCard';
import Emty from '../../components/Popup/Emty';
import UseGetdata from '../../hooks/UseContinents';

const News = () => {
  const API = `information`;
  const {data, isLoading, isSuccess} = UseGetdata(API);
  const [filterData, setFilterData] = React.useState([]);
  const information = isSuccess ? data.data : null;
  const filterInformation = Country => {
    if (Country === null) {
      setFilterData(information);
    } else {
      const filtered = information.filter(
        country => country.country === Country,
      );
      setFilterData(filtered);
    }
  };
  // console.log('filter data', isSuccess ? data.data.length : null);
  return (
    <View style={styles.container}>
      {isLoading && <ActivityIndicator color="#00ff00" size="large" />}
      {isSuccess && (
        <>
          <Searchbar filterInformation={filterInformation} />
          <FlatList
            showsVerticalScrollIndicator={false}
            style={styles.flatlist}
            ListEmptyComponent={Emty}
            keyExtractor={item => item.id}
            data={filterData.length ? filterData : data.data}
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
