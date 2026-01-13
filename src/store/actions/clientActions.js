import axiosInstance from '../../api/axiosInstance';
import {
    SET_USER,
    SET_ROLES,
    SET_THEME,
    SET_LANGUAGE,
    LOGOUT_USER
} from '../reducers/clientReducer';

// Action Creators
export const setUser = (user) => ({ type: SET_USER, payload: user });
export const setRoles = (roles) => ({ type: SET_ROLES, payload: roles });
export const setTheme = (theme) => ({ type: SET_THEME, payload: theme });
export const setLanguage = (language) => ({ type: SET_LANGUAGE, payload: language });
export const logoutUser = () => {
    localStorage.removeItem("token");
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
