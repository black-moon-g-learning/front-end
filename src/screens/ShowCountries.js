import axios from 'axios';
import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useQuery} from 'react-query';

const ShowCountries = () => {
  const {isLoading, error, data, isFetching} = useQuery('repoData', () =>
    axios
      .get('https://api.github.com/repos/tannerlinsley/react-query')
      .then(res => res.data),
  );

  if (isLoading) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;

  const ItemPopular = () => {
    return (
      <View>
        <Text>Popular</Text>
        <ScrollView>
          <Image
            style={styles.imagePopular}
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
          />
          <Text style={styles.namePopular}>name</Text>
        </ScrollView>
      </View>
    );
  };

  return (
    <>
      {isLoading ? (
        <ActivityIndicator color="#00ff00" size="large" />
      ) : (
        <FlatList
          style={styles.container}
          data={data}
          // ListHeaderComponent={headerproduct}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          keyExtractor={item => item.id}
          onRefresh={isFetching}
          renderItem={({item}) => {
            return <ItemPopular item={item} />;
          }}
          refreshing={isLoading}
        />
      )}
    </>
  );
};

export default ShowCountries;

const styles = StyleSheet.create({});
