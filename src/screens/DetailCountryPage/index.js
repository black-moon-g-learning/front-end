// import {Continents_URL} from '@env';
// import axios from 'axios';
import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Map from '../../components/DetailContryPage/Map';
import TopicCard from '../../components/DetailContryPage/TopicCard';
import TopicTitle from '../../components/DetailContryPage/TopicTitle';
import Emty from '../../components/Popup/Emty';
import UseGetdata from '../../hooks/UseContinents';

const DetailCountryPage = ({navigation, route}) => {
  const {item} = route.params;
  const API = `countries/${item.id}/topics`;
  const {data, isLoading, isSuccess} = UseGetdata(API);

  return (
    <View style={styles.container}>
      <View style={styles.topicsheader}>
        <Text style={styles.title}>WELCOME TO {item.name.toUpperCase()}</Text>
      </View>
      <View style={styles.flatlist}>
        <TopicTitle />
        {isLoading ? (
          <ActivityIndicator color="#00ff00" size="large" />
        ) : (
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={data.data}
            horizontal={true}
            ListEmptyComponent={Emty}
            keyExtractor={item => item.id}
            renderItem={({item}) => {
              return <TopicCard navigation={navigation} item={item} />;
            }}
          />
        )}
      </View>
      <Map />
    </View>
  );
};

export default DetailCountryPage;

const styles = StyleSheet.create({
  container: {
    fontSize: 18,
    flex: 1,
  },

  flatlist: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  topicsheader: {
    width: '100%',
    height: 70,
    backgroundColor: '#5FAD41',
    paddingLeft: 10,
    paddingTop: -200,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 23,
    width: '100%',
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
    position: 'absolute',
  },
  emptyMessageStyle: {
    textAlign: 'center',
  },
});
