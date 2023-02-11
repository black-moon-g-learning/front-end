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
import {ListVideo} from '../../components/Videos/Listvideos';

const Videos = ({navigation, route}) => {
  const {item} = route.params;
  const {isSuccess} = UseContinents([]);

  const [dataVideos, setDataVideos] = useState({
    isLoaded: false,
    dataVideos: [],
  });

  useEffect(function () {
    axios
      .get(`${Continents_URL}/countries-topics/${item.id}/videos`)
      .then(dataVideos =>
        setDataVideos({
          isLoaded: true,
          dataVideos: dataVideos.data.data,
        }),
      );
  }, []);
  return (
    <View style={styles.container}>
      {isSuccess && (
        <>
          <View style={styles.header}>
            <Icon name="arrow-left" size={28} onPress={navigation.goBack} />
            <Text style={styles.name}>{item.name}</Text>
          </View>
          <Header />
          {!dataVideos.isLoaded ? (
            <ActivityIndicator color="#00ff00" size="large" />
          ) : (
            <FlatList
              data={dataVideos.dataVideos}
              ListEmptyComponent={ErrorMessage}
              keyExtractor={item => item.id}
              renderItem={({item}) => {
                return (
                  <ListVideo
                    navigation={navigation}
                    videos={dataVideos.dataVideos}
                    item={item}
                  />
                );
              }}
            />
          )}
        </>
      )}
    </View>
  );
};

export default Videos;
const styles = StyleSheet.create({
  container: {
    margin: 10,
    fontSize: 18,
  },
  header: {
    flexDirection: 'row',
  },
  name: {
    width: '100%',
    fontSize: 25,
    fontWeight: 'bold',
    color: '#323643',
    paddingBottom: 15,
    textAlign: 'center',
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
