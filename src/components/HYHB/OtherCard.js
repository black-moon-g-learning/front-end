import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
// import UseNews from '../../hooks/UseNews';
import UseGetdata from '../../hooks/UseContinents';

const OtherCard = ({country, id}) => {
  const API = `information`;
  const {data} = UseGetdata(API);
  const navigation = useNavigation();
  return (
    <View>
      {data.data
        .filter(item => item.country === country && item.id !== id)
        .map(item => (
          <View key={item.id}>
            <View style={styles.titleWraper}>
              <Text style={styles.title}>Other</Text>
            </View>
            <TouchableOpacity
              style={styles.other}
              key={item.id}
              onPress={() => navigation.navigate('News', {item})}>
              <Icon name="caretright" size={16} color="#008000" />
              <Text numberOfLines={2} style={styles.infor}>
                {item.title}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
    </View>
  );
};

export default OtherCard;

const styles = StyleSheet.create({
  titleWraper: {
    width: '30%',
    margin: 10,
    borderBottomColor: '#008000',
    borderBottomWidth: 1,
  },
  title: {
    color: '#000000',
    fontSize: 24,
    lineHeight: 20,
    fontWeight: '600',
    paddingTop: 5,
    paddingBottom: 5,
  },
  other: {
    width: '90%',
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  infor: {
    color: '#008000',
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '600',
    paddingLeft: 10,
  },
});
