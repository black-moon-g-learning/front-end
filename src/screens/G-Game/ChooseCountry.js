import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../../components/Header';
const ChooseCountry = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/bgd.png')}
        resizeMode="cover"
        style={styles.image}>
        <Text style={styles.title}>G-GAME</Text>
        <Header />
        <View style={styles.countryContainer}>
          <ImageBackground
            source={require('../../assets/images/bgdCountry.png')}
            resizeMode="cover"
            style={styles.imgbgd}>
            <Text style={styles.countryName}>Viet Nam</Text>
            <Image
              style={styles.imgContry}
              source={require('../../assets/images/country.png')}
            />
            <View style={styles.btnContainer}>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.txtBtn}>Play</Text>
              </TouchableOpacity>
              <View style={styles.percentDisplay}>
                <View style={styles.percent} />
                <Text style={styles.txt}>60%</Text>
              </View>
            </View>
          </ImageBackground>
        </View>
      </ImageBackground>
    </View>
  );
};

export default ChooseCountry;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
    margin: 10,
    width: '45%',
  },
  imgbgd: {
    width: 197,
    height: 211,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  countryName: {
    color: '#000000',
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 15,
    paddingTop: 10,
  },
  imgContry: {
    alignItems: 'center',
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
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 15,
    fontFamily: 'Poppins-Bold',
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
    fontSize: 14,
    fontWeight: '500',
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
