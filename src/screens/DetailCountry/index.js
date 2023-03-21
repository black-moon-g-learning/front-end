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
  Dimensions,
} from 'react-native';
import Map from '../../components/DetailContry/Map';
import TopicCard from '../../components/DetailContry/TopicCard';
import TopicTitle from '../../components/DetailContry/TopicTitle';
import Emty from '../../components/Popup/Emty';
import UseGetdata from '../../hooks/UseContinents';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const DetailCountryPage = ({navigation, route}) => {
  const {item} = route.params;
  const API = `countries/${item.id}/topics`;
  const {data, isLoading, isSuccess} = UseGetdata(API);

  return (
    <View style={styles.container}>
      <View style={styles.topicsheader}>
        <Text style={styles.title}>WELCOME TO {item.name.toUpperCase()}</Text>
      </View>
      <View style={{backgroundColor: '#F0F1F3'}}>
        <TopicTitle />
        <View style={styles.flatlist}>
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
    </View>
  );
};

export default DetailCountryPage;

const styles = StyleSheet.create({
  container: {
    fontSize: 18,
    flex: 1,
    width: width,
    height: height,
  },

  flatlist: {
    paddingLeft: '2.5%',
    paddingRight: '2%',
    alignItems: 'center',
    justifyContent: 'center',
    width: (width * 3) / 3,
    height: (height * 0.6) / 3,
    boderWidth: 1,
  },
  topicsheader: {
    width: '100%',
    height: 70,
    backgroundColor: '#558B31',
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
