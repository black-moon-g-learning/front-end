import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const ROOT_API = '';

const axiosRequest = axios.create({
  baseURL: ROOT_API,
  timeout: 2000,
});
axiosRequest.interceptors.request.use(
  async config => {
    const accessToken = await AsyncStorage.getItem('@Token');
    const changeAccessToken = JSON.parse(accessToken);
    if (accessToken) {
      config.headers.Authorization = `Bearer ${changeAccessToken}`;
      config.headers['Content-Type'] = 'multipart/form-data';
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);
export default axiosRequest;
