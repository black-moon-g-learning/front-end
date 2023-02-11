import {Continents_URL} from '@env';
import axios from 'axios';
import {useQuery} from 'react-query';

const getNews = async () => {
  const {data} = await axios.get(`${Continents_URL}/information`);
  //console.log(data);
  return data;
};
// console.log(Continents_URL);
const UseNews = () => useQuery('news', getNews);
export default UseNews;
