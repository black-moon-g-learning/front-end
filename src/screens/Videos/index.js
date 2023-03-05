import React, {useEffect, useState} from 'react';
import {Continents_URL} from '@env';
import {useQuery} from 'react-query';
import axiosRequest from '../../axios';
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {ErrorMessage} from '../../components/ErrorMessage';
import {ListVideo} from '../../components/Videos/Listvideos';
import UseGetdata from '../../hooks/UseContinents';
import Icon from 'react-native-vector-icons/Feather';
import Header from '../../components/Header';
import useSearch from '../../hooks/useSearch';
import ModalSearch from '../../components/ModalSearch';
const Videos = ({navigation, route, props}) => {
  const {item} = route.params;
  const API = `countries-topics/${item.id}/videos`;
  const {data, isLoading, isError, isSuccess} = UseGetdata(API);
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
});
