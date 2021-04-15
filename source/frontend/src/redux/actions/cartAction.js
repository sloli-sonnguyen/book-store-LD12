import {
  CREATE_EMPTY_CART,
  ADD_TO_CART,
  UPDATE_QUANTITY,
  UPDATE_CART_NOTE,
  REMOVE_FROM_CART,
} from '../constants/cartContants';

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
