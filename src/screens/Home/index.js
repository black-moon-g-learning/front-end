import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
} from 'react-native';
import {ErrorMessage} from '../../components/ErrorMessage';
import EarthGifImage from '../../components/Home/Earthgif';
import {ListContinents} from '../../components/Home/ListContinents';
import UseGetdata from '../../hooks/UseContinents';

const Home = ({navigation}) => {
  const API = `continents`;
  const {data, isLoading, isSuccess} = UseGetdata(API);
  console.log('data', data);
  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <ActivityIndicator color="#00ff00" size="large" />
      ) : (
        <View>
          {isSuccess && (
            <>
              <EarthGifImage />
              <Text style={styles.titlePage}>Continents </Text>
              <FlatList
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
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
      )}
    </SafeAreaView>
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
    fontSize: 23,
    color: '#323643',
    paddingTop: 13,
    paddingLeft: 13,
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
