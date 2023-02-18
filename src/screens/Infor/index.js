import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import axiosRequest from '../../axios';
import Logout from '../../components/Logout';

const Information = () => {
  useEffect(() => {
    axiosRequest
      .get('https://g-learning.click/api/profile')
      .then(data => console.log(data.data))
      .catch(err => console.log(err));
  }, []);
  return (
    <>
      <Logout />
    </>
  );
};

export default Information;

const styles = StyleSheet.create({});
