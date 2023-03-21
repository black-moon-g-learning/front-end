import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import UseLevelModal from '../../hooks/UseLevelModal';
import BlockModal from '../../screens/Countries/BlockModal';

const width = Dimensions.get('window').width;
const CountryCard = ({item}) => {
  const {isModalVisible, changeModalVisible} = UseLevelModal();
  const navigation = useNavigation();
  return (
    <View style={styles.countryContainer}>
      <ImageBackground
        source={require('../../assets/images/bgdCountry.png')}
        resizeMode="contain"
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
            <Text style={styles.txt}>{item.user_play}%</Text>
          </View>
        </View>
      </ImageBackground>
      {item.is_blocked === 1 && (
        <TouchableOpacity
          style={styles.modal_video_watched}
          onPress={() => changeModalVisible(true)}>
          <Icon style={styles.lock} name="lock" size={48} color="#5FAD41" />
        </TouchableOpacity>
      )}
      <Modal
        transparent={true}
        animationType="fade"
        visible={isModalVisible}
        nRequestClose={() => changeModalVisible(false)}>
        <BlockModal changeModalVisible={changeModalVisible} />
      </Modal>
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
    width: (width * 2.68) / 6,
    height: 215,
    textAlign: 'center',
    alignContent: 'center',
    paddingBottom: 5,
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    margin: '3%',
  },
  imgbgd: {
    width: (width * 3) / 6,
    height: 210,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  countryName: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 15,
    paddingTop: 10,
    //width: '80%',
    textAlign: 'center',
  },
  imgContry: {
    alignItems: 'center',
    width: 120,
    height: 70,
    borderRadius: 10,
  },
  btn: {
    width: 70,
    height: 35,
    backgroundColor: '#5FAD41',
    borderRadius: 10,
    marginBottom: 40,
    marginLeft: '10%',
    textAlign: 'center',
  },
  txtBtn: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 15,
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
    alignItems: 'center',
    padding: 9,
    height: 35,
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
  modal_video_watched: {
    position: 'absolute',
    backgroundColor: '#00000959',
    width: (width * 2.3) / 6,
    height: 175,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    marginRight: 20,
    justifyContent: 'center',
    left: 8,
  },
  lock: {
    color: '#FFC845',
    alignSelf: 'center',
  },
});
