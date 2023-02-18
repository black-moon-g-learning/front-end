import {Continents_URL} from '@env';
import axios from 'axios';
import {useQuery} from 'react-query';

const getNews = async () => {
  const {data} = await axios.get(`${Continents_URL}/information`);
  return data;
};
const UseNews = () => useQuery('news', getNews);
export default UseNews;
