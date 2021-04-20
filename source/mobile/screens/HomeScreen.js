import React, { useEffect } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { Button } from 'react-native-paper';
import Header from '../components/Header/Header';
import { useSelector, useDispatch } from 'react-redux';
import { loadProducts } from '../redux/actions/productsAction';

const renderProductCards = (data) => {
  if (data) {
    return data.slice(0, 6).map((item) => (
      <View style={styles.card} key={item.id}>
        <View style={styles.imageWrap}>
          <Image style={styles.image} source={{ uri: item.imageUrl }} />
        </View>
      </View>
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

function HomeScreen() {
  const products = useSelector((state) => state.products);
  const { data } = products;
  const dispatch = useDispatch();

  useEffect(() => {
    if (!data) {
      dispatch(loadProducts());
    }
  }, []);

  return (
    <View style={styles.container}>
      <Header title="Home" />
      <ScrollView>
        <ImageBackground
          source={{
            uri:
              'https://themeswow.com/themeforest/silvius/silvius-light/img/book_bg.png',
          }}
          style={styles.introWrapper}
        >
          <Text style={styles.titleText}>Silvius is your Source for Books</Text>
          <Text style={styles.introSubtitle}>
            The premier media marketplace connecting you to over 150 million of
            free and paid books .
          </Text>
          <Button
            mode="contained"
            color="#2196f3"
            onPress={() => console.log('Pressed')}
            contentStyle={styles.button}
          >
            START READING
          </Button>
        </ImageBackground>
        <View style={styles.recommendWrapper}>
          <View style={styles.titleWrapper}>
            <Text style={styles.titleText}>You Might Like</Text>
            <TouchableOpacity onPress={() => console.log('PressedView')}>
              <Text style={styles.linkText}>View all</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.products}>{renderProductCards(data)}</View>
          <View style={styles.titleWrapper}>
            <Text style={styles.titleText}>Genres</Text>
            <TouchableOpacity onPress={() => console.log('PressedView')}>
              <Text style={styles.linkText}>View all</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.categories}>
            <TouchableOpacity style={styles.category}>
              <Text>Romance</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.category}>
              <Text>Fantasy</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.category}>
              <Text>Short Stories</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.category}>
              <Text>Mystery</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.category}>
              <Text>Biography</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.category}>
              <Text>Historical</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.category}>
              <Text>True Story</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.category}>
              <Text>Psychology</Text>
            </TouchableOpacity>
          </View>
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
  titleText: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  introWrapper: {
    height: 380,
    paddingHorizontal: 18,
    justifyContent: 'center',
  },
  introSubtitle: {
    fontWeight: '100',
    marginVertical: 30,
  },
  button: {
    height: 50,
  },
  recommendWrapper: {
    paddingHorizontal: 18,
    marginTop: 30,
  },
  titleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  linkText: {
    color: '#2196f3',
    fontSize: 18,
  },
  products: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    margin: 'auto',
    flexWrap: 'wrap',
  },
  card: {
    width: `${95 / 3}%`,
    marginBottom: '2.5%',
  },
  imageWrap: {
    flex: 1,
    minHeight: 180,
    maxHeight: 180,
    backgroundColor: '#DDD',
  },
  image: {
    flex: 1,
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    margin: 'auto',
    flexWrap: 'wrap',
  },
  category: {
    paddingVertical: 15,
    borderColor: '#efefef',
    borderWidth: 1,
    width: `${95 / 2}%`,
    marginBottom: '5%',
    alignItems: 'center',
  },
});

export default HomeScreen;
