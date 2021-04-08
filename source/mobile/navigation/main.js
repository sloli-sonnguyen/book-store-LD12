import HomeScreen from '../screens/HomeScreen';
import ProductsScreen from '../screens/ProductsScreen';
import CartScreen from '../screens/CartScreen';
import HistoryScreen from '../screens/HistoryScreen';

const navigators = [
  { id: 0, title: 'Home', icon: 'home', screen: HomeScreen },
  { id: 1, title: 'Products', icon: 'book', screen: ProductsScreen },
  { id: 2, title: 'Cart', icon: 'cart', screen: CartScreen },
  { id: 3, title: 'History', icon: 'history', screen: HistoryScreen },
];

export default navigators;
