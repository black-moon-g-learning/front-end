import {Continents_URL} from '@env';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {ItemCountries, ItemPopular} from '../../components/Countries/Coutries';
import {ErrorMessage} from '../../components/ErrorMessage';
import Header from '../../components/Header';
import UseContinents from '../../hooks/UseContinents';

const Countries = ({route}) => {
  const {item} = route.params;
  const {isSuccess} = UseContinents([]);
  const navigation = useNavigation();

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

  console.log(dataContry.dataContry);
  return (
    <View style={styles.container}>
      {isSuccess && (
        <>
          <View style={styles.header}>
            <Icon
              name="arrow-left"
              size={30}
              color={'#5FAD41'}
              onPress={() => navigation.goBack('Home')}
            />
            <Text style={styles.name}>{item.name}</Text>
          </View>
          <Header />
          <Text style={styles.title}>Popular</Text>
          {!dataContry.isLoaded ? (
            <ActivityIndicator color="#00ff00" size="large" />
          ) : (
            <FlatList
              showsHorizontalScrollIndicator={false}
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
            showsVerticalScrollIndicator={false}
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
    // flex: 1,
  },
  header: {
    flexDirection: 'row',
  },
  name: {
    width: '100%',
    fontSize: 25,
    color: '#323643',
    paddingBottom: 15,
    paddingLeft: 35,
    fontFamily:'Poppins-Bold',
  },
  title: {
    fontSize: 23,
    color: '#323643',
    marginTop: 15,
    paddingLeft: 10,
    fontFamily:'Poppins-Medium',
  },
});
