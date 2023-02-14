import {Continents_URL} from '@env';
import axios from 'axios';
import {useQuery} from 'react-query';

const getCountries = async id => {
  const URL = `${Continents_URL}/countries/${id}/topics`;
  const {data} = await axios.get(URL);
  return data;
  // console.log(data);
};
const Usegettopics = id => useQuery(['topics', id], () => getCountries(id));
export default Usegettopics;
