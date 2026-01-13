const initialState = {
    cart: [],
    payment: {},
    address: {}
};

export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const UPDATE_CART_ITEM = 'UPDATE_CART_ITEM';
export const CLEAR_CART = 'CLEAR_CART';
export const SET_PAYMENT = 'SET_PAYMENT';
export const SET_ADDRESS = 'SET_ADDRESS';

export const shoppingCartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            // Check if product already exists
            const existingItemIndex = state.cart.findIndex(item => item.product.id === action.payload.product.id);

            if (existingItemIndex >= 0) {
                // Item exists, update count
                const newCart = [...state.cart];
                newCart[existingItemIndex] = {
                    ...newCart[existingItemIndex],
                    count: newCart[existingItemIndex].count + 1
                };
                return { ...state, cart: newCart };
            } else {
                // New item
                return {
                    ...state,
                    cart: [...state.cart, { count: 1, checked: true, product: action.payload.product }]
                };
            }

        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(item => item.product.id !== action.payload)
            };

        case UPDATE_CART_ITEM:
            return {
                ...state,
                cart: state.cart.map(item =>
                    item.product.id === action.payload.productId
                        ? { ...item, ...action.payload.updates }
                        : item
                )
            };

        case CLEAR_CART:
            return { ...state, cart: [] };

        case SET_PAYMENT:
            return { ...state, payment: action.payload };

        case SET_ADDRESS:
            return { ...state, address: action.payload };

        default:
            return state;
    }
};
