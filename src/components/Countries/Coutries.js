import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

export const ItemPopular = ({navigation, item}) => {
  return (
    <ScrollView style={styles.itempopular_container}>
      <TouchableOpacity
        style={styles.itempoopular_item}
        onPress={() => navigation.navigate('TopicCountry', {item})}>
        <Image style={styles.itempopular_image} source={{uri: item.image}} />
        <Text style={styles.itempopular_country}>{item.name}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export const ItemCountries = ({navigation, item}) => {
  return (
    <ScrollView style={styles.itemcountries_container}>
      <TouchableOpacity
        style={styles.itemcountries_item}
        onPress={() => navigation.navigate('TopicCountry', {item})}>
        <Image style={styles.itemcountries_image} source={{uri: item.image}} />
        <Text style={styles.itemcountries_country}>{item.name}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000009',
  },
  itempopular_container: {
    width: 190,
    height: 280,
  },
  itemcountries_container: {width: '90%', height: 190},
  itempoopular_item: {
    paddingTop: 5,
    textAlign: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itempopular_image: {
    width: 170,
    height: 100,
    borderRadius: 10,
  },
  itempopular_country: {
    width: 170,
    paddingTop: 5,
    color: '#000000',
    textAlign: 'center',
    fontSize: 20,
  },

  itemcountries_item: {
    width: '92%',
    height: 160,
    textAlign: 'center',
    alignContent: 'center',
    paddingTop: 15,
    paddingBottom: 18,
    paddingLeft: 3,
    paddingRight: 3,
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#5FAD41',
    borderRadius: 20,
    margin: 10,
  },
  itemcountries_image: {
    width: '90%',
    height: '75%',
    borderRadius: 10,
  },
  itemcountries_country: {
    fontSize: 15,
    color: 'black',
    fontWeight: '400',
  },
});
