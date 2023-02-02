import React from 'react';
import {useQuery} from 'react-query';
import axios from 'axios';
import {ContinentsAPI_URL} from '@env';

const getContinents = async () => {
  const {data} = await axios.get(
    ContinentsAPI_URL,
  );
  return data;
};
// console.log(ContinentsAPI_URL);
const UseContinents = () => useQuery('continents', getContinents);
export default UseContinents;
