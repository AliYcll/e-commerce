import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';

// Şimdilik boş bir reducer, daha sonra gerçek reducer'lar eklenecek
const initialReducer = (state = {}, action) => {
    return state;
};

const rootReducer = combineReducers({
    // Reducer'lar buraya eklenecek
    app: initialReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
