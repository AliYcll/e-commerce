// Initial State
const initialState = {
    user: {},
    addressList: [],
    creditCards: [],
    orderList: [],
    roles: [],
    theme: "",
    language: ""
};

// Action Types
export const SET_USER = 'SET_USER';
export const SET_ROLES = 'SET_ROLES';
export const SET_THEME = 'SET_THEME';
export const SET_LANGUAGE = 'SET_LANGUAGE';
export const LOGOUT_USER = 'LOGOUT_USER';

export const SET_ADDRESS_LIST = 'SET_ADDRESS_LIST';
export const SET_CARD_LIST = 'SET_CARD_LIST';
export const SET_ORDER_LIST = 'SET_ORDER_LIST';

// Reducer
const clientReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return { ...state, user: action.payload };
        case SET_ROLES:
            return { ...state, roles: action.payload };
        case SET_THEME:
            return { ...state, theme: action.payload };
        case SET_LANGUAGE:
            return { ...state, language: action.payload };
        case SET_ADDRESS_LIST:
            return { ...state, addressList: action.payload };
        case SET_CARD_LIST:
            return { ...state, creditCards: action.payload };
        case SET_ORDER_LIST:
            return { ...state, orderList: action.payload };
        case LOGOUT_USER:
            return { ...state, user: {}, addressList: [], creditCards: [], orderList: [] };
            return { ...state, user: {}, addressList: [], creditCards: [] };
        default:
            return state;
    }
};

export default clientReducer;
