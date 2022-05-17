import types from "../types";

export const getProducts = () => async (dispatch) => {
    dispatch({type: types.products.GET_PRODUCTS_DATA_REQUEST})
    try {
      const res = await fetch(`${process.env.API_HOST}/products`)
      const data = await res.json()
      dispatch({type: types.products.GET_PRODUCTS_DATA_SUCCESS, payload: data})
    } catch (e) {
      dispatch({type: types.products.GET_PRODUCTS_DATA_ERROR, payload: e})
    }
}

export const getProductByID = (productID) => async (dispatch) => {
  dispatch({type: types.products.GET_PRODUCT_BY_ID_REQUEST})
  try {
    const res = await fetch(`${process.env.API_HOST}/product/${productID}`)
    const data = await res.json()
    dispatch({type: types.products.GET_PRODUCT_BY_ID_SUCCESS, payload: data})
  } catch (e) {
    dispatch({type: types.products.GET_PRODUCT_BY_ID_ERROR, payload: e})
  }
}