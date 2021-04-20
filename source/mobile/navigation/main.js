import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import HistoryScreen from '../screens/HistoryScreen';
import ProductStack from './ProductStackNavigator';

const navigators = [
  { id: 0, title: 'Home', icon: 'home', screen: HomeScreen },
  { id: 1, title: 'Products', icon: 'book', screen: ProductStack },
  { id: 2, title: 'Cart', icon: 'shopping-cart', screen: CartScreen },
];

export default navigators;
