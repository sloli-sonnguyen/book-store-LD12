import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import Header from '../components/Header/Header';
import { Button } from 'react-native-paper';

export default function ProductDetailScreen() {
  return (
    <View style={styles.container}>
      <Header title="ProductDetail" />
      <ScrollView style={styles.productDetailWrapper}>
        <View style={styles.titleWrapper}>
          <Text style={styles.titleText}>
            Harry Potter and the goblet of fire
          </Text>
        </View>
        <View style={styles.item}>
          <View style={styles.imageWrap}>
            <Image
              style={styles.image}
              source={{
                uri:
                  'https://themeswow.com/themeforest/silvius/silvius-light/img/11.jpg',
              }}
            />
          </View>
          <View style={styles.infoWrapper}>
            <View style={styles.bookAuthorWrapper}>
              <Text style={styles.bookAuthorReview}>By J.K. Rowling</Text>
              <Text style={styles.bookAuthorReview}>Series Harry Potter</Text>
            </View>
            <View style={styles.rateWrapper}>
              <AntDesign name="star" size={18} color="orange" />
              <AntDesign name="star" size={18} color="orange" />
              <AntDesign name="star" size={18} color="orange" />
              <AntDesign name="star" size={18} color="orange" />
              <AntDesign name="staro" size={18} color="orange" />
              <Text style={styles.rateScore}>4.6/5</Text>
            </View>
            <Button
              mode="contained"
              color="#2196f3"
              onPress={() => console.log('Pressed')}
              contentStyle={styles.button}
            >
              START READING
            </Button>
          </View>
        </View>
        <View style={styles.titleWrapper}>
          <Text style={styles.subTitleText}>Synopsis</Text>
        </View>
        <View>
          <Text style={styles.synopsisText}>
            There will be three tasks, spaced throughout the school year, and
            they will test the champions in many different ways … their magical
            prowess - their daring - their powers of deduction - and, of course,
            their ability to cope with danger.
          </Text>
        </View>
        <View style={styles.titleWrapper}>
          <Text style={styles.subTitleText}>Reviews</Text>
        </View>
        <View style={styles.listReview}>
          <View style={styles.reviewWrapper}>
            <View style={styles.avatarWrapper}>
              <Image
                style={styles.avatar}
                source={{
                  uri:
                    'https://themeswow.com/themeforest/silvius/silvius-light/img/user1.jpg',
                }}
              />
            </View>
            <View style={styles.reviewDetail}>
              <View style={styles.nameAndStar}>
                <Text style={styles.username}>John Doe</Text>
                <View style={[styles.rateWrapper, styles.noMargin]}>
                  <AntDesign name="star" size={18} color="orange" />
                  <AntDesign name="star" size={18} color="orange" />
                  <AntDesign name="star" size={18} color="orange" />
                  <AntDesign name="star" size={18} color="orange" />
                  <AntDesign name="staro" size={18} color="orange" />
                  <MaterialIcons
                    name="keyboard-arrow-right"
                    size={18}
                    color="#757575"
                    style={styles.arrowIcon}
                  />
                </View>
              </View>
              <View>
                <Text style={styles.reviewText}>
                  Facer eirmod vix eu, ne ferri quidam vis. Mea idque nulla...
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.reviewWrapper}>
            <View style={styles.avatarWrapper}>
              <Image
                style={styles.avatar}
                source={{
                  uri:
                    'https://themeswow.com/themeforest/silvius/silvius-light/img/user2.jpg',
                }}
              />
            </View>
            <View style={styles.reviewDetail}>
              <View style={styles.nameAndStar}>
                <Text style={styles.username}>John Doe</Text>
                <View style={[styles.rateWrapper, styles.noMargin]}>
                  <AntDesign name="star" size={18} color="orange" />
                  <AntDesign name="star" size={18} color="orange" />
                  <AntDesign name="star" size={18} color="orange" />
                  <AntDesign name="star" size={18} color="orange" />
                  <AntDesign name="staro" size={18} color="orange" />
                  <MaterialIcons
                    name="keyboard-arrow-right"
                    size={18}
                    color="#757575"
                    style={styles.arrowIcon}
                  />
                </View>
              </View>
              <View>
                <Text style={styles.reviewText}>
                  Facer eirmod vix eu, ne ferri quidam vis. Mea idque nulla...
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.reviewWrapper}>
            <View style={styles.avatarWrapper}>
              <Image
                style={styles.avatar}
                source={{
                  uri:
                    'https://themeswow.com/themeforest/silvius/silvius-light/img/user3.jpg',
                }}
              />
            </View>
            <View style={[styles.reviewDetail, styles.lastReviewBorder]}>
              <View style={styles.nameAndStar}>
                <Text style={styles.username}>John Doe</Text>
                <View style={[styles.rateWrapper, styles.noMargin]}>
                  <AntDesign name="star" size={18} color="orange" />
                  <AntDesign name="star" size={18} color="orange" />
                  <AntDesign name="star" size={18} color="orange" />
                  <AntDesign name="star" size={18} color="orange" />
                  <AntDesign name="staro" size={18} color="orange" />
                  <MaterialIcons
                    name="keyboard-arrow-right"
                    size={18}
                    color="#757575"
                    style={styles.arrowIcon}
                  />
                </View>
              </View>
              <View>
                <Text style={styles.reviewText}>
                  Facer eirmod vix eu, ne ferri quidam vis. Mea idque nulla...
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.titleWrapper}>
          <Text style={styles.subTitleText}>Similar Books</Text>
          <TouchableOpacity onPress={() => console.log('PressedView')}>
            <Text style={styles.linkText}>View all</Text>
          </TouchableOpacity>
        </View>
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
            <Text style={styles.bookAuthorRecommend}>Andrew Loomis</Text>
            <Text style={styles.bookAuthorReview}>
              Loomis is revered amongst artists including the great painter
              Norman ...
            </Text>
          </View>
        </View>
        <View style={styles.item}>
          <View style={styles.imageWrap}>
            <Image
              style={styles.image}
              source={{
                uri:
                  'https://themeswow.com/themeforest/silvius/silvius-light/img/9.jpg',
              }}
            />
          </View>
          <View style={styles.infoWrapper}>
            <Text style={styles.bookTitle}>Crazy Rich Asians</Text>
            <Text style={styles.bookAuthorRecommend}>Kevin Kwan</Text>
            <Text style={styles.bookAuthorReview}>
              Crazy Rich Asians is the outrageously funny debut novel about
              three super-rich ...
            </Text>
          </View>
        </View>
        <View style={styles.item}>
          <View style={styles.imageWrap}>
            <Image
              style={styles.image}
              source={{
                uri:
                  'https://themeswow.com/themeforest/silvius/silvius-light/img/10.jpg',
              }}
            />
          </View>
          <View style={styles.infoWrapper}>
            <Text style={styles.bookTitle}>Wonder</Text>
            <Text style={styles.bookAuthorRecommend}>R J Palacio</Text>
            <Text style={styles.bookAuthorReview}>
              Read the internationally bestselling book before you watch the
              major movie ...
            </Text>
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
  productDetailWrapper: {
    paddingHorizontal: 18,
  },
  titleWrapper: {
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 32,
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
    width: '35%',
    minHeight: 200,
    maxHeight: 200,
    marginRight: 15,
  },
  infoWrapper: {
    width: '52%',
  },
  bookAuthorReview: {
    color: '#757575',
  },
  button: {
    height: 35,
  },
  rateWrapper: {
    marginBottom: 10,
    flexDirection: 'row',
  },
  rateScore: {
    marginLeft: 10,
  },
  subTitleText: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  synopsisText: {
    color: '#757575',
    fontSize: 17,
    marginBottom: 20,
  },
  listReview: {
    borderBottomColor: '#dedede',
    borderTopColor: '#dedede',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    marginBottom: 20,
  },
  reviewWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avatar: {
    flex: 1,
    borderRadius: 50,
  },
  avatarWrapper: {
    height: 85,
    width: 85,
  },
  reviewDetail: {
    paddingVertical: 20,
    width: '73%',
    borderBottomColor: '#dedede',
    borderBottomWidth: 1,
  },
  nameAndStar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  reviewText: {
    color: '#757575',
    width: '80%',
  },
  arrowIcon: {
    marginLeft: 10,
  },
  lastReviewBorder: {
    borderBottomWidth: 0,
  },
  noMargin: {
    marginBottom: 0,
  },
  linkText: {
    color: '#2196f3',
    fontSize: 18,
  },
  bookTitle: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  bookAuthorRecommend: {
    color: '#757575',
    fontWeight: 'bold',
    marginVertical: 10,
  },
  bookAuthorWrapper: {
    marginVertical: 10,
  },
});
