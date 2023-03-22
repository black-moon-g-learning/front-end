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
const NomarlLevel = ({level}) => {
  const {isModalVisible, changeModalVisible} = UseLevelModal();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => changeModalVisible(true)}>
      <View style={styles.easyContainer}>
        <Text style={styles.level}>{level.name}</Text>
        <Text numberOfLines={6} style={styles.desc}>
          {level.description}
        </Text>
      </View>
      <Image
        style={styles.img}
        source={require('../../assets/images/nomarl.png')}
      />
      <Modal
        transparent={true}
        animationType="fade"
        visible={isModalVisible}
        nRequestClose={() => changeModalVisible(false)}>
        <GLevelDetail changeModalVisible={changeModalVisible} level={level} />
      </Modal>
    </TouchableOpacity>
  );
};

export default NomarlLevel;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-around',
    height: (height * 0.8) / 3,
  },
  easyContainer: {
    position: 'relative',
    width: '70%',
    backgroundColor: '#79B669',
    borderRadius: 15,
    margin: 5,
    padding: 10,
    // left: 20,
  },
  level: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 20,
    lineHeight: 20,
    fontWeight: 'bold',
    fontFamily: 'Poppins-Bold',
    padding: 10,
  },
  desc: {
    width: '90%',
    color: '#000000',
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    lineHeight: 20,
    textAlign: 'justify',
    padding: 10,
    left: '4%',
  },
  img: {
    position: 'absolute',
    alignItems: 'flex-start',
    left: '1.5%',
    bottom: -10,
  },
});
