import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Header from '../../components/Header';
import {Loading} from '../../components/Loading';
import UseContinents from '../../hook/UseContinents';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const ShowCountries = () => {
  const {data, isLoading, isSuccess} = UseContinents();

  const ItemPopular = () => {
    return (
      <ScrollView style={styles.itempopular_container}>
        <View style={styles.itempoopular_item}>
          <Image
            style={styles.itempopular_image}
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
          />
          <Text style={styles.itempopular_country}>name</Text>
        </View>
      </ScrollView>
    );
  };

  const ItemCountries = () => {
    return (
      <View style={styles.itemcountries_container}>
        <Image
          style={styles.itemcountries_image}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
        <Text style={styles.itemcountries_country}>name</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {isLoading && <Loading />}

      {isSuccess && (
        <>
          <View style={styles.header}>
            <Icon
              name="arrow-left"
              size={30}
              color="black"
              style={{paddingTop: 5}}
            />
            <Header />
          </View>
          <Text style={styles.title}>Popular</Text>
          <FlatList
            data={data}
            horizontal={true}
            renderItem={({itempopular}) => {
              return <ItemPopular itempopular={itempopular} />;
            }}
          />
          <Text style={styles.title}>Countries</Text>
          <FlatList
            data={data}
            // keyExtractor={id}
            numColumns={2}
            renderItem={({itemcountries}) => {
              return <ItemCountries itemcountries={itemcountries} />;
            }}
          />
        </>
      )}
    </View>
  );
};

export default ShowCountries;

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
    paddingTop: 10,
    color: '#000009',
  },
  itempopular_container: {
    width: 200,
    height: '100%',
  },
  itempoopular_item: {
    flex: 1,
    textAlign: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itempopular_image: {
    width: 170,
    height: 100,
    borderRadius: 10,
  },
  itempopular_country: {
    paddingTop: 5,
    color: '#000000',
    fontSize: 20,
  },

  itemcountries_container: {
    width: 200,
  },
});
