import React from 'react';
import {
  ActivityIndicator,
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/FontAwesome';
import UseGetdata from '../../hooks/UseContinents';
import useCreateContribution from '../../hooks/useCreateContribution';
import PickerSelect from '../PickerSelect';

const ContributionForm = () => {
  const API = `countries?attribute=name`;
  const {data, isLoading, isSuccess} = UseGetdata(API);
  const {
    contribution,
    onChangeContribution,
    ValidateContribution,
    handleImage,
  } = useCreateContribution();
  return (
    <KeyboardAvoidingView style={styles.form}>
      {isLoading && <ActivityIndicator color="#00ff00" size="large" />}
      {isSuccess && (
        <>
          <View style={styles.wraper}>
            <TextInput
              placeholder="Title"
              style={styles.txtInput}
              maxLength={100}
              onChangeText={txt =>
                onChangeContribution({...contribution, title: txt})
              }
              value={contribution.title}
            />
            <Icons
              style={styles.icon}
              name="asterisk"
              size={20}
              color={'#FF3334'}
            />
          </View>
          <View style={styles.here}>
            <PickerSelect
              onChangeContribution={onChangeContribution}
              contribution={contribution}
              data={data}
            />
          </View>
          <View style={styles.wraper}>
            <TextInput
              style={styles.txtInput}
              textAlignVertical="top"
              placeholder="Description"
              numberOfLines={5}
              onChangeText={txt =>
                onChangeContribution({...contribution, desc: txt})
              }
              value={contribution.desc}
            />
            <Icons
              style={styles.icon}
              name="asterisk"
              size={20}
              color={'#FF3334'}
            />
          </View>
          <View style={styles.wraper}>
            <TextInput
              style={styles.txtInput}
              placeholder="Choose Image"
              value={contribution.img.uri}
              editable={false}
            />
            <TouchableOpacity onPress={handleImage}>
              <Icon
                style={styles.icon}
                name="plus"
                size={30}
                color={'#5FAD41'}
              />
            </TouchableOpacity>
          </View>
          <Image
            style={styles.img}
            source={contribution.img.uri ? {uri: contribution.img.uri} : null}
          />
          <TouchableOpacity
            style={styles.btn}
            onPress={() => ValidateContribution(contribution)}>
            <Text style={styles.txtBtn}>Submit</Text>
          </TouchableOpacity>
        </>
      )}
    </KeyboardAvoidingView>
  );
};

export default ContributionForm;

const styles = StyleSheet.create({
  form: {
    alignItems: 'center',
  },
  txtInput: {
    color: '#000000',
    opacity: 0.7,
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '400',
    fontFamily: 'Poppins-Bold',
    padding: 20,
    width: '80%',
  },
  btn: {
    width: 155,
    height: 44,
    backgroundColor: '#5FAD41',
    borderRadius: 20,
    margin: 20,
  },
  txtBtn: {
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '600',
    fontFamily: 'Poppins-Bold',
    padding: 10,
  },
  wraper: {
    width: '90%',
    flexDirection: 'row',
    backgroundColor: '#D9D9D9',
    justifyContent: 'space-between',
    borderRadius: 20,
    margin: 10,
  },
  icon: {
    padding: 20,
  },
  img: {
    width: 150,
    height: 100,
    margin: 5,
  },
  here: {
    backgroundColor: '#D9D9D9',
    width: '90%',
    padding: 10,
    borderRadius: 20,
  },
});
