import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducers';

// Persistence Helpers
const loadFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem('shoppingCart');
        if (serializedState === null) return undefined;
        return { shoppingCart: JSON.parse(serializedState) };
    } catch (e) {
        console.warn("Could not load state from local storage", e);
        return undefined;
    }
};

const saveToLocalStorage = (state) => {
    try {
        const serializedState = JSON.stringify(state.shoppingCart);
        localStorage.setItem('shoppingCart', serializedState);
    } catch (e) {
        console.warn("Could not save state to local storage", e);
    }
};

const middleware = [thunk, logger];
const persistedState = loadFromLocalStorage();

export const store = createStore(
    rootReducer,
    persistedState,
    applyMiddleware(...middleware)
);

store.subscribe(() => {
    saveToLocalStorage(store.getState());
});
