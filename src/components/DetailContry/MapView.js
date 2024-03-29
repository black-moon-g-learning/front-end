import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {View, StyleSheet} from 'react-native';
import React, {useRef, useState} from 'react';
import {KeyMap} from '@env';

const MapViewCountry = () => {
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
        <GooglePlacesAutocomplete
          styles={{textInput: styles.input}}
          placeholder="Search"
          query={{
            key: KeyMap,
            language: 'en',
          }}
          fetchDetails={true}
          GooglePlacesDetailsQuery={{fields: 'geometry'}}
          onPress={(data, details = null) => {
            const region = details?.geometry?.location;
            setMarkerPosition(region);
            mapRef?.current?.animateToRegion(
              {
                latitude: region?.lat,
                longitude: region?.lng,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
              },
              500,
            );
          }}
          onFail={error => console.error(error)}
        />
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
    top: 5,
    position: 'absolute',
    width: '95%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#FFBF1C',
    borderRadius: 10,
  },
});

export default MapViewCountry;
