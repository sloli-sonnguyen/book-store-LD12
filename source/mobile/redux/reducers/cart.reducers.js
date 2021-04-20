import {
  CREATE_EMPTY_CART,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_QUANTITY,
  UPDATE_CART_NOTE,
} from '../constants/cartContants';
import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('cart', jsonValue);
    console.log('Luu thanh cong!');
  } catch (e) {
    console.log('Luu that bai!');
  }
};

const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('cart');
    console.log('Doc thanh cong!');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log('Doc that bai!');
  }
};

const initialState = getData();

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
      storeData(action.data);
      return {
        ...action.data,
      };
    // Thêm một sản phẩm vào giỏ hàng
    case ADD_TO_CART:
      // Kiem tra san pham da co trong gio hang chua
      if (state.cartItemIdList.indexOf(action.data.id) !== -1) {
        console.log('San pham da co trong gio hang');
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
      storeData(newState);
      return newState;
    // Cập nhật số lượng của 1 loại sản phần trong giỏ hàng
    case UPDATE_QUANTITY:
      const { itemIndex, newQuantity } = action.data;
      const { price, salePercent } = state.data[itemIndex];
      state.data[itemIndex].quantity = newQuantity;
      state.data[itemIndex].total = Math.floor(
        price * salePercent * state.data[itemIndex].quantity,
      );
      storeData({ ...state, totalPrice: totalPrice(state.data) });
      return {
        ...state,
        totalPrice: totalPrice(state.data),
      };
    // Cập nhật ghi chú
    case UPDATE_CART_NOTE:
      storeData({ ...state, note: action.data });
      return {
        ...state,
        note: action.data,
      };
    // Xóa 1 sản phầm trong giỏ hàng
    case REMOVE_FROM_CART:
      state.data.splice(action.data, 1);
      state.cartItemIdList.splice(action.data, 1);
      // luu len localStorage
      storeData({
        ...state,
        totalPrice: totalPrice(state.data),
      });
      console.log('Xoa thanh cong');
      return {
        ...state,
        totalPrice: totalPrice(state.data),
      };
    //  Mặc định
    default:
      return state;
  }
};

export default cart;

// const initialState = {
//   products: [
//     {
//       id: '1',
//       title: 'Corporate Infrastructure Associate',
//       price: '449.00',
//       salePercent: 0.3,
//       quantity: 71647,
//       totalPrice: 1000,
//       category: 'history',
//       language: 'japanese',
//       imageUrl:
//         'https://cdn.shopify.com/s/files/1/0359/5979/9852/products/shop-new-1.jpg',
//     },
//     {
//       id: '2',
//       title: 'Dynamic Security Orchestrator',
//       price: '843.00',
//       salePercent: 0.7,
//       quantity: 36367,
//       totalPrice: 1000,
//       category: 'history',
//       language: 'japanese',
//       imageUrl:
//         'https://cdn.shopify.com/s/files/1/0359/5979/9852/products/shop-new-100.jpg',
//     },
//     {
//       id: '3',
//       title: 'National Accountability Director',
//       price: '170.00',
//       salePercent: 0.5,
//       quantity: 64556,
//       totalPrice: 1000,
//       category: 'history',
//       language: 'japanese',
//       imageUrl:
//         'https://cdn.shopify.com/s/files/1/0359/5979/9852/products/shop-new-34.jpg',
//     },
//   ],
//   note: '',
// };

// const cart = (state = initialState, action) => {
//   switch (action.type) {
//     default:
//       return state;
//   }
// };

// export default cart;
