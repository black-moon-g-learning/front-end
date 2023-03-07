import React from 'react';
import {
  ActivityIndicator,
  Modal,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Icon from 'react-native-vector-icons/AntDesign';
import UseGetdata from '../../hooks/UseContinents';
import UseLevelModal from '../../hooks/UseLevelModal';
import ContributionModal from '../Contribution/ContributionModal';

const Searchbar = () => {
  const API = `countries?attribute=name`;
  const {data, isLoading, isSuccess} = UseGetdata(API);
  const [filterCountry, setFilterCountry] = React.useState();
  const {isModalVisible, changeModalVisible} = UseLevelModal();
  return (
    <View style={styles.container_header}>
      {isLoading && <ActivityIndicator color="#00ff00" size="large" />}
      {isSuccess && (
        <>
          <View style={styles.selectCon}>
            <RNPickerSelect
              style={pickerSelectStyles}
              useNativeAndroidPickerStyle={false}
              placeholder={{
                label: 'Choose a country...',
                value: null,
              }}
              onValueChange={value => setFilterCountry(value)}
              items={data.data.map(country => ({
                label: country.name,
                value: country.id,
              }))}
              value={filterCountry}
              Icon={() => {
                return (
                  <Icon
                    style={styles.dropdown}
                    name="caretdown"
                    size={20}
                    color="#5FAD41"
                  />
                );
              }}
            />
          </View>
          <TouchableOpacity
            style={styles.Icon}
            onPress={() => changeModalVisible(true)}>
            <Icon name="pluscircle" size={40} color="#FFBF1C" />
          </TouchableOpacity>
          <Modal
            transparent={true}
            animationType="fade"
            visible={isModalVisible}
            nRequestClose={() => changeModalVisible(false)}>
            <ContributionModal changeModalVisible={changeModalVisible} />
          </Modal>
        </>
      )}
    </View>
  );
};

export default Searchbar;

const styles = StyleSheet.create({
  container_header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  Icon: {
    paddingRight: 10,
  },
  selectCon: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 20,
  },
  dropdown: {
    padding: 10,
  },
});
const pickerSelectStyles = StyleSheet.create({
  inputAndroid: {
    fontSize: 16,
    color: '#5FAD41',
    lineHeight: 20,
    paddingLeft: 10,
    fontFamily: 'Poppins-Bold',
  },
  placeholder: {
    color: '#000000',
    opacity: 0.5,
    fontSize: 16,
    lineHeight: 20,
    fontFamily: 'Poppins-Bold',
  },
});
