import {Continents_URL} from '@env';
import axios from 'axios';
import {useQuery} from 'react-query';

const getContinents = async () => {
  const {data} = await axios.get(Continents_URL);
  return data;
};
const UseContinents = () => useQuery('continents', getContinents);
export default UseContinents;
