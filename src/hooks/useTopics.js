import axios from 'axios';
import {useQuery} from 'react-query';
import {Topics_URL} from '@env';
const getTopics = async () => {
  const {data} = await axios.get(Topics_URL);
  //console.log(data);
  return data;
};
console.log(Topics_URL);
const useTopics = () => useQuery('topics', getTopics);
export default useTopics;
