import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import UseContinents from '../../hooks/UseContinents';
import Header from '../../components/Header';
import EarthGifImage from '../../components/Earthgif';
import ListContinents from '../../components/ListContinents';
const Home = ({navigation}) => {
  const {data, isLoading, isSuccess} = UseContinents([]);

  const renderEmpty = () => {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyMessageStyle}>Empty</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {isLoading && <Text>Loading...</Text>}

      {isSuccess && (
        <>
          <Header />
          <EarthGifImage />
          <Text style={styles.titlePage}>Continents</Text>
          <FlatList
            style={styles.flatlist}
            ListEmptyComponent={renderEmpty}
            keyExtractor={item => item.id}
            data={data.data}
            renderItem={({item}) => {
              return <ListContinents item={item} navigation={navigation} />;
            }}
          />
        </>
      )}
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingRight: 10,
    width: '100%',
  },
  flatlist: {
    paddingLeft: 10,
    marginTop: 10,
  },
  titlePage: {
    fontSize: 27,
    color: '#323643',
    paddingTop: 10,
    paddingLeft: 10,
    fontWeight: 'bold',
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
