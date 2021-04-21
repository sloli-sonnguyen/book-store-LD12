import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import AboutScreen from '../screens/AboutScreen';
import ProductStack from './ProductStackNavigator';

const navigators = [
  { id: 0, title: 'Home', icon: 'home', screen: HomeScreen },
  { id: 1, title: 'Products', icon: 'book', screen: ProductStack },
  { id: 2, title: 'Cart', icon: 'cart', screen: CartScreen },
  { id: 3, title: 'About', icon: 'information-outline', screen: AboutScreen },
];

export default navigators;
