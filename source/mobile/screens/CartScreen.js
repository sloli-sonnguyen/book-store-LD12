import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';
import Header from '../components/Header/Header';
import CartItem from '../components/CartItem/CartItem';

function CartScreen() {
  return (
    <View style={styles.container}>
      <Header title="Cart" />
      <ScrollView>
        <View style={styles.titleWrapper}>
          <Text style={styles.titleText}>3 Books in Cart</Text>
        </View>
        <View style={styles.cartList}>
          <CartItem />
          <CartItem />
          <CartItem />
        </View>
        <View style={styles.titleWrapper}>
          <Text style={styles.titleText}>Shipping Info</Text>
        </View>
        <View style={styles.priceWrapper}>
          <View style={styles.subtitleWrapper}>
            <Text>Shipping </Text>
            <Text>$10</Text>
          </View>
          <View style={styles.subtitleWrapper}>
            <Text>Sub total</Text>
            <Text>$10</Text>
          </View>
          <View style={styles.subtitleWrapper}>
            <Text style={styles.bold}>Total</Text>
            <Text style={styles.bold}>$130</Text>
          </View>
        </View>
        <View style={styles.titleWrapper}>
          <Button
            mode="contained"
            color="#2196f3"
            onPress={() => console.log('Pressed')}
            contentStyle={styles.button}
          >
            CONTINUE TO PAYMENT
          </Button>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  titleWrapper: {
    paddingHorizontal: 18,
    marginVertical: 20,
  },
  cartList: {
    paddingHorizontal: 18,
  },
  titleText: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  item: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  image: {
    flex: 1,
  },
  imageWrap: {
    width: '30%',
    minHeight: 170,
    maxHeight: 170,
    backgroundColor: '#DDD',
    marginRight: 15,
  },
  infoWrapper: {
    position: 'relative',
    width: '60%',
  },
  bookTitle: {
    fontWeight: 'bold',
    fontSize: 21,
  },
  bookAuthor: {
    color: '#757575',
    fontSize: 14,
    marginVertical: 10,
  },
  priceText: {
    position: 'absolute',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2196f3',
    bottom: 0,
    right: 0,
  },
  adjustWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  subtitleWrapper: {
    paddingHorizontal: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  priceWrapper: {
    marginVertical: 20,
  },
  bold: {
    fontWeight: 'bold',
  },
  button: {
    height: 50,
    marginHorizontal: 18,
  },
});

export default CartScreen;
