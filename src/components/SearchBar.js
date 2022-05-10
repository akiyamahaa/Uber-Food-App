import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const PLACE_API_KEY = 'AIzaSyD3g70GIDK8sOJApcdTCW-nmvMQaruRvmw';
// TODO: Enable billing for activate.
// NOTE: Using GooglePlacesAutocomplete to search location then taking location to yelp to get restaurant data
const SearchBar = () => {
  return (
    <View style={styles.root}>
      <GooglePlacesAutocomplete
        query={{
          key: PLACE_API_KEY,
          language: 'vi',
        }}
        placeholder="Search"
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          // const city = data.description.split(',')[0];
          //  setCity(city)
        }}
        styles={{
          textInputContainer: {
            backgroundColor: '#eee',
            borderRadius: 50,
            flexDirection: 'row',
            alignItems: 'center',
          },
          textInput: {
            backgroundColor: '#eee',
            borderRadius: 20,
            fontWeight: '700',
            marginTop: 8,
          },
        }}
        renderLeftButton={() => (
          <View style={{ marginLeft: 15 }}>
            <Ionicons name="location-sharp" size={24} />
          </View>
        )}
        renderRightButton={() => (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginRight: 12,
              backgroundColor: 'white',
              borderRadius: 30,
              padding: 8,
            }}
          >
            <AntDesign
              name="clockcircle"
              size={11}
              style={{ marginRight: 8 }}
            />
            <Text>Search</Text>
          </View>
        )}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  root: {
    marginTop: 15,
    flexDirection: 'row',
  },
});
