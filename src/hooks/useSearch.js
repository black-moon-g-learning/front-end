import React, {useState, useEffect} from 'react';
import axiosRequest from '../axios';
import {Continents_URL} from '@env';

const useSearch = apiEndpoint => {
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [DataShow, setDataShow] = useState(null);

  useEffect(() => {
    const search = async () => {
      setIsLoading(true);
      try {
        const result = await axiosRequest.get(
          `${Continents_URL}/${apiEndpoint}?s=${searchValue}`,
        );
        setSearchResult(result.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    if (searchValue.length >= 2) {
      search();
    } else {
      setSearchResult(null);
    }
  }, [searchValue, apiEndpoint]);

  const handleSearch = searchValue => {
    console.log('searching for', searchValue);
    setSearchValue(searchValue);
    if (!searchValue) {
      setDataShow(null);
    }
  };

  const SearchOnpress = searchValue => {
    if (!searchValue) {
      setDataShow(null);
    } else {
      setDataShow(searchResult?.data);
    }
    setSearchResult(null);
  };
  return {
    searchValue,
    setSearchValue,
    searchResult,
    setSearchResult,
    isLoading,
    handleSearch,
    SearchOnpress,
    setDataShow,
    DataShow,
  };
};

export default useSearch;
