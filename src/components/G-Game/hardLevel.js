import React from 'react';
import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import UseLevelModal from '../../hooks/UseLevelModal';
import GLevelDetail from './GLevelDetail';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const HardLevel = ({level}) => {
  const {isModalVisible, changeModalVisible} = UseLevelModal();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => changeModalVisible(true)}>
      <View style={styles.levelcontainer}>
        <View style={styles.easyContainer}>
          <View style={styles.image}>
            <Image
              style={styles.img}
              source={require('../../assets/images/hard.png')}
            />
          </View>

          <Text numberOfLines={6} style={styles.desc}>
            {level.description}
          </Text>
        </View>
        <Text style={styles.level}>{level.name}</Text>

        {/* <Modal
          transparent={true}
          animationType="fade"
          visible={isModalVisible}
          nRequestClose={() => changeModalVisible(false)}>
          <GLevelDetail changeModalVisible={changeModalVisible} level={level} />
        </Modal> */}
        <TouchableOpacity
          style={styles.modal_video_watched}
          onPress={() => changeModalVisible(true)}
          disabled={true}>
          <Text style={styles.text_video_watched}>Comming soon</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default HardLevel;

const styles = StyleSheet.create({
  container: {
    width: (width * 3) / 3,
  },
  levelcontainer: {
    height: (height * 0.9) / 3,
    width: (width * 3.1) / 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal_video_watched: {
    position: 'absolute',
    backgroundColor: '#00000959',
    width: '73%',
    height: (height * 0.75) / 3,
    borderRadius: 15,
    // margin: 5,
    padding: 10,
    top: '-2%',
    marginLeft: '13%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text_video_watched: {
    fontSize: 20,
    color: 'white',
    fontWeight: '700',
    alignSelf: 'center',
  },
  easyContainer: {
    flexDirection: 'row',
    display: 'flex',
    width: '75%',
    height: (height * 0.75) / 3,
    backgroundColor: '#00D6C5',
    borderRadius: 15,
    margin: 5,
    padding: 10,
  },
  level: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 20,
    lineHeight: 20,
    fontWeight: 'bold',
    fontFamily: 'Poppins-Bold',
    padding: 10,
    top: '-85%',
  },
  desc: {
    width: '95%',
    color: '#000000',
    fontSize: 13,
    fontFamily: 'Poppins-Medium',
    lineHeight: 20,
    textAlign: 'justify',
    padding: 10,
    left: '-10%',
    top: 20,
  },
  img: {
    marginLeft: -80,
  },
  image: {
    width: '15%',
    height: 120,
  },
});
