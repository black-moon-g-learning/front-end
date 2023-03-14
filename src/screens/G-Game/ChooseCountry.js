import React, {useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  ImageBackground,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import {ErrorMessage} from '../../components/ErrorMessage';
import BtnViewMore from '../../components/G-Game/btnViewMore';
import CountryCard from '../../components/G-Game/CountryCard';
import GameHeader from '../../components/G-Game/GameHeader';
import UseGetdata from '../../hooks/UseContinents';
import Header from '../../components/Header';
import useSearch from '../../hooks/useSearch';
import ModalSearch from '../../components/ModalSearch';
const ChooseCountry = () => {
  const [page, setPage] = useState(1);
  const [showPrevious, setShowPrevious] = useState(false);
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
  const {data, isSuccess, isLoading} = UseGetdata(API);
  const handleResultPress = item => {
    setSearchResult(null);
    setDataShow(item ? [item] : data.data);
    if (!item) {
      setDataShow(null);
    }
  };

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
            <Header
              value={searchValue}
              onChangeText={handleSearch}
              onPress={SearchOnpress}
            />
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
                    <>
                      <FlatList
                        showsVerticalScrollIndicator={false}
                        style={styles.flatlist}
                        ListEmptyComponent={ErrorMessage}
                        keyExtractor={item => item.id}
                        data={DataShow || data.data}
                        renderItem={({item}) => {
                          return <CountryCard item={item} />;
                        }}
                        numColumns={2}
                      />
                    </>
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
