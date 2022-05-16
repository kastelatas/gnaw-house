import types from '../types'

const initialState = {
    products: [],
    product: {},
    errors: {},
    loading: true
}

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.products.GET_PRODUCTS_DATA_REQUEST:
            return {...state, loading: true}
        case types.products.GET_PRODUCTS_DATA_SUCCESS:
            return {...state, products: action.payload, loading: false}
        case types.products.GET_PRODUCTS_DATA_ERROR:
            return {...state, loading: false}

        case types.products.GET_PRODUCT_BY_ID_REQUEST:
            return {...state, loading: true}
        case types.products.GET_PRODUCT_BY_ID_SUCCESS:
            return {...state, product: action.payload, loading: false}
        case types.products.GET_PRODUCT_BY_ID_ERROR:
            return {...state, loading: false}

        default:
            return {...state}
    }
}

export default productsReducer
