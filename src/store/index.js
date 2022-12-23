import { createSlice, configureStore } from "@reduxjs/toolkit";
const basketSlice = createSlice({
  name: "basket",
  initialState: { basket: [], many: 0, totalPrice: 0, numberofeachelem: [] },
  reducers: {
    AddToBasket(state, action) {
      state.basket = [...state.basket, action.payload];
      state.many = state.many + 1;
      state.totalPrice =
        Number(state.totalPrice) + Number(action.payload.price);
      // if (!state.basket.includes(action.payload)) {
      //   state.numberofeachelem += 1;
      // } else {
      //   state.numberofeachelem -= 1;
      // }
      // state.numberofeachelem = state.basket.indexOf(action.payload);
      // state.numberofeachelem.push(
      //   state.basket.filter((item) => item.id == action.payload.id)
      // );
    },
    removerFromBasket(state, action) {
      state.totalPrice =
        Number(state.totalPrice) - Number(state.basket[action.payload].price);
      state.basket = state.basket.filter(
        (item) => state.basket.indexOf(item) != action.payload
      );
      state.many = state.many - 1;
      state.basket.quantity -= 1;
    },
  },
});
const tokenSlice = createSlice({
  name: "Token",
  initialState: {
    email: "",
    name: "",
    isLoggedIn: false,
    token: "",
    address: {},
    disvision: false,
    visa: {},
  },
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      state.token = action.payload.token;
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
    logout(state, action) {
      state.isLoggedIn = !state.isLoggedIn;
      state.token = action.payload;
      state.name = "";
      state.email = "";
      state.address = "";
    },
    signUp(state, action) {
      state.isLoggedIn = true;
      state.token = action.payload.token;

      state.name = action.payload.name;
      state.email = action.payload.email;
    },
    buy(state, action) {
      state.address = action.payload;
    },
    disvision(state, action) {
      state.disvision = !state.disvision;
    },
    true(state) {
      state.disvision = false;
    },
    visa(state, action) {
      state.visa = action.payload;
    },
  },
});
export const tokenAction = tokenSlice.actions;
export const basketActions = basketSlice.actions;

const store = configureStore({
  reducer: { basket: basketSlice.reducer, token: tokenSlice.reducer },
});
export default store;
