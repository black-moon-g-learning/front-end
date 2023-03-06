import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {ErrorMessage} from '../../components/ErrorMessage';
import Header from '../../components/Header';
import EarthGifImage from '../../components/Home/Earthgif';
import {ListContinents} from '../../components/Home/ListContinents';
import UseGetdata from '../../hooks/UseContinents';

const Home = ({navigation}) => {
  const API = `continents`;
  const {data, isLoading, isSuccess} = UseGetdata(API);
  console.log('data', data);
  return (
    <View style={styles.container}>
      {isLoading && <ActivityIndicator color="#00ff00" size="large" />}

      {isSuccess && (
        <>
          <Header />
          <EarthGifImage />
          <Text style={styles.titlePage}>Continents </Text>
          <FlatList
            showsVerticalScrollIndicator={false}
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
    flex: 1,
  },
  flatlist: {
    paddingLeft: 10,
  },
  titlePage: {
    fontSize: 27,
    color: '#323643',
    paddingTop: 10,
    paddingLeft: 10,
    fontFamily: 'Poppins-SemiBold',
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
