import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  LogBox,
  TouchableOpacity,
} from 'react-native';

const ModalNext = ({onClose, text, Result, images}) => {
  LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
  ]);
  const handlePress = () => {
    onClose();
    Result();
  };
  return (
    <View style={styles.modalContainer}>
      <View style={styles.modalContent}>
        <Image
          source={{
            uri: images,
          }}
          style={{width: 70, height: 70, marginBottom: 10}}
        />
        <Text style={styles.modalText}>{text}</Text>
        <TouchableOpacity style={styles.closeButton} onPress={handlePress}>
          <Text style={styles.closeButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ModalNext;

const styles = StyleSheet.create({
  // container: {
  //   // position: 'absolute',
  //   // marginTop: '30%',
  //   flex: 1,
  //   margin: 10,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  // resultContainer: {
  //   backgroundColor: '#5FAD41',
  //   borderRadius: 20,
  //   width: '100%',
  // },
  // result: {
  //   flexDirection: 'row',
  //   justifyContent: 'flex-start',
  //   alignItems: 'center',
  //   paddingHorizontal: 10,
  //   paddingVertical: 5,
  // },
  // failIconCon: {
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  // failIcon: {
  //   width: 122,
  //   height: 186,
  // },
  // failTxt: {
  //   fontFamily: 'Poppins-Bold',
  //   fontSize: 40,
  //   fontWeight: '500',
  //   lineHeight: 20,
  //   color: '#FFFFFF',
  //   paddingVertical: 40,
  //   paddingHorizontal: 20,
  // },
  // failImg: {
  //   width: 101,
  //   height: 129,
  // },
  // btnGroup: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   justifyContent: 'space-around',
  //   padding: 10,
  //   marginVertical: '5%',
  // },
  // btnReview: {
  //   width: '90%',
  //   height: 40,
  //   borderRadius: 10,
  //   backgroundColor: '#FFFFFF',
  //   borderWidth: 1,
  //   borderColor: '#5FAD41',
  //   // paddingBottom: 20,
  // },
  // btnTxt: {
  //   fontFamily: 'Poppins-Bold',
  //   fontSize: 16,
  //   textAlign: 'center',
  //   color: '#000000',
  //   padding: 5,
  // },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  modalText: {
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  closeButton: {
    backgroundColor: '#FF5050',
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
  },
  closeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
