import { combineReducers } from 'redux';
import products from './products.reducers';
import cart from './cart.reducers';

const rootReducers = combineReducers({
  products,
  cart,
});

export default rootReducers;
