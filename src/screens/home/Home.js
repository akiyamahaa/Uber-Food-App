import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import HeaderTab from '../../components/HeaderTab';
import SearchBar from '../../components/SearchBar';
import Categories from '../../components/Categories';
import RestaurantItem from '../../components/RestaurantItem';

const Home = () => {
  return (
    <View>
      <View style={styles.root}>
        <HeaderTab />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItem />
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'white',
    padding: 15,
  },
});
