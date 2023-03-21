import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {Alert, Linking} from 'react-native';

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
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

axiosRequest.interceptors.response.use(
  response => response,
  error => {
    if (error.response.status === 403) {
      return Alert.alert(
        'Notification',
        'You have used up 7 free days. Please purchase additional packages to continue using.',
        [
          {
            text: 'BUY NOW',
            onPress: () => {
              Linking.openURL('g-learning://open.app/payment');
            },
          },
        ],
        {cancelable: false},
      );
    }
    if (error.response.status === 423) {
      return Alert.alert(
        'Notification',
        'Your account has been locked, contact phone number 0825503379 for support.',
      );
    }
  },
);

export default axiosRequest;
