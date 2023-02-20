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
import Icon from 'react-native-vector-icons/Feather';
import {ErrorMessage} from '../../components/ErrorMessage';
import Header from '../../components/Header';
import {ListVideo} from '../../components/Videos/Listvideos';
import UseGetdata from '../../hooks/UseContinents';

const Videos = ({navigation, route}) => {
  const {item} = route.params;
  const API = `countries-topics/${item.id}/videos`;
  const {data, isLoading, isSuccess} = UseGetdata(API);
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Header />
      </View>
      <>
        {isLoading ? (
          <ActivityIndicator color="#00ff00" size="large" />
        ) : (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={data.data}
            ListEmptyComponent={ErrorMessage}
            keyExtractor={item => item.id}
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
  // header: {
  //   flexDirection: 'row',
  // },
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
