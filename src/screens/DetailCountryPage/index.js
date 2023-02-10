import {Continents_URL} from '@env';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
// import MapArea from '../../components/DetailContryPage/MapArea';
import Map from '../../components/DetailContryPage/Map';
import TopicCard from '../../components/DetailContryPage/TopicCard';
import TopicTitle from '../../components/DetailContryPage/TopicTitle';
import {ErrorMessage} from '../../components/ErrorMessage';

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

  // console.log(dataTopics.dataTopics);
  return (
    <View style={styles.container}>
      <View style={styles.topicsheader}>
        <Icon
          name="arrow-left"
          size={28}
          color={'#FCFCFF'}
          onPress={navigation.goBack}
        />
        <Text style={styles.title}>WELCOME TO {item.name.toUpperCase()}</Text>
      </View>
      <View style={styles.flatlist}>
        <TopicTitle />
        {!dataTopics.isLoaded ? (
          <ActivityIndicator color="#00ff00" size="large" />
        ) : (
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={dataTopics.dataTopics}
            horizontal={true}
            ListEmptyComponent={ErrorMessage}
            keyExtractor={item => item.id}
            renderItem={({item}) => {
              return <TopicCard navigation={navigation} item={item} />;
            }}
          />
        )}
        <Map />
      </View>
    </View>
  );
};

export default DetailCountryPage;

const styles = StyleSheet.create({
  container: {
    fontSize: 18,
  },
  flatlist: {
    paddingLeft: 10,
    paddingRight: 10,
    // display: 'flex',
    // flexDirection: 'column',
  },
  topicsheader: {
    width: '100%',
    height: 120,
    backgroundColor: '#5FAD41',
    paddingLeft: 10,
    paddingTop: 20,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    width: '100%',
    textAlign: 'center',
  },
  emptyMessageStyle: {
    textAlign: 'center',
  },
});
