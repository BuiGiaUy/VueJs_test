import { createStore } from "vuex";

export default createStore({
  state: {
    cart: [],
  },
  getters: {
    cartItems: state => {
      return state.cart || [];  // Đảm bảo luôn trả về một mảng
    },
    cartTotalPrice: (state) => {
      // Tính tổng giá tiền của giỏ hàng
      return state.cart.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0);
    },
  },
  mutations: {
    ADD_TO_CART(state, product) {
      const item = state.cart.find((item) => item.id === product.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.cart.push({ ...product, quantity: 1 });
      }
    },
    REMOVE_MOVE_CART(state, productId) {
      state.cart = state.cart.filter((product) => product.id !== productId);
    },
    UPDATE_QUANTITY(state, { productId, quantity }) {
      const item = state.cart.find((item) => item.id === productId);
      if (item && quantity > 0) {
        item.quantity = quantity;
      }
    },
  },
  actions: {
    addToCart({ commit }, product) {
      commit("ADD_TO_CART", product);
    },
    removeFromCart({ commit }, productId) {
      commit("REMOVE_MOVE_CART", productId);
    },
    updateQuantity({ commit }, payload) {
      commit("UPDATE_QUANTITY", payload);
    },
  },
  modules: {},
});
