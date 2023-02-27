import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  ImageBackground,
  StyleSheet,
  View,
} from 'react-native';
import {ErrorMessage} from '../../components/ErrorMessage';
import BtnViewMore from '../../components/G-Game/btnViewMore';
import CountryCard from '../../components/G-Game/CountryCard';
import GameHeader from '../../components/G-Game/GameHeader';
import UseGetdata from '../../hooks/UseContinents';
import UseOnChangePage from '../../hooks/UseOnChangePage';

const ChooseCountry = () => {
  const {pageId, NextPage} = UseOnChangePage();
  const API = `countries?page=${pageId}`;
  const {data, isSuccess, isLoading} = UseGetdata(API);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/bgd.png')}
        resizeMode="cover"
        style={styles.image}>
        {isLoading && <ActivityIndicator color="#00ff00" size="large" />}

        {isSuccess && (
          <>
            <GameHeader />
            <BtnViewMore NextPage={NextPage} />
            <FlatList
              showsVerticalScrollIndicator={false}
              style={styles.flatlist}
              ListEmptyComponent={ErrorMessage}
              keyExtractor={item => item.id}
              data={data.data}
              renderItem={({item}) => {
                return <CountryCard item={item} />;
              }}
              numColumns={2}
            />
          </>
        )}
      </ImageBackground>
    </View>
  );
};

export default ChooseCountry;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  btnContainer: {
    alignItems: 'flex-end',
    padding: 10,
    marginRight: 10,
  },
  btn: {
    backgroundColor: '#5FAD41',
    width: 110,
    height: 40,
    borderRadius: 10,
  },
  txtBtn: {
    color: '#FCFCFF',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 20,
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
    padding: 10,
  },
});
