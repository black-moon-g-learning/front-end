import React from 'react';
import {useQuery} from 'react-query';
import axios from 'axios';
import {Continents_URL} from '@env';

const getContinents = async () => {
  const {data} = await axios.get(Continents_URL);
  return data;
  // console.log(data);
};
console.log(Continents_URL);
const UseContinents = () => useQuery('continents', getContinents);
export default UseContinents;
