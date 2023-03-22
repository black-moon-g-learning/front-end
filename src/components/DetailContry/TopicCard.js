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
const TopicCard = ({item, navigation}) => {
  const handlePress = () => {
    navigation.navigate('listvideo', {item});
    navigation.navigate('videos', {item});
  };
  return (
    <TouchableOpacity style={styles.TopicCards_container} onPress={handlePress}>
      <View style={styles.TopicCards_item}>
        <Image
          style={styles.TopicCards_img}
          resizeMode="cover"
          source={{
            uri: item.image,
          }}
        />
        <Text style={styles.TopicCards_name}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TopicCard;

const styles = StyleSheet.create({
  TopicCards_container: {
    width: (width * 2.85) / 6,
    height: 155,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    paddingBottom: 15,
  },
  TopicCards_item: {
    // margin: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    width: (width * 2.64) / 6,
    height: 140,
    backgroundColor: '#FEFEFE',
    borderRadius: 20,
    // padding: 20,

  },
  TopicCards_img: {
    marginTop: '-3%',
    width: (width * 2.64) / 6,
    height: 100,
    // borderRadius: 15,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.18,
    shadowRadius: 4,
    elevation: 5,
  },
  TopicCards_name: {
    color: '#35383F',
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 18,
    textAlign: 'center',
    paddingBottom: 7,
    fontFamily: 'Poppins-Medium',
  },
  imgBgd: {
    backgroundColor: '#FFFFFF',
    width: 131,
    height: 84,
  },
});
