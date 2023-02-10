import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
export const ListVideo = ({navigation, item, videos}) => {
  return (
    <TouchableOpacity
      style={styles.item}
      key={item}
      onPress={() => navigation.navigate('playvideo', {item, videos})}>
      <Image source={{uri: item.image}} style={styles.img} />
      <View>
        <Text style={styles.ContinentsName}>{item.name}</Text>
        <Text style={styles.ContinentsDetail}>{item.author}</Text>
        <Text style={styles.ContinentsDetail}>Publish: {item.publish}</Text>
      </View>
    </TouchableOpacity>
  );
};

export const RecommendVideo = ({navigation, item}) => {
  return (
    <ScrollView style={styles.itemRecommend_container}>
      <TouchableOpacity
        style={styles.item_RCMVideos}
        key={item}
        onPress={() => navigation.navigate('playvideo', {item})}>
        <Image source={{uri: item.image}} style={styles.recommend_image} />
        <View>
          <Text style={styles.recommend_name}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

export const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    height: 120,
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#5FAD41',
    marginBottom: 10,
    alignItems: 'center',
  },
  itemRecommend_container: {
    width: 190,
    height: 170,
  },
  item_RCMVideos: {
    paddingTop: 5,
    textAlign: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  recommend_image: {
    width: 170,
    height: 100,
    borderRadius: 10,
  },
  img: {
    margin: 20,
    width: 100,
    height: 100,
    paddingRight: 10,
    borderRadius: 10,
  },
  ContinentsName: {
    fontSize: 18,
    color: '#323643',
    width: '100%',
  },
  recommend_name: {
    fontSize: 18,
    color: '#323643',
    width: '100%',
    paddingTop: 7,
  },
  ContinentsDetail: {
    fontSize: 13,
    color: '#323643',
    paddingTop: 5,
  },
});
