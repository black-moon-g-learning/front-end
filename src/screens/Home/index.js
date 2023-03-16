import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import {ErrorMessage} from '../../components/ErrorMessage';
import EarthGifImage from '../../components/Home/Earthgif';
import {ListContinents} from '../../components/Home/ListContinents';
import UseGetdata from '../../hooks/UseContinents';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const Home = ({navigation}) => {
  const API = `continents`;
  const {data, isLoading, isSuccess} = UseGetdata(API);
  return (
    <SafeAreaView style={styles.CotaninerView}>
      <View style={styles.container}>
        {isLoading ? (
          <ActivityIndicator color="#00ff00" size="large" />
        ) : (
          <View>
            {isSuccess && (
              <>
                <View
                  style={{
                    width: width,
                    height: (height * 1.7) / 6,
                  }}>
                  <EarthGifImage />
                </View>
                <Text style={styles.titlePage}>Continents </Text>
                <View style={styles.flatlist}>
                  <FlatList
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    // style={styles.flatlist}
                    ListEmptyComponent={ErrorMessage}
                    keyExtractor={item => item.id}
                    data={data.data}
                    renderItem={({item}) => {
                      return (
                        <ListContinents navigation={navigation} item={item} />
                      );
                    }}
                  />
                </View>
              </>
            )}
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Home;
const styles = StyleSheet.create({
  CotaninerView: {
    flex: 1,
  },
  container: {
    width: width,
    height: height,
    paddingTop: 20,
    paddingRight: 10,
  },
  flatlist: {
    height: (height * 3.2) / 6,
    width: (width * 6) / 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titlePage: {
    fontSize: 23,
    color: '#323643',
    paddingTop: 13,
    paddingLeft: 13,
    fontFamily: 'Poppins-SemiBold',
  },
  emptyMessageStyle: {
    textAlign: 'center',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
  },
});
