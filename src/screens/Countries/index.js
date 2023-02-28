import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
// import Icon from 'react-native-vector-icons/Feather';
import {ItemCountries, ItemPopular} from '../../components/Countries/Coutries';
import {ErrorMessage} from '../../components/ErrorMessage';
import Header from '../../components/Header';
import {useRoute} from '@react-navigation/native';
import UseGetdata from '../../hooks/UseContinents';

const Countries = () => {
  const route = useRoute();
  const {item} = route.params;
  const API = `continents/${item.id}`;
  const {data, isLoading, isSuccess} = UseGetdata(API);
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.topicsheader}></View>
      {isSuccess && (
        <View style={styles.flatlist}>
          <Header />
          <Text style={styles.title}>Popular</Text>
          {isLoading ? (
            <ActivityIndicator color="#00ff00" size="large" />
          ) : (
            <>
              <FlatList
                showsHorizontalScrollIndicator={false}
                data={data.data.popular}
                horizontal={true}
                ListEmptyComponent={ErrorMessage}
                keyExtractor={item => item.id}
                renderItem={({item}) => {
                  return <ItemPopular navigation={navigation} item={item} />;
                }}
              />
              <Text style={styles.title}>Countries</Text>
              <FlatList
                showsVerticalScrollIndicator={false}
                data={data.data.countries}
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
