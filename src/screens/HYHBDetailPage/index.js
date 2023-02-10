import React from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import TitlePage from '../../components/HYHBpage/TitlePage';
import HYHBCard from '../../components/HYHBpage/HYHBCard';
const HYHBDetail = ({navigation, route}) => {
  const {item} = route.params;
  return (
    <View>
      <View style={styles.header}>
        <Icon
          name="arrow-left"
          size={28}
          color={'#008000'}
          onPress={navigation.goBack}
        />
        <TitlePage />
      </View>
      <HYHBCard item={item} />
    </View>
  );
};

export default HYHBDetail;

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    height: 75,
    padding: 10,
  },
  title: {
    padding: 10,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 20,
    color: '#000000',
  },
  txt: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 20,
    color: '#000000',
  },
  desc: {
    padding: 10,
    width: '100%',
  },
  content: {
    fontSize: 18,
    //fontWeight: '600',
    lineHeight: 20,
    color: '#000000',
  },
  author: {
    display: 'flex',
    //justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 10,
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
    margin: 10,
  },
  img: {
    width: 315,
    height: 213,
  },
  imgContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
