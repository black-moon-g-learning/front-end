import {Continents_URL} from '@env';
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  Dimensions,
  Image,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import axiosRequest from '../../axios';
import Logout from '../../components/Logout';
import useProfile from '../../hooks/usegetProfile';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const Information = ({navigation}) => {
  const {data, isLoading, isSuccess, refetch} = useProfile([]);
  console.log('information', data);
  const [modalVisible, setModalVisible] = useState(false);

  const [isImage, setIsImage] = useState();
  const [Name, setName] = useState();
  const [Age, setAge] = useState();
  const [Email, setEmail] = useState();
  const [Phone, setPhone] = useState();
  const [Gender, setGender] = useState();
  const [Time, setTime] = useState();

  const handelUpdate = () => {
    axiosRequest
      .put(`${Continents_URL}/profile`, {
        firstName: Name,
        age: Age,
        email: Email,
        phone: Phone,
        gender: Gender,
      })
      .then(() =>
        Alert.alert('Notification:', 'Update Successful your profile', [
          {
            text: 'OK',
            onPress: () => {
              console.log('Successful');
            },
          },
        ]),
      )
      .catch(error =>
        Alert.alert('Notification', 'Upload NotSuccessful', [
          {
            text: 'OK',
            onPress: () => {
              console.log(error.response.data);
            },
          },
        ]),
      );
  };

  const handleImage = async () => {
    try {
      const imageResult = await ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true,
      });

      if (imageResult) {
        let localUri = imageResult.path;
        let filename = localUri.split('/').pop();
        let match = /\.(\w+)$/.exec(filename);
        let type = match ? `image/${match[1]}` : 'image';
        let formData = new FormData();
        formData.append('image', {
          uri: localUri,
          name: filename,
          type,
        });
        formData.append('_method', 'patch');
        await axiosRequest
          .post(`${Continents_URL}/profile`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          })
          .then(() =>
            Alert.alert('Notification', 'Upload Successful avatar', [
              {
                text: 'OK',
                onPress: () => {
                  refetch();
                  console.log('successful');
                },
              },
            ]),
          )
          .catch(error => {
            Alert.alert('Notification', 'Upload NotSuccessful avatar', [
              {
                text: 'OK',
                onPress: () => {
                  console.log(error.response);
                },
              },
            ]);
          });
      }
    } catch (error) {
      Alert.alert('Notification', 'Upload NotSuccessful avatar', [
        {
          text: 'OK',
          onPress: () => {
            console.log(error.message);
          },
        },
      ]);
    }
  };

  useEffect(() => {
    if (data) {
      setName(data.firstName);
      setAge(data.age);
      setEmail(data.email);
      setPhone(data.phone);
      setGender(data.gender);
      setIsImage(data.image);
      setTime(data.trial);
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
            <TouchableOpacity
              style={styles.icon_view}
              onPress={() =>
                Alert.alert('Notification', 'Are you change avatar', [
                  {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                  },
                  {
                    text: 'continute',
                    onPress: () => handleImage(),
                  },
                ])
              }>
              <Icon style={styles.icon} name="pencil" size={20} />
            </TouchableOpacity>

            <Text style={styles.name_profile}>{Name}</Text>
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
                <Text style={styles.information_profile} numberOfLines={1}>
                  {Email}
                </Text>
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
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}>
            <View style={styles.modal}>
              <View style={styles.modalView}>
                <View style={styles.row_formmodal_profile}>
                  <Text style={styles.title_form_profile}>Name :</Text>
                  <TouchableOpacity style={styles.infor_formmodal_profile}>
                    <TextInput
                      style={styles.information_modal_profile}
                      value={Name}
                      onChangeText={setName}
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles.row_formmodal_profile}>
                  <Text style={styles.title_form_profile}>Age :</Text>
                  <TouchableOpacity style={styles.infor_formmodal_profile}>
                    <TextInput
                      style={styles.information_modal_profile}
                      value={String(Age)}
                      onChangeText={setAge}
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles.row_formmodal_profile}>
                  <Text style={styles.title_form_profile}>Email :</Text>
                  <TouchableOpacity style={styles.infor_formmodal_profile}>
                    <TextInput
                      style={styles.information_modal_profile}
                      value={Email}
                      onChangeText={setEmail}
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles.row_formmodal_profile}>
                  <Text style={styles.title_form_profile}>Phone :</Text>
                  <TouchableOpacity style={styles.infor_formmodal_profile}>
                    <TextInput
                      style={styles.information_modal_profile}
                      value={Phone}
                      onChangeText={setPhone}
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles.row_formmodal_profile}>
                  <Text style={styles.title_form_profile}>Gender :</Text>
                  <TouchableOpacity style={styles.infor_formmodal_profile}>
                    <TextInput
                      style={styles.information_modal_profile}
                      value={Gender}
                      onChangeText={setGender}
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
                    onPress={() =>
                      handelUpdate(!data.id) || setModalVisible(!modalVisible)
                    }>
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
              {Time === null ? (
                <Text style={styles.text_package}>Plus</Text>
              ) : (
                <Text style={styles.text_package}>
                  {Time === -1 ? (
                    <Text style={styles.text_package}>Expired</Text>
                  ) : (
                    <Text style={styles.text_package}>{Time} day</Text>
                  )}
                </Text>
              )}
            </TouchableOpacity>
            {Time > 200 ? (
              <Image
                style={{height: 40, width: 40, marginLeft: 20}}
                source={require('../../assets/images/easy.png')}
              />
            ) : (
              <TouchableOpacity
                style={styles.btn_click_package}
                onPress={() => navigation.navigate('Payment')}>
                <Text style={styles.text_btn}>Buy Now</Text>
              </TouchableOpacity>
            )}
          </View>
          <Logout />
        </>
      )}
    </View>
  );
};

export default Information;

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    flex: 1,
  },
  header_profile: {
    width: '96%',
    height: 100,
    backgroundColor: '#5FAD41',
    alignSelf: 'center',
    flexDirection: 'row',
    borderRadius: 10,
    marginTop: '2%',
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
    marginLeft: 20,
  },
  row_form_profile: {
    flexDirection: 'row',
    padding: 10,
    height: 50,
    justifyContent: 'center',
  },
  title_form_profile: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 17,
    width: '30%',
    alignSelf: 'center',
  },
  infor_form_profile: {
    width: '70%',
    borderRadius: 10,
    alignItems: 'center',
  },
  information_profile: {
    paddingTop: '3%',
    fontSize: 17,
    fontFamily: 'Poppins-Medium',
    marginRight: 10,
  },
  information_modal_profile: {
    borderWidth: 1,
    borderRadius: 20,
    textAlign: 'center',
  },
  infor_formmodal_profile: {
    width: '80%',
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
    marginTop: 20,
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
    marginLeft: '21%',
    marginTop: '15%',
  },
  icon: {
    color: 'yellow',
  },
  row_formmodal_profile: {
    flexDirection: 'row',
    padding: 10,
    height: 60,
    justifyContent: 'center',
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
    backgroundColor: 'green',
    width: 100,
    margin: 20,
  },

  text_package: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    color: 'black',
  },
  modal: {
    backgroundColor: '#00000099',
    flex: 1,
    justifyContent: 'center',
  },
});
