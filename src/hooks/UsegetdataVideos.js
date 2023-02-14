import {Continents_URL} from '@env';
import axios from 'axios';
import {useQuery} from 'react-query';

const Getvideo = async id => {
  const videos = `${Continents_URL}/countries-topics/${id}/videos`;
  const {data} = await axios.get(videos);
  return data;
};
const UsegetdataVideos = id => useQuery(['videos', id], () => Getvideo(id));
export default UsegetdataVideos;
