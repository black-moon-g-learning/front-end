import {Continents_URL} from '@env';
import {useQuery} from 'react-query';
import axiosRequest from '../axios';

const getProfile = async () => {
  const {data} = await axiosRequest.get(`${Continents_URL}/profile`);
  return data;
};
const useProfile = () => useQuery('profile', getProfile);
export default useProfile;
