// import products constants
import axios from 'axios';
import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_ERROR,
} from '../constants/productsContants';
import { REACT_APP_BOOKS_API_URL } from '@env';

export const loadProducts = () => async (dispatch) => {
  try {
    dispatch({ type: FETCH_PRODUCTS_REQUEST });
    const url = REACT_APP_BOOKS_API_URL;
    const response = await axios(url);
    dispatch({
      type: FETCH_PRODUCTS_SUCCESS,
      data: response.data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_PRODUCTS_ERROR,
      message: error,
    });
  }
};

export const postNewProduct = () => 'hi';
