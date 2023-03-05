import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {ItemCountries, ItemPopular} from '../../components/Countries/Coutries';
import {ErrorMessage} from '../../components/ErrorMessage';
import Header from '../../components/Header';
import UseGetdata from '../../hooks/UseContinents';
import ModalSearch from '../../components/ModalSearch';
import Icon from 'react-native-vector-icons/Feather';
import useSearch from '../../hooks/useSearch';

const Countries = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const {item} = route.params;
  const API = `continents/${item.id}`;
  const {data, isLoading, isSuccess} = UseGetdata(API);
  const {searchValue, setSearchValue, searchResult, setSearchResult} =
    useSearch(API);
  const [DataCountries, setDataCountries] = useState(null);

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
          <Header value={searchValue} onChangeText={handleSearch} />
          {isLoading ? (
            <ActivityIndicator color="#00ff00" size="large" />
          ) : (
            <>
              {searchResult ? (
                <FlatList
                  style={{width: '100%', paddingTop: 20}}
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
