import axiosInstance from '../../api/axiosInstance';
import {
    SET_CATEGORIES,
    SET_PRODUCT_LIST,
    SET_TOTAL,
    SET_FETCH_STATE,
    SET_LIMIT,
    SET_OFFSET,
    SET_FILTER,
    FetchState
} from '../reducers/productReducer';

export const setCategories = (categories) => ({ type: SET_CATEGORIES, payload: categories });
export const setProductList = (productList) => ({ type: SET_PRODUCT_LIST, payload: productList });
export const setTotal = (total) => ({ type: SET_TOTAL, payload: total });
export const setFetchState = (fetchState) => ({ type: SET_FETCH_STATE, payload: fetchState });
export const setLimit = (limit) => ({ type: SET_LIMIT, payload: limit });
export const setOffset = (offset) => ({ type: SET_OFFSET, payload: offset });
export const setFilter = (filter) => ({ type: SET_FILTER, payload: filter });

export const fetchCategories = () => (dispatch, getState) => {
    const { product } = getState();

    // Prevent redundant calls if already fetched or fetching
    if (product.fetchState === FetchState.FETCHING || product.fetchState === FetchState.FETCHED) {
        return;
    }

    dispatch(setFetchState(FetchState.FETCHING));

    axiosInstance.get('/categories')
        .then(res => {
            dispatch(setCategories(res.data));
            dispatch(setFetchState(FetchState.FETCHED));
        })
        .catch(err => {
            console.error("Error fetching categories:", err);
            dispatch(setFetchState(FetchState.FAILED));
        });
};
