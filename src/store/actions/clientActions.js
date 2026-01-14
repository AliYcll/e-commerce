import axiosInstance from '../../api/axiosInstance';
import {
    SET_USER,
    SET_ROLES,
    SET_THEME,
    SET_LANGUAGE,
    SET_ADDRESS_LIST,
    SET_CARD_LIST,
    SET_ORDER_LIST,
    LOGOUT_USER
} from '../reducers/clientReducer';
import { CLEAR_CART } from '../reducers/shoppingCartReducer';

// Action Creators
export const setUser = (user) => ({ type: SET_USER, payload: user });
export const setRoles = (roles) => ({ type: SET_ROLES, payload: roles });
export const setTheme = (theme) => ({ type: SET_THEME, payload: theme });
export const setLanguage = (language) => ({ type: SET_LANGUAGE, payload: language });
export const setAddressList = (addressList) => ({ type: SET_ADDRESS_LIST, payload: addressList });
export const setCardList = (cardList) => ({ type: 'SET_CARD_LIST', payload: cardList });

export const logoutUser = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name"); // Temizlemek iyi olabilir
    return { type: LOGOUT_USER };
};

// Thunk to fetch roles
export const getRoles = () => (dispatch, getState) => {
    const { client } = getState();

    // Check if roles are already fetched (optimization)
    if (client.roles && client.roles.length > 0) {
        return;
    }

    axiosInstance.get('/roles')
        .then(res => {
            dispatch(setRoles(res.data));
        })
        .catch(err => {
            console.error("Error fetching roles:", err);
        });
};

// Thunk to login user
export const loginUser = (credentials) => (dispatch) => {
    return axiosInstance.post('/login', credentials)
        .then(res => {
            dispatch(setUser(res.data));
            // Handle Remember Me
            if (credentials.rememberMe) {
                localStorage.setItem("token", res.data.token);
            }
            return res.data;
        })
        .catch(err => {
            throw err;
        });
};

export const verifyToken = () => (dispatch) => {
    const token = localStorage.getItem("token");

    if (token) {
        // Set Authorization header
        axiosInstance.defaults.headers.common['Authorization'] = token;

        axiosInstance.get('/verify')
            .then(res => {
                // Determine user object based on response structure
                // Assuming res.data is the user object directly or contains it
                dispatch(setUser(res.data));

                // Renew token in localStorage
                localStorage.setItem("token", res.data.token);
                // Ensure header is updated (in case it changed)
                axiosInstance.defaults.headers.common['Authorization'] = res.data.token;
            })
            .catch(err => {
                console.error("Token verification failed:", err);
                localStorage.removeItem("token");
                delete axiosInstance.defaults.headers.common['Authorization'];
                dispatch(logoutUser());
            });
    }
};

// Address Actions

export const getAddressList = () => (dispatch) => {
    axiosInstance.get('/user/address')
        .then(res => {
            dispatch(setAddressList(res.data));
        })
        .catch(err => {
            console.error("Error getting address list:", err);
        });
};

export const addAddress = (address) => (dispatch) => {
    return axiosInstance.post('/user/address', address)
        .then(res => {
            // After adding, verify backend response. 
            // Usually we refetch the list or append to current list. Refetching is safer for ID sync.
            dispatch(getAddressList());
        })
        .catch(err => {
            console.error("Error adding address:", err);
            throw err;
        });
};

export const updateAddress = (address) => (dispatch) => {
    return axiosInstance.put('/user/address', address)
        .then(res => {
            dispatch(getAddressList());
        })
        .catch(err => {
            console.error("Error updating address:", err);
            throw err;
        });
};

export const deleteAddress = (id) => (dispatch) => {
    return axiosInstance.delete(`/user/address/${id}`)
        .then(res => {
            dispatch(getAddressList());
        })
        .catch(err => {
            console.error("Error deleting address:", err);
            throw err;
        });
};

// Card Actions

export const getCards = () => (dispatch) => {
    axiosInstance.get('/user/card')
        .then(res => {
            dispatch(setCardList(res.data));
        })
        .catch(err => {
            console.error("Error getting cards:", err);
        });
};

export const addCard = (card) => (dispatch) => {
    return axiosInstance.post('/user/card', card)
        .then(res => {
            dispatch(getCards());
        })
        .catch(err => {
            console.error("Error adding card:", err);
            throw err;
        });
};

export const updateCard = (card) => (dispatch) => {
    return axiosInstance.put('/user/card', card)
        .then(res => {
            dispatch(getCards());
        })
        .catch(err => {
            console.error("Error updating card:", err);
            throw err;
        });
};

export const deleteCard = (id) => (dispatch) => {
    return axiosInstance.delete(`/user/card/${id}`)
        .then(res => {
            dispatch(getCards());
        })
        .catch(err => {
            console.error("Error deleting card:", err);
            throw err;
        });
};

// Order Actions
export const getOrders = () => (dispatch) => {
    return axiosInstance.get('/order')
        .then(res => {
            dispatch({ type: SET_ORDER_LIST, payload: res.data });
        })
        .catch(err => {
            console.error("Error getting orders:", err);
        });
};

export const createOrder = (orderData) => (dispatch) => {
    return axiosInstance.post('/order', orderData)
        .then(res => {
            dispatch({ type: CLEAR_CART });
            return res.data;
        })
        .catch(err => {
            console.error("Error creating order:", err);
            throw err;
        });
};
