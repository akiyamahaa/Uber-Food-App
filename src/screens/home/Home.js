import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import HeaderTab from '../../components/HeaderTab';

const Home = () => {
  return (
    <View style={styles.root}>
      <HeaderTab />
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
