import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import useServices from '../../hooks/useService';

const Package = () => {
  const {data, isLoading, isSuccess} = useServices([]);
  // console.log('data=>', data);
  const [service, setService] = useState({
    name: '',
    description: '',
    price: '',
    unit: '',
  });
  useEffect(() => {
    if (data) {
      setService({
        name: data.data[0].name,
        description: data.data[0].description,
        price: data.data[0].price,
        unit: data.data[0].unit,
      });
    }
  }, [data]);
  return (
    <View style={styles.container}>
      {isLoading && <ActivityIndicator color="#00ff00" size="large" />}

      {isSuccess && (
        <>
          <Text style={styles.title}>{service.name}</Text>
          <View style={styles.des_view}>
            <Text style={styles.text_des}>{service.description}</Text>
          </View>
          <TouchableOpacity style={styles.btn_price}>
            <Text style={styles.text_price}>
              Total: {service.price} {service.unit}
            </Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default Package;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#5FAD41',
    width: '98%',
    height: 300,
    alignSelf: 'center',
    borderRadius: 10,
  },
  title: {
    alignSelf: 'center',
    fontSize: 26,
    color: 'white',
    fontFamily: 'Poppins-SemiBold',
    padding: 10,
  },
  des_view: {
    backgroundColor: '#F7DBA796',
    width: '94%',
    alignSelf: 'center',
    height: 170,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
  },
  text_des: {
    width: '98%',
    fontFamily: 'Poppins-SemiBold',
    alignSelf: 'center',
    fontSize: 14,
  },
  btn_price: {
    width: '94%',
    height: 50,
    justifyContent: 'center',
    backgroundColor: '#FFC845',
    alignSelf: 'center',
    margin: 10,
    borderRadius: 10,
  },
  text_price: {
    textAlign: 'center',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    fontWeight: '900',
  },
});
