import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header/Header';

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Header title='Home' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
