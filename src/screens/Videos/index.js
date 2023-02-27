import React, {useEffect, useState} from 'react';
import {Continents_URL} from '@env';
import axios from 'axios';
import {useQuery} from 'react-query';
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

const Videos = ({navigation, route, props}) => {
  const {item} = route.params;
  const API = `countries-topics/${item.id}/videos`;
  const {data, isLoading, isError, isSuccess} = UseGetdata(API);
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const [DataVideo, setDataVideo] = useState(null);

  useEffect(() => {
    const search = async () => {
      try {
        const result = await axios.get(
          `${Continents_URL}/countries-topics/${item.id}/videos?s=${searchValue}`,
        );
        setSearchResult(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    if (searchValue.length >= 2) {
      search();
    } else {
      setSearchResult(null);
    }
  }, [searchValue]);

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
        <View style={styles.container_header}>
          <TouchableOpacity>
            <Image
              style={styles.character}
              source={require('../../assets/images/character.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.searchBar}>
            <TextInput
              onChangeText={handleSearch}
              value={searchValue}
              style={styles.input}
              placeholder="Search..."
            />
            <Icon name="search" size={25} color={'black'} />
          </TouchableOpacity>
        </View>
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
                    <View>
                      <TouchableOpacity
                        onPress={() => handleResultPress(item)}
                        style={{
                          width: '60%',
                          alignItems: 'center',
                          display: 'flex',
                          flexDirection: 'row',
                          justifyContent: 'space-around',
                        }}>
                        <Icon name="search" size={20} color={'red'} />
                        <Text
                          style={{
                            color: '#323643',
                            fontSize: 17,
                            fontFamily: 'Poppins-Medium',
                          }}>
                          {item.name}
                        </Text>
                      </TouchableOpacity>
                    </View>
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
  container_header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  input: {
    width: '75%',
    height: 40,
    borderRadius: 10,
    backgroundColor: '#F4F1F1',
    paddingLeft: 10,
  },
  searchBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 46,
    padding: 10,
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 20,
  },
  character: {
    width: 40.38,
    height: 45,
  },
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
