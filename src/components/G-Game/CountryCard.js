import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
const CountryCard = ({item}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.countryContainer}>
      <ImageBackground
        source={require('../../assets/images/bgdCountry.png')}
        resizeMode="cover"
        style={styles.imgbgd}>
        <Text numberOfLines={1} style={styles.countryName}>
          {item.name}
        </Text>
        <Image style={styles.imgContry} source={{uri: item.image}} />
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate('GameLevels', {item})}>
            <Text style={styles.txtBtn}>Play</Text>
          </TouchableOpacity>
          <View style={styles.percentDisplay}>
            {/* <View style={styles.percent} /> */}
            <Text style={styles.txt}>{item.user_play}%</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default CountryCard;

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  title: {
    color: '#FFFFFF',
    fontFamily: 'Poppins-Bold',
    fontSize: 30,
    lineHeight: 20,
    fontWeight: '700',
    textAlign: 'center',
    padding: 30,
  },
  countryContainer: {
    margin: 7,
    width: '45%',
  },
  imgbgd: {
    width: 182,
    height: 197,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  countryName: {
    color: '#000000',
    fontSize: 15,
    fontWeight: '700',
    lineHeight: 15,
    paddingTop: 10,
    width: '60%',
    textAlign: 'center',
  },
  imgContry: {
    alignItems: 'center',
    width: 120,
    height: 70,
    borderRadius: 10,
  },
  btn: {
    width: 65,
    height: 30,
    backgroundColor: '#5FAD41',
    borderRadius: 10,
    marginBottom: 40,
    marginLeft: 10,
  },
  txtBtn: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '500',
    lineHeight: 15,
    fontFamily: 'Poppins-Medium',
    textAlign: 'center',
    padding: 7,
  },
  percent: {
    width: 30,
    height: 13,
    backgroundColor: '#5FAD41',
    borderRadius: 10,
  },
  txt: {
    color: '#000000',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 10,
    fontFamily: 'Poppins-Bold',
    padding: 7,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  percentDisplay: {
    flexDirection: 'row',
    padding: 10,
  },
});
