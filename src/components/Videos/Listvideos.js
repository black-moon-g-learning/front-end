import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Video from 'react-native-video';
const ListVideo = ({navigation, item}) => {
  return (
    <TouchableOpacity style={styles.item} key={item}>
      <Video
        source={{uri: item.url}}
        ref={ref => {
          this.player = ref;
        }}
        onBuffer={this.onBuffer}
        onError={this.videoError}
        style={styles.img}
      />
      <View>
        <Text style={styles.ContinentsName}>{item.name}</Text>
        <Text style={styles.ContinentsDetail}>{item.author} regions</Text>
        <Text style={styles.ContinentsDetail}>Publish: {item.publish}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListVideo;
const styles = StyleSheet.create({
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
  img: {
    margin: 20,
    width: 100,
    height: 100,
    paddingRight: 10,
  },
  ContinentsName: {
    fontSize: 20,
    color: '#323643',
  },
  ContinentsDetail: {
    fontSize: 13,
    color: '#323643',
    paddingTop: 5,
  },
});
