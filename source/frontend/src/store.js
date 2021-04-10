import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducers from './redux/reducers/index';

const middleware = [thunk];
const store = createStore(rootReducers, applyMiddleware(...middleware));

export default store;
