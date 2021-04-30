import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import { useSelector } from 'react-redux';
import Header from '../components/Header/Header';

const renderProductCards = (data, navigation) => {
  if (data) {
    return data.map((item) => (
      <TouchableOpacity
        style={styles.card}
        key={item.id}
        onPress={() => navigation.navigate('ProductDetail', {id: item.id})}
      >
        <View style={styles.imageWrap}>
          <Image style={styles.image} source={{ uri: item.imageUrl }} />
        </View>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardAuthor}>{item.author}</Text>
      </TouchableOpacity>
    ));
  } else {
    return (
      <ActivityIndicator
        color="#2196f3"
        style={{ width: '100%' }}
        size="large"
      />
    );
  }
};

function ProductsScreen({ navigation }) {
  const products = useSelector((state) => state.products.data);
  return (
    <View style={styles.container}>
      <Header title="Products" />
      <ScrollView>
        <View style={styles.productsWrapper}>
          <Text style={styles.title}>1058 Books</Text>
          <View style={styles.products}>
            {renderProductCards(products, navigation)}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  productsWrapper: {
    marginTop: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left',
    alignSelf: 'flex-start',
    marginLeft: '5%',
    marginBottom: 20,
  },
  products: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    margin: 'auto',
    flexWrap: 'wrap',
  },
  card: {
    width: `${95 / 2}%`,
    marginBottom: 20,
  },
  imageWrap: {
    flex: 1,
    minHeight: 250,
    maxHeight: 250,
    backgroundColor: '#DDD',
  },
  image: {
    flex: 1,
  },
  cardTitle: {
    marginTop: 5,
    marginBottom: 5,
    fontWeight: '700',
  },
  cardAuthor: {
    color: '#757575',
  },
});

export default ProductsScreen;
