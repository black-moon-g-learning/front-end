import {Continents_URL} from '@env';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MapArea from '../components/DetailContryPage/MapArea';
import TopicCard from '../components/DetailContryPage/TopicCard';
import TopicTitle from '../components/DetailContryPage/TopicTitle';
import {ErrorMessage} from '../components/ErrorMessage';

const DetailCountryPage = ({navigation, route}) => {
  const {item} = route.params;

  const [dataTopics, setDataTopics] = useState({
    isLoaded: false,
    dataContry: [],
  });

  useEffect(function () {
    axios
      .get(`${Continents_URL}/countries/${item.id}/topics`)
      .then(dataTopics =>
        setDataTopics({
          isLoaded: true,
          dataTopics: dataTopics.data.data,
        }),
      );
  }, []);

  return (
    <View style={styles.container}>
      <Icon name="arrow-left" size={28} onPress={navigation.goBack} />
      <TopicTitle />
      {!dataTopics.isLoaded ? (
        <ActivityIndicator color="#00ff00" size="large" />
      ) : (
        <FlatList
          data={dataTopics.dataTopics}
          horizontal={true}
          ListEmptyComponent={ErrorMessage}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return <TopicCard navigation={navigation} item={item} />;
          }}
        />
      )}
      <MapArea />
    </View>
  );
};

export default DetailCountryPage;

const styles = StyleSheet.create({
  emptyMessageStyle: {
    textAlign: 'center',
  },
});
