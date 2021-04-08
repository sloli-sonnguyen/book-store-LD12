import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

function Header({ title, statusBarHidden }) {
  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor='#DDD'
        barStyle='dark-content'
        showHideTransition='slide'
        hidden={false}
      />
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#3c6dcc',
    paddingTop: 20,
    paddingBottom: 20,
  },
  title: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default Header;
