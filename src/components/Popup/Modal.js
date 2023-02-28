import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Button,
  Modal,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const ModalPopUp = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={{backgroundColor: '#00000099', flex: 1}}>
            <View style={styles.modalView}>
              <View style={styles.row_formmodal_profile}>
                <Text style={styles.title_form_profile}>Notification</Text>
              </View>
              <View style={styles.viewdes_formmodal_profile}>
                <Text style={styles.des_form_profile}>
                  You have used up 7 days free service. To continue using the
                  service, please purchase service packs.
                </Text>
              </View>
              <View style={styles.btn_modal_update}>
                <Pressable
                  style={styles.buttonC}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={styles.textStyle}>Cancel</Text>
                </Pressable>
                <Pressable
                  style={styles.buttonB}
                  onPress={() => navigation.navigate('Payment')}>
                  <Text style={styles.textStyle}>Buy more</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
        <Button
          title="Click"
          onPress={() => {
            setModalVisible(true);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modalView: {
    backgroundColor: '#5FAD41',
    width: '90%',
    height: 300,
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginTop: 200,
    borderRadius: 20,
  },
  row_formmodal_profile: {
    width: '60%',
    height: 50,
    backgroundColor: '#D9D9D9',
    borderRadius: 30,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  title_form_profile: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 24,
    color: 'black',
  },
  viewdes_formmodal_profile: {
    width: '90%',
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  des_form_profile: {
    fontSize: 18,
    color: 'white',
  },
  buttonC: {
    width: 100,
    backgroundColor: '#FFC845',
    height: 40,
    marginRight: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  buttonB: {
    width: 100,
    backgroundColor: '#FA2907',
    height: 40,
    marginLeft: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  btn_modal_update: {
    flexDirection: 'row',
  },
  textStyle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: 'white',
  },
});

export default ModalPopUp;
