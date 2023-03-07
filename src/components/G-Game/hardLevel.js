import React from 'react';
import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import UseLevelModal from '../../hooks/UseLevelModal';
import GLevelDetail from './GLevelDetail';
const HardLevel = ({level}) => {
  const {isModalVisible, changeModalVisible} = UseLevelModal();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.easyContainer}
        onPress={() => changeModalVisible(true)}>
        <Text style={styles.level}>{level.name}</Text>
        <Text numberOfLines={6} style={styles.desc}>
          {level.description}
        </Text>
      </TouchableOpacity>
      <Image
        style={styles.img}
        source={require('../../assets/images/hard.png')}
      />
      <Modal
        transparent={true}
        animationType="fade"
        visible={isModalVisible}
        nRequestClose={() => changeModalVisible(false)}>
        <GLevelDetail changeModalVisible={changeModalVisible} level={level} />
      </Modal>
    </View>
  );
};

export default HardLevel;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-around',
  },
  easyContainer: {
    position: 'relative',
    width: '60%',
    backgroundColor: '#2D936C',
    borderRadius: 15,
    margin: 5,
    padding: 10,
    left: 20,
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
    color: '#000000',
    fontSize: 14,
    fontFamily: 'Poppins-Bold',
    lineHeight: 20,
    textAlign: 'justify',
    padding: 10,
  },
  img: {
    position: 'absolute',
    alignItems: 'flex-start',
    left: 15,
    bottom: -10,
  },
});
