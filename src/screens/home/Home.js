import { StyleSheet, View, ScrollView, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import { Divider } from '@rneui/themed';
import HeaderTab from '../../components/HeaderTab';
import SearchBar from '../../components/SearchBar';
import Categories from '../../components/Categories';
import RestaurantItems from '../../components/RestaurantItems';
import BottomTabs from '../../components/BottomTabs';

const localRestaurants = [
  {
    name: 'Beachside Bar',
    image_url:
      'https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg',
    categories: ['Cafe', 'Bar'],
    price: '$$',
    reviews: 1244,
    rating: 4.5,
  },
  {
    name: 'Benihana',
    image_url:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
    categories: ['Cafe', 'Bar'],
    price: '$$',
    reviews: 1244,
    rating: 3.7,
  },
  {
    name: "India's Grill",
    image_url:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
    categories: ['Indian', 'Bar'],
    price: '$$',
    reviews: 700,
    rating: 4.9,
  },
];

const Home = () => {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.headerStyle}>
        <HeaderTab />
        <SearchBar />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <Categories />
        <RestaurantItems restaurantData={restaurantData} />
      </ScrollView>
      <Divider width={1} />
      <BottomTabs/>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#eee',
  },
  headerStyle: {
    backgroundColor: 'white',
    padding: 15,
  },
});
