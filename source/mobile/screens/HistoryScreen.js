import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header/Header';

function HistoryScreen() {
  return (
    <View style={styles.container}>
      <Header title='History' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HistoryScreen;
