import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  LogBox,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const ModalNext = ({onClose, text, Result, images, imagesmain}) => {
  LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
  ]);
  const handlePress = () => {
    onClose();
    Result();
  };
  const check = text.includes('Correct');

  return (
    <View style={styles.modalContainer}>
      <View style={styles.bigmodalContent}>
        <View style={styles.modalContent}>
          {/* <Image
            source={{
              uri: images,
            }}
            style={styles.img}
          /> */}
          <Text style={styles.modalText}>{text}</Text>
          <Image
            source={{
              uri: imagesmain,
            }}
            style={styles.imagesmain}
          />
          <TouchableOpacity
            style={check ? styles.next : styles.closeButton}
            onPress={handlePress}>
            <Text style={styles.closeButtonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ModalNext;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    height: (height * 3) / 6,
  },
  img: {
    width: 70,
    height: 70,
    marginBottom: 10,
    top: '-23%',
  },
  imagesmain: {
    width: 140,
    height: 140,
    marginBottom: 10,
  },
  bigmodalContent: {
    backgroundColor: '#fff',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    width: '80%',
    height: (height * 3) / 6,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 8,
    borderColor: '#4E7F2E',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,

    elevation: 4,
  },
  modalContent: {
    padding: 10,
    width: '100%',
    alignItems: 'center',
    height: (height * 2.6) / 6,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  modalText: {
    fontSize: 23,
    fontFamily: 'Poppins-Bold',
    fontWeight: '400',
    marginBottom: 10,
    textAlign: 'center',
    color: '#FF3939',
  },
  closeButton: {
    backgroundColor: '#FF5050',
    borderRadius: 30,
    paddingBottom: 10,
    paddingTop: 10,
    marginTop: 10,
    paddingLeft: 60,
    paddingRight: 60,
  },
  next: {
    backgroundColor: '#548930',
    borderRadius: 30,
    paddingBottom: 10,
    paddingTop: 10,
    marginTop: 10,
    paddingLeft: 60,
    paddingRight: 60,
  },
  closeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
  },
});
