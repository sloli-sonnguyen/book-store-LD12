import {
  CREATE_EMPTY_CART,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_QUANTITY,
  UPDATE_CART_NOTE,
} from '../constants/cartContants';

const initialState = JSON.parse(localStorage.getItem('cart')) || null;

const totalPrice = (cartItems) => {
  let sum = 0;
  for (let i = 0; i < cartItems.length; i += 1) {
    sum += cartItems[i].total;
  }
  return sum;
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    // Tạo cart rỗng (thêm id)
    case CREATE_EMPTY_CART:
      localStorage.setItem('cart', JSON.stringify(action.data));
      return {
        ...action.data,
      };
    // Thêm một sản phẩm vào giỏ hàng
    case ADD_TO_CART:
      // Kiem tra san pham da co trong gio hang chua
      if (state.cartItemIdList.indexOf(action.data.id) !== -1) {
        alert('San pham da co trong gio hang');
        return state;
      }
      let newState = {
        ...state,
        data: [...state.data, action.data],
        cartItemIdList: [...state.cartItemIdList, action.data.id],
      };
      newState = {
        ...newState,
        totalPrice: totalPrice(newState.data),
      };
      localStorage.setItem('cart', JSON.stringify(newState));
      alert('Thanh cong');
      return newState;
    // Cập nhật số lượng của 1 loại sản phần trong giỏ hàng
    case UPDATE_QUANTITY:
      return state;
    // Cập nhật ghi chú
    case UPDATE_CART_NOTE:
      return state;
    // Xóa 1 sản phầm trong giỏ hàng
    case REMOVE_FROM_CART:
      state.data.splice(action.data, 1);
      state.cartItemIdList.splice(action.data, 1);
      localStorage.setItem('cart', JSON.stringify(state));
      alert('Xoa thanh cong');
      return {
        ...state,
      };
    //  Mặc định
    default:
      return state;
  }
};

export default cart;
