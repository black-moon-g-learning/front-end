import React from 'react';
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Logout from '../../components/Logout';
import useProfile from '../../hooks/usegetProfile';

const Information = () => {
  const {data, isLoading, isSuccess} = useProfile([]);
  return (
    <View style={styles.container}>
      {isLoading && <ActivityIndicator color="#00ff00" size="large" />}

      {isSuccess && (
        <>
          <View style={styles.header_profile}>
            <Image
              style={styles.image_profile}
              source={{
                uri: data.image,
              }}
            />
            <Text style={styles.name_profile}>{data.first_name}</Text>
          </View>
          <View style={styles.form_profile}>
            <View style={styles.row_form_profile}>
              <Text style={styles.title_form_profile}>Name</Text>
              <TouchableOpacity style={styles.infor_form_profile}>
                <Text style={styles.information_profile}>
                  {data.first_name}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.row_form_profile}>
              <Text style={styles.title_form_profile}>Age</Text>
              <TouchableOpacity style={styles.infor_form_profile}>
                <Text style={styles.information_profile}>{data.age}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.row_form_profile}>
              <Text style={styles.title_form_profile}>Email</Text>
              <TouchableOpacity style={styles.infor_form_profile}>
                <Text style={styles.information_email_profile}>
                  {data.email}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.row_form_profile}>
              <Text style={styles.title_form_profile}>Phone</Text>
              <TouchableOpacity style={styles.infor_form_profile}>
                <Text style={styles.information_profile}>{data.phone}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.row_form_profile}>
              <Text style={styles.title_form_profile}>Country</Text>
              <TouchableOpacity style={styles.infor_form_profile}>
                <Text style={styles.information_profile}>Viet Nam</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.row_form_profile}>
              <Text style={styles.title_form_profile}>Gender</Text>
              <TouchableOpacity style={styles.infor_form_profile}>
                <Text style={styles.information_profile}>{data.gender}</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.btn_infor}>
            <TouchableOpacity style={styles.btn_click}>
              <Text style={styles.text_btn}>EDIT</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn_click}>
              <Text style={styles.text_btn}>SAVE</Text>
            </TouchableOpacity>
          </View>
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
    borderWidth: 1,
    width: '82%',
    borderRadius: 10,
  },
  information_profile: {
    paddingTop: '3%',
    paddingLeft: 5,
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
  },
  information_email_profile: {
    paddingTop: '3%',
    paddingLeft: 1,
    fontSize: 11,
    fontFamily: 'Poppins-Medium',
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
    marginLeft: 50,
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
});
