import {Continents_URL} from '@env';

import {useQuery} from 'react-query';
import axiosRequest from '../axios';

const getContinents = async API => {
  const {data} = await axiosRequest.get(`${Continents_URL}/${API}`);
  return data;
};
const UseGetdata = API =>
  useQuery(['continents', API], () => getContinents(API));
export default UseGetdata;
