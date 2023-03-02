import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Modal, Pressable, StyleSheet, Text, View} from 'react-native';

const index = () => {
  const PopupSuccessful = () => {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
    return (
      <>
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
      </>
    );
  };
  return (
    <View>
      <Text>index</Text>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
