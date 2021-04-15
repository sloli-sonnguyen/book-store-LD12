import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
} from 'react-native';

function CartItem() {
  const [quantity, setQuantiy] = useState(1);
  const handleClickIncrease = () => {
    setQuantiy(quantity + 1);
  };
  const handleClickDecrease = () => {
    if (quantity > 1) setQuantiy(quantity - 1);
  };
  return (
    <View style={styles.item}>
      <View style={styles.imageWrap}>
        <Image
          style={styles.image}
          source={{
            uri:
              'https://themeswow.com/themeforest/silvius/silvius-light/img/8.jpg',
          }}
        />
      </View>
      <View style={styles.infoWrapper}>
        <Text style={styles.bookTitle}>Drawing the head and hands</Text>
        <Text style={styles.bookAuthor}>Andrew Loomis</Text>
        <View style={styles.adjustWrapper}>
          <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            style={[styles.buttonWrapper, styles.buttonDecrease]}
            onPress={() => handleClickDecrease()}
          >
            <Text style={styles.buttonText}>-</Text>
          </TouchableHighlight>
          <Text style={styles.quantity}>{quantity}</Text>
          <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            style={[styles.buttonWrapper, styles.buttonIncrease]}
            onPress={() => handleClickIncrease()}
          >
            <Text style={styles.buttonText}>+</Text>
          </TouchableHighlight>
        </View>
        <Text style={styles.priceText}>
          ${Math.round(9.13 * quantity * 100) / 100}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
  buttonWrapper: {
    paddingHorizontal: 15,
    paddingVertical: 3,
    borderColor: 'lightgray',
    borderWidth: 1,
  },
  buttonDecrease: {
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  buttonIncrease: {
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
  },
  quantity: {
    paddingHorizontal: 15,
    paddingVertical: 3,
    fontSize: 18,
    borderColor: 'lightgray',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderRightWidth: 0,
  },
});

export default CartItem;
