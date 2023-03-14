import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {ItemCountries, ItemPopular} from '../../components/Countries/Coutries';
import {ErrorMessage} from '../../components/ErrorMessage';
import Header from '../../components/Header';
import ModalSearch from '../../components/ModalSearch';
import UseGetdata from '../../hooks/UseContinents';
import useSearch from '../../hooks/useSearch';

const Countries = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const {item} = route.params;
  const API = `continents/${item.id}`;
  const {data, isLoading, isSuccess} = UseGetdata(API);
  const {
    searchValue,
    searchResult,
    setSearchResult,
    setDataShow,
    handleSearch,
    SearchOnpress,
    DataShow,
  } = useSearch(API);
  const handleResultPress = item => {
    setSearchResult(null);
    setDataShow(item ? [item] : data.data.countries);
    if (!item) {
      setDataShow(null);
    }
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={styles.container}>
        <View style={styles.topicsheader}></View>
        {isSuccess && (
          <View style={styles.flatlist}>
            <Header
              value={searchValue}
              onChangeText={handleSearch}
              onPress={SearchOnpress}
            />
            {isLoading ? (
              <ActivityIndicator color="#00ff00" size="large" />
            ) : (
              <>
                {searchResult ? (
                  <>
                    <FlatList
                      style={{width: '100%', paddingTop: 20}}
                      showsVerticalScrollIndicator={false}
                      data={searchResult.data}
                      ListEmptyComponent={ErrorMessage}
                      keyExtractor={item => item.id.toString()}
                      renderItem={({item}) => (
                        <ModalSearch
                          item={item}
                          onPress={() => handleResultPress(item)}
                        />
                      )}
                      ListHeaderComponent={
                        searchResult.data.length === 0 && (
                          <Text style={styles.errorTitle}>Not found </Text>
                        )
                      }
                    />
                  </>
                ) : (
                  <>
                    <>
                      {DataShow === null && (
                        <Text style={styles.title}>Popular</Text>
                      )}
                      <FlatList
                        showsHorizontalScrollIndicator={false}
                        // data={DataShow || data.data.popular}
                        data={DataShow ? [] : data.data.popular}
                        horizontal={true}
                        ListEmptyComponent={ErrorMessage}
                        keyExtractor={item => item.id}
                        renderItem={({item}) => {
                          return (
                            <ItemPopular
                              navigation={navigation}
                              key={item.id}
                              item={item}
                            />
                          );
                        }}
                      />

                      {DataShow === null && (
                        <Text style={styles.title}>Countries</Text>
                      )}
                      <FlatList
                        showsVerticalScrollIndicator={false}
                        data={DataShow || data.data.countries}
                        numColumns={2}
                        ListEmptyComponent={ErrorMessage}
                        keyExtractor={item => item.id}
                        renderItem={({item}) => {
                          return (
                            <ItemCountries
                              navigation={navigation}
                              item={item}
                            />
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
      </ScrollView>
    </SafeAreaView>
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
    marginTop: 20,
    paddingLeft: 10,
    fontFamily: 'Poppins-Medium',
  },
  errorTitle: {
    paddingTop: 15,
    color: '#323643',
    fontSize: 17,
    fontFamily: 'Poppins-Medium',
    width: '100%',
    textAlign: 'center',
  },
});
