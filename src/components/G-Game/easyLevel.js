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

const EasyLevel = ({level, item}) => {
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
        source={require('../../assets/images/easy.png')}
      />
      <Modal
        transparent={true}
        animationType="fade"
        visible={isModalVisible}
        nRequestClose={() => changeModalVisible(false)}>
        <GLevelDetail
          changeModalVisible={changeModalVisible}
          level={level}
          item={item}
        />
      </Modal>
    </TouchableOpacity>
  );
};

export default EasyLevel;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-around',
  },
  easyContainer: {
    position: 'relative',
    width: '60%',
    backgroundColor: '#BFAE48',
    borderRadius: 15,
    margin: 5,
    padding: 10,
    left: 25,
  },
  level: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 20,
    lineHeight: 20,
    fontWeight: 'bold',
    fontFamily: 'Poppins-Bold',
    paddingTop: 5,
  },
  desc: {
    color: '#000000',
    fontSize: 14,
    fontFamily: 'Poppins-Bold',
    //fontWeight: '400',
    lineHeight: 20,
    textAlign: 'justify',
    padding: 20,
  },
  img: {
    position: 'absolute',
    alignItems: 'flex-start',
    left: 20,
    bottom: -15,
  },
});
