import axiosInstance from '../../api/axiosInstance';
import {
    SET_CATEGORIES,
    SET_PRODUCT_LIST,
    SET_TOTAL,
    SET_FETCH_STATE,
    SET_LIMIT,
    SET_OFFSET,
    SET_FILTER,
    SET_SORT,
    FetchState
} from '../reducers/productReducer';

export const setCategories = (categories) => ({ type: SET_CATEGORIES, payload: categories });
export const setProductList = (productList) => ({ type: SET_PRODUCT_LIST, payload: productList });
export const setTotal = (total) => ({ type: SET_TOTAL, payload: total });
export const setFetchState = (fetchState) => ({ type: SET_FETCH_STATE, payload: fetchState });
export const setLimit = (limit) => ({ type: SET_LIMIT, payload: limit });
export const setOffset = (offset) => ({ type: SET_OFFSET, payload: offset });
export const setFilter = (filter) => ({ type: SET_FILTER, payload: filter });
export const setSort = (sort) => ({ type: SET_SORT, payload: sort });

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

// Thunk to fetch products
export const fetchProducts = (categoryId) => (dispatch, getState) => {
    // Note: We are using a separate fetch state for products to avoid conflict with categories if needed.
    // However, the reducer uses a single fetchState. This is a design choice.
    // For now, let's assume fetchState in reducer is shared or primarily for the main content (products).
    // If we need separate states, we should update reducer.

    dispatch(setFetchState(FetchState.FETCHING));

    // Get filter params from state
    const { product } = getState();
    const { limit, offset, filter, sort } = product;

    // Use current params
    const queryParams = new URLSearchParams({
        limit: limit,
        offset: offset
    });

    if (filter) {
        queryParams.append('filter', filter);
    }

    if (sort) {
        queryParams.append('sort', sort);
    }

    if (categoryId) {
        queryParams.append('category', categoryId);
    }

    axiosInstance.get(`/products?${queryParams.toString()}`)
        .then(res => {
            dispatch(setProductList(res.data.products));
            dispatch(setTotal(res.data.total));
            dispatch(setFetchState(FetchState.FETCHED));
        })
        .catch(err => {
            console.error("Error fetching products:", err);
            dispatch(setFetchState(FetchState.FAILED));
        });
};
