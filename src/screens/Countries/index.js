import {Continents_URL} from '@env';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ErrorMessage} from '../../components/ErrorMessage';
import Header from '../../components/Header';
import UseContinents from '../../hooks/UseContinents';
import {ItemCountries, ItemPopular} from './Coutries';

const Countries = ({navigation, route}) => {
  const {item} = route.params;
  const {isSuccess} = UseContinents([]);

  const [dataContry, setDataCountry] = useState({
    isLoaded: false,
    dataContry: [],
  });

  useEffect(function () {
    axios.get(`${Continents_URL}/continents/${item.id}`).then(dataContry =>
      setDataCountry({
        isLoaded: true,
        dataContry: dataContry.data.data,
      }),
    );
  }, []);

  return (
    <View style={styles.container}>
      {isSuccess && (
        <>
          <View style={styles.header}>
            <Icon name="arrow-left" size={28} onPress={navigation.goBack} />
            <Text style={styles.title}>{item.name}</Text>
          </View>
          <Header />
          <Text style={styles.title}>Popular</Text>
          {!dataContry.isLoaded ? (
            <ActivityIndicator color="#00ff00" size="large" />
          ) : (
            <FlatList
              data={dataContry.dataContry.popular}
              horizontal={true}
              ListEmptyComponent={ErrorMessage}
              keyExtractor={item => item.id}
              renderItem={({item}) => {
                return <ItemPopular navigation={navigation} item={item} />;
              }}
            />
          )}
          <Text style={styles.title}>Countries</Text>
          <FlatList
            data={dataContry.dataContry.countries}
            numColumns={2}
            ListEmptyComponent={ErrorMessage}
            keyExtractor={item => item.id}
            renderItem={({item}) => {
              return <ItemCountries navigation={navigation} item={item} />;
            }}
          />
        </>
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
  header: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000009',
  },
  itempopular_container: {
    width: 200,
    height: 200,
  },
  itempoopular_item: {
    paddingTop: 5,
    textAlign: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itempopular_image: {
    width: 170,
    height: 110,
    borderRadius: 10,
  },
  itempopular_country: {
    paddingTop: 5,
    color: '#000000',
    fontSize: 20,
  },

  itemcountries_item: {
    width: '90%',
    height: 150,
    textAlign: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    borderRadius: 10,
    margin: 10,
  },
  itemcountries_image: {
    width: '90%',
    height: 100,
    borderRadius: 10,
  },
  itemcountries_country: {
    fontSize: 20,
    color: 'black',
    fontWeight: '400',
  },
});
