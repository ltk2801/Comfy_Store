import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const defaultState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0,
  orderTotal: 0,
};

// Lấy cart từ trong localStorage
const getCartFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("cart")) || defaultState;
};

const cartSlice = createSlice({
  name: "cart",
  initialState: getCartFromLocalStorage(),
  reducers: {
    addItem: (state, action) => {
      // lấy ra sản phẩm đã được gửi lên trong action
      const { product } = action.payload;
      // Kiểm tra item đã có trong giỏ hàng chưa, nếu có rồi thì thêm số lượng vào
      const item = state.cartItems.find((i) => i.cartID === product.cartID);
      item ? (item.amount += product.amount) : state.cartItems.push(product);

      state.numItemsInCart += product.amount;
      state.cartTotal += product.price * product.amount;

      // caseReducers
      cartSlice.caseReducers.calculateTotals(state);

      toast.success("Item added to cart !");
    },
    clearCart: () => {
      localStorage.setItem("cart", JSON.stringify(defaultState));
      return defaultState;
    },
    removeItem: (state, action) => {
      const { cartID } = action.payload;
      const product = state.cartItems.find((i) => i.cartID === cartID);
      state.cartItems = state.cartItems.filter((i) => i.cartID !== cartID);

      state.numItemsInCart -= product.amount;
      state.cartTotal -= product.price * product.amount;

      // caseReducers
      cartSlice.caseReducers.calculateTotals(state);

      toast.success("Item removed to cart !");
    },
    editItem: (state, action) => {
      const { cartID, amount } = action.payload;
      const item = state.cartItems.find((i) => i.cartID === cartID);
      // Ví dụ DH 1 đang có amount là 5, edit thành 6, thì sẽ là += 6-5, cộng thêm 1, còn 5, edit thành 1 thì sẽ là cộng thêm -4, là giảm bớt 4
      state.numItemsInCart += amount - item.amount;
      state.cartTotal += item.price * (amount - item.amount);
      item.amount = amount;
      // caseReducers
      cartSlice.caseReducers.calculateTotals(state);

      toast.success("Cart updated  !");
    },
    calculateTotals: (state) => {
      state.tax = 0.1 * state.cartTotal;
      state.orderTotal = state.cartTotal + state.shipping + state.tax;
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const { addItem, clearCart, removeItem, editItem } = cartSlice.actions;

export default cartSlice.reducer;
