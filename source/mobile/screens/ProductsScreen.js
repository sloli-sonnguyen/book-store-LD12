import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import Header from '../components/Header/Header';

function ProductsScreen() {
  const products = useSelector((state) => state.products.data);
  console.log(products);
  return (
    <View style={styles.container}>
      <Header title='Products' />
      <ScrollView>
        <View style={styles.productsWrapper}>
          <Text style={styles.title}>1058 Books</Text>
          <View style={styles.products}>
            <View style={styles.card}>
              <View style={styles.imageWrap}>
                <Image
                  style={styles.image}
                  source={{
                    uri:
                      'https://themeswow.com/themeforest/silvius/silvius-light/img/8.jpg',
                  }}
                />
              </View>
              <Text style={styles.cardTitle}>Drawing the head and hands</Text>
              <Text style={styles.cardAuthor}>Andrew Loomis</Text>
            </View>
            <View style={styles.card}>
              <View style={styles.imageWrap}>
                <Image
                  style={styles.image}
                  source={{
                    uri:
                      'https://themeswow.com/themeforest/silvius/silvius-light/img/9.jpg',
                  }}
                />
              </View>
              <Text style={styles.cardTitle}>Crazy Rich Asians</Text>
              <Text style={styles.cardAuthor}>Kevin Kwan</Text>
            </View>
            <View style={styles.card}>
              <View style={styles.imageWrap}>
                <Image
                  style={styles.image}
                  source={{
                    uri:
                      'https://themeswow.com/themeforest/silvius/silvius-light/img/5.jpg',
                  }}
                />
              </View>
              <Text style={styles.cardTitle}>Wonder</Text>
              <Text style={styles.cardAuthor}>R J Palacio</Text>
            </View>
            <View style={styles.card}>
              <View style={styles.imageWrap}>
                <Image
                  style={styles.image}
                  source={{
                    uri:
                      'https://themeswow.com/themeforest/silvius/silvius-light/img/6.jpg',
                  }}
                />
              </View>
              <Text style={styles.cardTitle}>Wonder</Text>
              <Text style={styles.cardAuthor}>R J Palacio</Text>
            </View>
            <View style={styles.card}>
              <View style={styles.imageWrap}>
                <Image
                  style={styles.image}
                  source={{
                    uri:
                      'https://themeswow.com/themeforest/silvius/silvius-light/img/1.jpg',
                  }}
                />
              </View>
              <Text style={styles.cardTitle}>Wonder</Text>
              <Text style={styles.cardAuthor}>R J Palacio</Text>
            </View>
            <View style={styles.card}>
              <View style={styles.imageWrap}>
                <Image
                  style={styles.image}
                  source={{
                    uri:
                      'https://themeswow.com/themeforest/silvius/silvius-light/img/2.jpg',
                  }}
                />
              </View>
              <Text style={styles.cardTitle}>Wonder</Text>
              <Text style={styles.cardAuthor}>R J Palacio</Text>
            </View>
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
