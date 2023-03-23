import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const NewsCard = ({item}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={{uri: item.image}} />
      <View style={styles.infor}>
        <View style={styles.author}>
          <Text style={styles.txt}>{item.public}</Text>
          <View style={styles.devide} />
          <Text numberOfLines={1} style={styles.txt}>
            {item.author}
          </Text>
        </View>
        <View style={styles.card}>
          <Text numberOfLines={2} style={styles.title}>
            {item.title}
          </Text>
          <Text numberOfLines={2} style={styles.txt}>
            {item.description}
          </Text>
          <TouchableOpacity style={styles.btn}>
            <Text
              style={styles.btnTxt}
              onPress={() => navigation.navigate('News', {item})}>
              Read more
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default NewsCard;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: (height * 1.6) / 6,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#5FAD41',
    borderRadius: 10,
    marginBottom: 10,
    paddingLeft: 5,
    borderWidth: 2,
    paddingBottom: 10,
    paddingTop: 10,
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    // alignItems: 'center',
  },
  infor: {
    width: '60%',
    paddingLeft: 10,
    paddingRight: 10,
  },
  author: {
    width: '60%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 5,
  },
  devide: {
    width: 1,
    height: 14,
    backgroundColor: '#000000',
    marginLeft: 10,
    marginRight: 10,
  },
  title: {
    color: '#000000',
    fontSize: 11,
    marginBottom: 5,
    fontFamily: 'Poppins-Medium',
    lineHeight: 20,
  },
  txt: {
    color: '#000000',
    fontSize: 9,
    fontWeight: '500',
    lineHeight: 16,
    marginBottom: 5,
    fontFamily: 'Poppins-Regular',
  },
  btn: {
    width: 120,
    height: 33,
    padding: 5,
    backgroundColor: '#FFC845',
    borderRadius: 10,
    marginTop: 10,
  },
  btnTxt: {
    color: '#012030',
    fontSize: 13,
    lineHeight: 16,
    padding: 5,
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
  },
  img: {
    width: '37%',
    height: 125,
    borderRadius: 10,
  },
});
