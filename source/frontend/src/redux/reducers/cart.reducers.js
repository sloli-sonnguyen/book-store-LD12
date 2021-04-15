import { ADD_TO_CART, REMOVE_FROM_CART } from '../constants/cartContants';

const initialState = {
  cartId: '2983xDs999',
  note: '',
  totalPrice: 0,
  data: [],
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        data: [...state.data, action.data],
        totalPrice: state.totalPrice + action.data.total,
      };

    case REMOVE_FROM_CART:
      return state;
    default:
      return state;
  }
};

export default cart;
