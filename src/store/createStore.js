import {applyMiddleware, combineReducers, compose, createStore as createReduxStore} from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers';

const createStore = (initialState = {}) => {
    const middleware = [thunk];

    const enhancers = [];
    let composeEnhancers = compose;

    if (__DEV__) {
        if (typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function') {
            composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        }
    }

    const store = createReduxStore(
        reducers(),
        initialState,
        composeEnhancers(
            applyMiddleware(...middleware),
            ...enhancers
        )
    );

    store.asyncReducers = {};

    if (module.hot) {
        module.hot.accept('./reducers', () => {
            const reducers = require('./reducers').default;
            store.replaceReducer(reducers(store.asyncReducers))
        });
    }

    return store
};

export default createStore
