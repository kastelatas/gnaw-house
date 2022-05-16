import types from "../types";

export const getProducts = () => async (dispatch) => {
    dispatch({type: types.products.GET_PRODUCTS_DATA_REQUEST})
    try {
      const res = await fetch('http://localhost:3000/api/products')
      const data = await res.json()
      dispatch({type: types.products.GET_PRODUCTS_DATA_SUCCESS, payload: data})
    } catch (e) {
      dispatch({type: types.products.GET_PRODUCTS_DATA_ERROR, payload: e})
    }
}