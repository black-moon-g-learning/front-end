import React from 'react';
import {useQuery} from 'react-query';
import axios from 'axios';

const getContinents = async () => {
  const {data} = await axios.get(
    'https://63d9df1bb28a3148f67aab1c.mockapi.io/continents',
  );
  return data;
};

const UseContinents = () => useQuery('continents', getContinents);
export default UseContinents;
