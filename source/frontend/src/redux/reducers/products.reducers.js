// import products constants
import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_ERROR,
} from '../constants/productsConstants';

const initialState = {
  requesting: false,
  success: false,
  message: null,
  languages: [
    { id: 1, content: 'english' },
    { id: 2, content: 'spanish' },
    { id: 3, content: 'japanese' },
    { id: 4, content: 'korean' },
    { id: 5, content: 'vietnamese' },
    { id: 6, content: 'chinese' },
  ],
  category: [
    { id: 1, content: 'all' },
    { id: 2, content: 'fiction' },
    { id: 3, content: 'history' },
    { id: 4, content: 'religion' },
    { id: 5, content: 'business' },
    { id: 6, content: 'science' },
  ],
  data: null,
};

const products = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
        requesting: true,
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        requesting: false,
        success: true,
        data: action.data,
      };
    case FETCH_PRODUCTS_ERROR:
      return {
        ...state,
        requesting: false,
        message: action.message,
      };
    default:
      return state;
  }
};

export default products;

// const data = JSON.stringify(initialState.data);
// const fs = require('fs');

// fs.writeFile('./demo.json', data, (res) => {
//   console.log('done');
// });
