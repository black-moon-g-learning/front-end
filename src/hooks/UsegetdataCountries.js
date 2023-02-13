import {Continents_URL} from '@env';
import axios from 'axios';
import {useQuery} from 'react-query';

const getCountries = async id => {
  const URLCountry = `${Continents_URL}/continents/${id}`;
  const {data} = await axios.get(URLCountry);
  return data;
};
const UsegetdataCountries = id =>
  useQuery(['contries', id], () => getCountries(id));
export default UsegetdataCountries;
