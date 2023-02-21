import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import useProfile from '../../hooks/usegetProfile';
// import useProfile from '../../hooks/usegetProfile';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import Logout from '../../components/Logout';

const Information = () => {
  const {data, isLoading, isSuccess} = useProfile([]);
  // console.log('profile =>', isLoading);
  const [modalVisible, setModalVisible] = useState(false);
  // const {handleImage} = useUpdateProfile();

  const [isImage, setIsImage] = useState();
  const [Name, setName] = useState();
  const [Age, setAge] = useState();
  const [Email, setEmail] = useState();
  const [Phone, setPhone] = useState();
  const [Gender, setGender] = useState();

  useEffect(() => {
    if (data) {
      setIsImage(data.image);
      setAge(data.age);
      setName(data.first_name);
      setEmail(data.email);
      setPhone(data.phone);
      setGender(data.gender);
    }
  }, [data]);

  return (
    <View style={styles.container}>
      {isLoading && <ActivityIndicator color="#00ff00" size="large" />}

      {isSuccess && (
        <>
          <View style={styles.header_profile}>
            <Image
              style={styles.image_profile}
              source={{
                uri: isImage,
              }}
            />
            {/* <TouchableOpacity onPress={handleImage} style={styles.icon_view}>
              <Icon style={styles.icon} name="pencil" size={20} />
            </TouchableOpacity> */}

            <Text style={styles.name_profile}>{data.first_name}</Text>
          </View>
          <View style={styles.form_profile}>
            <View style={styles.row_form_profile}>
              <Text style={styles.title_form_profile}>Name :</Text>
              <TouchableOpacity style={styles.infor_form_profile}>
                <Text style={styles.information_profile}>{Name}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.row_form_profile}>
              <Text style={styles.title_form_profile}>Age :</Text>
              <TouchableOpacity style={styles.infor_form_profile}>
                <Text style={styles.information_profile}>{Age}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.row_form_profile}>
              <Text style={styles.title_form_profile}>Email :</Text>
              <TouchableOpacity style={styles.infor_form_profile}>
                <Text style={styles.information_email_profile}>{Email}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.row_form_profile}>
              <Text style={styles.title_form_profile}>Phone :</Text>
              <TouchableOpacity style={styles.infor_form_profile}>
                <Text style={styles.information_profile}>{Phone}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.row_form_profile}>
              <Text style={styles.title_form_profile}>Country :</Text>
              <TouchableOpacity style={styles.infor_form_profile}>
                <Text style={styles.information_profile}>Viet Nam</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.row_form_profile}>
              <Text style={styles.title_form_profile}>Gender :</Text>
              <TouchableOpacity style={styles.infor_form_profile}>
                <Text style={styles.information_profile}>{Gender}</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}>
            <View style={{backgroundColor: '#00000099', flex: 1}}>
              <View style={styles.modalView}>
                <View style={styles.row_form_profile}>
                  <Text style={styles.title_form_profile}>Name :</Text>
                  <TouchableOpacity style={styles.infor_form_profile}>
                    <TextInput
                      style={styles.information_profile}
                      value={Name}
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles.row_form_profile}>
                  <Text style={styles.title_form_profile}>Age :</Text>
                  <TouchableOpacity style={styles.infor_form_profile}>
                    <TextInput style={styles.information_profile} value={Age} />
                  </TouchableOpacity>
                </View>
                <View style={styles.row_form_profile}>
                  <Text style={styles.title_form_profile}>Email :</Text>
                  <TouchableOpacity style={styles.infor_form_profile}>
                    <TextInput
                      style={styles.information_profile}
                      value={Email}
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles.row_form_profile}>
                  <Text style={styles.title_form_profile}>Phone :</Text>
                  <TouchableOpacity style={styles.infor_form_profile}>
                    <TextInput
                      style={styles.information_profile}
                      value={Phone}
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles.row_form_profile}>
                  <Text style={styles.title_form_profile}>Gender :</Text>
                  <TouchableOpacity style={styles.infor_form_profile}>
                    <TextInput
                      style={styles.information_profile}
                      value={Gender}
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles.btn_modal_update}>
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}>
                    <Text style={styles.textStyle}>Cancel</Text>
                  </Pressable>
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}>
                    <Text style={styles.textStyle}>Save</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </Modal>
          <Pressable style={styles.btn_infor}>
            <TouchableOpacity
              style={styles.btn_click}
              onPress={() => setModalVisible(true)}>
              <Text style={styles.text_btn}>EDIT</Text>
            </TouchableOpacity>
          </Pressable>
          <View style={styles.package}>
            <Text style={styles.title_package}>Package: </Text>
            <TouchableOpacity style={styles.infor_pakage}>
              <Text style={styles.text_package}>72 days 16 hours</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn_click_package}>
              <Text style={styles.text_btn}>Buy more</Text>
            </TouchableOpacity>
          </View>
          <Logout />
        </>
      )}
    </View>
  );
};

export default Information;

const styles = StyleSheet.create({
  header_profile: {
    width: '96%',
    height: 100,
    backgroundColor: '#5FAD41',
    alignSelf: 'center',
    flexDirection: 'row',
    borderRadius: 10,
    marginTop: '1%',
    elevation: 6,
  },
  image_profile: {
    width: 70,
    height: 70,
    borderRadius: 50,
    alignSelf: 'center',
    marginLeft: 25,
    borderColor: '#FFFFFF',
    borderWidth: 1,
  },
  name_profile: {
    fontSize: 21,
    color: '#FFFFFF',
    alignSelf: 'center',
    marginLeft: 35,
    fontFamily: 'Poppins-SemiBold',
  },
  form_profile: {
    padding: 10,
    marginLeft: 10,
  },
  row_form_profile: {
    flexDirection: 'row',
    padding: 10,
    height: 60,
    justifyContent: 'center',
  },
  title_form_profile: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 17,
    width: 80,
    alignSelf: 'center',
  },
  infor_form_profile: {
    width: '82%',
    borderRadius: 10,
  },
  information_profile: {
    textAlign: 'center',
    paddingTop: '2%',
    fontSize: 17,
    fontFamily: 'Poppins-Medium',
  },
  information_email_profile: {
    paddingTop: '3%',
    fontSize: 11,
    fontFamily: 'Poppins-Medium',
    textAlign: 'center',
  },
  btn_infor: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  btn_click: {
    width: 100,
    height: 30,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5FAD41',
  },
  text_btn: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    marginTop: '3%',
    color: '#FFFFFF',
  },
  package: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    alignSelf: 'center',
  },
  title_package: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    marginRight: 10,
  },
  btn_click_package: {
    width: 100,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 30,
    backgroundColor: '#5FAD41',
  },
  icon_view: {
    position: 'absolute',
    marginLeft: 70,
    marginTop: 50,
  },
  icon: {
    color: 'green',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    alignSelf: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  btn_modal_update: {
    flexDirection: 'row',
  },
  buttonClose: {
    backgroundColor: 'red',
    width: 100,
    margin: 20,
  },
});
