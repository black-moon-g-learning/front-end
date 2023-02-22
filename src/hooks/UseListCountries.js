import {Continents_URL} from '@env';
import axios from 'axios';
import {useQuery} from 'react-query';

const getListCountries = async pageId => {
  const URL = `${Continents_URL}/countries?page=${pageId}`;
  const {data} = await axios.get(URL);
  return data;
};
const UseListCountries = pageId =>
  useQuery(['listCountries', pageId], () => getListCountries(pageId));
export default UseListCountries;
