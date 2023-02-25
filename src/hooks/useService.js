import {Continents_URL} from '@env';
import {useQuery} from 'react-query';
import axiosRequest from '../axios';

const getServices = async () => {
  const {data} = await axiosRequest.get(`${Continents_URL}/services`);
  return data;
};
const useServices = () => useQuery('services', getServices);
export default useServices;
