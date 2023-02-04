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
    <ScrollView style={styles.itempopular_container}>
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
  container: {
    margin: 10,
    fontSize: 18,
  },
  header: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000009',
  },
  itempopular_container: {
    width: 200,
    height: 200,
  },
  itempoopular_item: {
    paddingTop: 5,
    textAlign: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itempopular_image: {
    width: 170,
    height: 110,
    borderRadius: 10,
  },
  itempopular_country: {
    paddingTop: 5,
    color: '#000000',
    fontSize: 20,
  },

  itemcountries_item: {
    width: '90%',
    height: 150,
    textAlign: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    borderRadius: 10,
    margin: 10,
  },
  itemcountries_image: {
    width: '90%',
    height: 100,
    borderRadius: 10,
  },
  itemcountries_country: {
    fontSize: 20,
    color: 'black',
    fontWeight: '400',
  },
});
