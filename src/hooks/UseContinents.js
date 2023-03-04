import {Continents_URL} from '@env';
import axios from 'axios';
import {useQuery} from 'react-query';

const getContinents = async API => {
  const {data} = await axios.get(`${Continents_URL}/${API}`);
  return data;
};
console.log(Continents_URL);
const UseGetdata = API =>
  useQuery(['continents', API], () => getContinents(API));
export default UseGetdata;
