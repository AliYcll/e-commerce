import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_CART_ITEM, CLEAR_CART, SET_PAYMENT, SET_ADDRESS } from '../reducers/shoppingCartReducer';

export const addToCart = (product) => ({
    type: ADD_TO_CART,
    payload: { product }
});

export const removeFromCart = (productId) => ({
    type: REMOVE_FROM_CART,
    payload: productId
});

export const updateCartItem = (productId, updates) => ({
    type: UPDATE_CART_ITEM,
    payload: { productId, updates }
});

export const clearCart = () => ({ type: CLEAR_CART });

export const setPayment = (payment) => ({
    type: SET_PAYMENT,
    payload: payment
});

export const setAddress = (address) => ({
    type: SET_ADDRESS,
    payload: address
});
