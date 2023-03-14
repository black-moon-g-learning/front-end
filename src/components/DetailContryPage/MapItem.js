import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {View, StyleSheet} from 'react-native';
import {useRef, useState} from 'react';
import {TouchableOpacity, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';

const Mapitem = () => {
  const navigation = useNavigation();
  const mapRef = useRef(null);
  const [markerPosition, setMarkerPosition] = useState({
    lat: 37.78825,
    lng: -122.4324,
  });
  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
        <Marker
          coordinate={{
            latitude: markerPosition?.lat,
            longitude: markerPosition?.lng,
          }}
        />
      </MapView>
      <View style={styles.searchContainer}>
        <TouchableOpacity
          style={styles.searchBar}
          onPress={() => navigation.navigate('mapview')}>
          <TextInput style={styles.input} placeholder="Search..." />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  searchContainer: {
    top: -48,
    position: 'absolute',
    width: '95%',
  },
  input: {
    width: '16%',
    height: 40,
    borderRadius: 10,
    paddingLeft: 10,
  },
  searchBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 46,
    padding: 10,
    borderWidth: 1,
    borderColor: '#FFBF1C',
    borderRadius: 10,
  },
});

export default Mapitem;
