import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Continents_URL} from '@env';

import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
// import Icon from 'react-native-vector-icons/Feather';
import {useRoute} from '@react-navigation/native';
import {ItemCountries, ItemPopular} from '../../components/Countries/Coutries';
import {ErrorMessage} from '../../components/ErrorMessage';
import Header from '../../components/Header';
import UseGetdata from '../../hooks/UseContinents';
import axios from 'axios';
import axiosRequest from '../../axios';


import Icon from 'react-native-vector-icons/Feather';

const Countries = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const {item} = route.params;
  const API = `continents/${item.id}`;
  const {data, isLoading, isSuccess} = UseGetdata(API);
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const [DataCountries, setDataCountries] = useState(null);

  useEffect(() => {
    const search = async () => {
      try {
        const result = await axiosRequest.get(
          `${Continents_URL}/continents/${item.id}?s=${searchValue}`,
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
      setDataCountries(null);
    }
  };

  const handleResultPress = item => {
    setSearchResult(null);
    setDataCountries(item);
    if (!item) {
      setDataCountries(null);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topicsheader}></View>
      {isSuccess && (
        <View style={styles.flatlist}>
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
                          style={styles.modal}>
                          <Icon name="search" size={20} color={'red'} />
                          <Text style={styles.textSearch}>{item.name}</Text>
                        </TouchableOpacity>
                      </View>
                    );
                  }}
                />
              ) : (
                <>
                  <>
                    {DataCountries === null && (
                      <Text style={styles.title}>Popular</Text>
                    )}
                    <FlatList
                      showsHorizontalScrollIndicator={false}
                      data={DataCountries ? [DataCountries] : data.data.popular}
                      horizontal={true}
                      ListEmptyComponent={ErrorMessage}
                      keyExtractor={item => item.id}
                      renderItem={({item}) => {
                        return (
                          <ItemPopular navigation={navigation} item={item} />
                        );
                      }}
                    />

                    {DataCountries === null && (
                      <Text style={styles.title}>Countries</Text>
                    )}
                    <FlatList
                      showsVerticalScrollIndicator={false}
                      data={DataCountries ? [] : data.data.countries}
                      numColumns={2}
                      ListEmptyComponent={ErrorMessage}
                      keyExtractor={item => item.id}
                      renderItem={({item}) => {
                        return (
                          <ItemCountries navigation={navigation} item={item} />
                        );
                      }}
                    />
                  </>
                </>
              )}
            </>
          )}
        </View>
      )}
    </View>
  );
};

export default Countries;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    fontSize: 18,
  },
  modal: {
    width: '60%',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 20,
  },
  textSearch: {color: '#323643', fontSize: 17, fontFamily: 'Poppins-Medium'},
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
  name: {
    width: '100%',
    fontSize: 25,
    color: '#323643',
    paddingBottom: 15,
    paddingLeft: 35,
    fontFamily: 'Poppins-Bold',
    marginTop: -15,
  },
  title: {
    fontSize: 23,
    color: '#323643',
    marginTop: 15,
    paddingLeft: 10,
    fontFamily: 'Poppins-Medium',
  },
});
