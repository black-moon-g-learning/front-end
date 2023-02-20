import {
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import React, {useState} from 'react';
import {useNavigationState} from '@react-navigation/native';
import {useQueryClient} from 'react-query';
import UseGetdata from '../hooks/UseContinents';
import {useRoute} from '@react-navigation/native';
const Header = () => {
  const routes = useNavigationState(state => state.routes);
  const currentRoute = routes[routes.length - 1].name;

  const route = useRoute();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const letsearch = async search => {
    if (currentRoute === 'Country') {
      console.log('ban dang o', currentRoute);
    } else if (currentRoute === 'videos') {
      const data = await Search(search);
      setResults(data);
    }
  };
  const Search = search => {
    const {item} = route.params;
    const API = `countries-topics/${item.id}/videos?s=${search}`;
    const {data, isLoading, isSuccess} = UseGetdata(API);
    return data.data;
  };

  console.log('dataaaa', results);
  return (
    <View style={styles.container_header}>
      <TouchableOpacity>
        <Image
          style={styles.character}
          source={require('../assets/images/character.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.searchBar}>
        <TextInput
          value={query}
          onChangeText={setQuery}
          style={styles.input}
          placeholder="Search..."
          onPress={letsearch(query)}
        />
        <Icon name="search" size={25} color={'black'} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container_header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  input: {
    width: '75%',
    height: 40,
    borderRadius: 10,
    backgroundColor: '#F4F1F1',
    paddingLeft: 10,
  },
  searchBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // width: 320,
    height: 46,
    padding: 10,
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 20,
    // backgroundColor: '#F4F1F1',
  },
  character: {
    width: 40.38,
    height: 45,
  },
});
