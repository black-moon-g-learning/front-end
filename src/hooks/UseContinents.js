import {Continents_URL} from '@env';
import {useQuery} from 'react-query';
import axiosRequest from '../axios';

const getContinents = async API => {
  let response = [];
  try {
    const {data} = await axiosRequest.get(`${Continents_URL}/${API}`);
    response = data;
    return response;
  } catch (error) {
    return response;
  }
};
console.log(Continents_URL);
const UseGetdata = API =>
  useQuery(['continents', API], () => getContinents(API));
export default UseGetdata;
