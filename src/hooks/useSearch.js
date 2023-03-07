import React, {useState, useEffect} from 'react';
import axiosRequest from '../axios';
import {Continents_URL} from '@env';

const useSearch = apiEndpoint => {
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

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
  return {
    searchValue,
    setSearchValue,
    searchResult,
    setSearchResult,
    isLoading,
  };
};

export default useSearch;
