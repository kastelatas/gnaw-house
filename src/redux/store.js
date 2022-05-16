import {applyMiddleware, createStore} from 'redux';
import {createWrapper, HYDRATE} from "next-redux-wrapper";
import thunkMiddleware from "redux-thunk";
import {createLogger} from 'redux-logger'
import reducers from './reducers';

const bindMiddleware = (middleware) => {
    if (process.env.NODE_ENV !== 'production') {
        const { composeWithDevTools } = require('redux-devtools-extension')
        middleware.push(
          createLogger({
              level: 'info',
              collapsed: true,
          }),
        )

        return composeWithDevTools(applyMiddleware(...middleware))
    }
    return applyMiddleware(...middleware)
}

const reducer = (state, action) => {
    if (action.type === HYDRATE) {
        const nextState = {
            ...state, // use previous state
            ...action.payload, // apply delta from hydration
        };
        // if (state.products) nextState.products = state.products
        // if (state.products.product) nextState.products.product = state.products.product

        return nextState
    } else {
        return reducers(state, action);
    }
}

export const initStore = () => {
    return createStore(reducer, bindMiddleware([thunkMiddleware]))
}

export const wrapper = createWrapper(initStore)
