import types from '../types'
import {useStore} from "react-redux";

const initialState = {
  cart: [],
  count: 0,
  price: 0,
  numberCart: 0
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.cart.ADD_TO_CART:
      const product = action.payload;
      let newCart = Object.assign([], state.cart);
      let newCount = state.count;
      let newPrice = state.price;

      newCount += Number(product.count)
      newPrice += Number(product.count) * Number(product.price)

      if (state.count === 0) {
        newCart.push(product);
      } else {
        let check = false;
        newCart.map((item, key) => {
          if (item.id === product.id && item.size === product.size) {
            state.cart[key].count += product.count;
            check = true;
          }
        });
        if (!check) {
          newCart.push(product);
        }
      }
      localStorage.setItem('cart', JSON.stringify(newCart))
      return {cart: newCart, count: newCount, price: newPrice}

    case types.cart.DELETE_FROM_CART:
      let productInCart = state.cart.find(product => product.productId === action.payload)
      let quantity_ = productInCart.count;
      return {
        ...state,
        count: state.count - quantity_,
        price: state.price - (productInCart.count * productInCart.price),
        cart: state.cart.filter(item => {
          return item.productId !== productInCart.productId
        })
      }

    case types.cart.INCREASE_QUANTITY:
      state.count++
      state.cart[action.payload].count++;
      let totalCart = 0;
      Object.keys(state.cart).forEach(function (item) {
        totalCart += state.cart[item].count * state.cart[item].price;
      });
      return {
        ...state,
        price: totalCart
      }

    case types.cart.DECREASE_QUANTITY:
      let quantity = state.cart[action.payload].count;
      totalCart = 0;

      if (quantity > 1) {
        state.count--;
        state.cart[action.payload].count--;
        Object.keys(state.cart).forEach((item) => {
          totalCart += state.cart[item].count * state.cart[item].price;
        });
      } else {
        totalCart = state.price;
      }

      return {
        ...state,
        price: totalCart
      }

    default:
      return {...state}
  }
}

export default cartReducer
