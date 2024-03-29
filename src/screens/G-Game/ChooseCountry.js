import React, {useCallback, useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  ImageBackground,
  RefreshControl,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {ErrorMessage} from '../../components/ErrorMessage';
import BtnViewMore from '../../components/G-Game/btnViewMore';
import CountryCard from '../../components/G-Game/CountryCard';
import GameHeader from '../../components/G-Game/GameHeader';
import Header from '../../components/Header';
import ModalSearch from '../../components/ModalSearch';
import UseGetdata from '../../hooks/UseContinents';
import useSearch from '../../hooks/useSearch';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const ChooseCountry = () => {
  const [page, setPage] = useState(1);
  const [showPrevious, setShowPrevious] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const APIenpoid = `countries`;
  const {
    searchValue,
    searchResult,
    setSearchResult,
    setDataShow,
    handleSearch,
    SearchOnpress,
    DataShow,
  } = useSearch(APIenpoid);
  const handlePreviousPage = () => {
    if (page === 2) {
      setShowPrevious(false);
    }
    setPage(page - 1);
  };

  const handleViewMore = () => {
    if (page === 1) {
      setShowPrevious(true);
    }
    setPage(page + 1);
  };

  const API = `countries?page=${page}`;
  const {data, isSuccess, isLoading, refetch} = UseGetdata(API);
  const handleResultPress = item => {
    setSearchResult(null);
    setDataShow(item ? [item] : data.data);
    if (!item) {
      setDataShow(null);
    }
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refetch();
    setRefreshing(false);
  }, []);
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
            <View style={{paddingTop: 20}}>
              <Header
                value={searchValue}
                onChangeText={handleSearch}
                onPress={SearchOnpress}
              />
            </View>
            <BtnViewMore
              handleViewMore={handleViewMore}
              handlePrevious={handlePreviousPage}
              page={page}
              showPrevious={showPrevious}
            />
            <>
              {isLoading ? (
                <ActivityIndicator color="#00ff00" size="large" />
              ) : (
                <>
                  {searchResult ? (
                    <FlatList
                      style={{width: '100%'}}
                      showsVerticalScrollIndicator={false}
                      data={searchResult.data}
                      ListEmptyComponent={ErrorMessage}
                      keyExtractor={item => item.id.toString()}
                      renderItem={({item}) => {
                        return (
                          <ModalSearch
                            item={item}
                            onPress={() => handleResultPress(item)}
                          />
                        );
                      }}
                      ListHeaderComponent={
                        searchResult.data.length === 0 && (
                          <Text style={styles.errorTitle}>Not found </Text>
                        )
                      }
                    />
                  ) : (
                    <View
                      style={
                        DataShow === null ? styles.flatlist : styles.result
                      }>
                      <FlatList
                        showsVerticalScrollIndicator={false}
                        ListEmptyComponent={ErrorMessage}
                        keyExtractor={item => item.id}
                        data={DataShow || data.data}
                        renderItem={({item}) => {
                          return <CountryCard item={item} />;
                        }}
                        numColumns={2}
                        refreshControl={
                          <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                          />
                        }
                      />
                    </View>
                  )}
                </>
              )}
            </>
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
    width: width,
    height: height,
  },
  image: {
    flex: 1,
  },
  flatlist: {
    alignItems: 'center',
    justifyContent: 'center',
    height: (height * 3.8) / 6,
    paddingBottom: 20,
  },
  result: {
    marginTop: '-5%',
    width: (width * 3) / 3,
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
  errorTitle: {
    color: '#323643',
    fontSize: 17,
    fontFamily: 'Poppins-Medium',
    width: '100%',
    textAlign: 'center',
  },
});
