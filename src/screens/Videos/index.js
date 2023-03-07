import React, {useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {ErrorMessage} from '../../components/ErrorMessage';
import Header from '../../components/Header';
import ModalSearch from '../../components/ModalSearch';
import {ListVideo} from '../../components/Videos/Listvideos';
import UseGetdata from '../../hooks/UseContinents';
import useSearch from '../../hooks/useSearch';

const Videos = ({navigation, route, props}) => {
  const {item} = route.params;
  const API = `countries-topics/${item.id}/videos`;
  const {data, isLoading} = UseGetdata(API);
  const {searchValue, setSearchValue, searchResult, setSearchResult} =
    useSearch(API);
  const [DataVideo, setDataVideo] = useState(null);

  const handleSearch = value => {
    console.log('searching for', value);
    setSearchValue(value);
    if (!value) {
      setDataVideo(null);
    }
  };

  const handleResultPress = item => {
    setSearchResult(null);
    setDataVideo(item);
    if (!item) {
      setDataVideo(null);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Header value={searchValue} onChangeText={handleSearch} />
      </View>
      <>
        {isLoading ? (
          <ActivityIndicator color="#00ff00" size="large" />
        ) : (
          <>
            {searchResult ? (
              <FlatList
                style={{width: '100%'}}
                showsVerticalScrollIndicator={false}
                data={searchResult.data}
                ListEmptyComponent={ErrorMessage}
                keyExtractor={item => item.id.toString()}
                renderItem={({item}) => {
                  return (
                    <ModalSearch
                      item={item}
                      onPress={() => handleResultPress(item)}
                    />
                  );
                }}
                ListHeaderComponent={
                  searchResult.data.length === 0 && (
                    <Text style={styles.errorTitle}>Not found </Text>
                  )
                }
              />
            ) : (
              <FlatList
                showsVerticalScrollIndicator={false}
                data={DataVideo ? [DataVideo] : data.data}
                ListEmptyComponent={ErrorMessage}
                keyExtractor={item => item.id.toString()}
                renderItem={({item}) => {
                  return (
                    <ListVideo
                      navigation={navigation}
                      videos={data.data}
                      item={item}
                    />
                  );
                }}
              />
            )}
          </>
        )}
      </>
    </View>
  );
};

export default Videos;
const styles = StyleSheet.create({
  container: {
    margin: 10,
    fontSize: 18,
    flex: 1,
  },
  top: {
    paddingBottom: 20,
  },
  name: {
    width: '100%',
    fontSize: 23,
    fontFamily: 'Poppins-Bold',
    color: '#323643',
    paddingBottom: 15,
    paddingLeft: 25,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#323643',
    marginTop: 15,
    marginBottom: 15,
    paddingLeft: 10,
  },
  errorTitle: {
    color: '#323643',
    fontSize: 17,
    fontFamily: 'Poppins-Medium',
    width: '100%',
    textAlign: 'center',
  },
});
