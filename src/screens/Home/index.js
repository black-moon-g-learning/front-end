import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import EarthGifImage from '../../components/Earthgif';
import {ErrorMessage} from '../../components/ErrorMessage';
import Header from '../../components/Header';
import ListContinents from '../../components/ListContinents';
import UseContinents from '../../hooks/UseContinents';

const Home = ({navigation}) => {
  const {data, isLoading, isSuccess} = UseContinents([]);

  return (
    <View style={styles.container}>
      {isLoading && <ActivityIndicator color="#00ff00" size="large" />}

      {isSuccess && (
        <>
          <Header />
          <EarthGifImage />
          <Text style={styles.titlePage}>Continents</Text>
          <FlatList
            style={styles.flatlist}
            ListEmptyComponent={ErrorMessage}
            keyExtractor={item => item.id}
            data={data.data}
            renderItem={({item}) => {
              return <ListContinents navigation={navigation} item={item} />;
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
