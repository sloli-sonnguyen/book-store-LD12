import {
  CREATE_EMPTY_CART,
  ADD_TO_CART,
  UPDATE_QUANTITY,
  UPDATE_CART_NOTE,
  REMOVE_FROM_CART,
} from '../constants/cartContants';

import { generateUniqueId } from '../../utils/random.utils';

export const createEmptyCart = () => {
  return {
    type: CREATE_EMPTY_CART,
    data: {
      cartId: generateUniqueId('cart'),
      note: '',
      totalPrice: 0,
      cartItemIdList: [],
      data: [],
    },
  };
};

export const addToCart = (item) => {
  return {
    type: ADD_TO_CART,
    data: item,
  };
};

export const updateItemQuantity = (itemIndex, newQuantity) => {
  return {
    type: UPDATE_QUANTITY,
    data: {
      itemIndex,
      newQuantity,
    },
  };
};

export const deleteCartItem = (itemIndex) => {
  return {
    type: REMOVE_FROM_CART,
    data: itemIndex,
  };
};

export const updateCartNote = (note) => {
  return {
    type: UPDATE_CART_NOTE,
    data: note,
  };
};
