import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const SearchBar = () => {
  return (
    <View style={styles.root}>
      <GooglePlacesAutocomplete
        placeholder="Search"
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
