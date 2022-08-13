import types from "../types";

export const addToCart = (product) => ({
  type: types.cart.ADD_TO_CART,
  payload: product
});

export const decreaseQuantity = (indx) => ({
  type: types.cart.DECREASE_QUANTITY,
  payload: indx
});

export const increaseQuantity = (indx) => ({
  type: types.cart.INCREASE_QUANTITY,
  payload: indx
});

export const deleteFromCart = (productId) => ({
  type: types.cart.DELETE_FROM_CART,
  payload: productId
});