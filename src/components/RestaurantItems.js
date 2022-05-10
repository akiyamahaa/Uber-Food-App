import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const RestaurantItems = (props) => {
  return (
    <View >
      {props.restaurantData.map((restaurant, index) => (
        <TouchableOpacity activeOpacity={1} key={index}>
          <View
            style={{
              marginTop: 10,
              padding: 15,
              backgroundColor: 'white',
            }}
          >
            <RestaurantImage image={restaurant.image_url} />
            <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default RestaurantItems;

const styles = StyleSheet.create({});

const RestaurantImage = (props) => (
  <View>
    <Image
      source={{
        uri: props.image,
      }}
      style={{
        width: '100%',
        height: 180,
      }}
    />
    <TouchableOpacity
      style={{
        position: 'absolute',
        right: 20,
        top: 20,
      }}
    >
      <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
    </TouchableOpacity>
  </View>
);

const RestaurantInfo = (props) => (
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 10,
    }}
  >
    <View>
      <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{props.name}</Text>
      <Text style={{ fontSize: 13, color: 'gray' }}>30-45 • min</Text>
    </View>
    <View
      style={{
        backgroundColor: '#eee',
        height: 30,
        width: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
      }}
    >
      <Text>{props.rating}</Text>
    </View>
  </View>
);
