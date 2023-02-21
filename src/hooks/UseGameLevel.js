import {Continents_URL} from '@env';
import axios from 'axios';
import {useQuery} from 'react-query';

const getGameLevels = async () => {
  const {data} = await axios.get(`${Continents_URL}/levels`);
  return data;
};
// console.log(Continents_URL);
const UseGameLevels = () => useQuery('gamelevels', getGameLevels);
export default UseGameLevels;
