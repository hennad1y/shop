import {IProducts, ProductActions} from "./interfaces";
import {ProductConstants} from "./constants";

export const initProducts: IProducts = {
    products: [],
    loading: true,
    error: ''
};

export const ProductsReducer = (state: IProducts = initProducts, action: ProductActions): IProducts => {
    switch (action.type) {
        case ProductConstants.REQUEST_PRODUCTS_DATA:
            return {
                products: [],
                error: '',
                loading: true
            };
        case ProductConstants.REQUEST_PRODUCTS_SUCCESS:
            return {
                products: action.payload,
                loading: false,
                error: ''
            };
        case ProductConstants.REQUEST_PRODUCTS_ERROR:
            return {
                products: [],
                loading: false,
                error: action.payload
            };
        case ProductConstants.SET_EDIT_ID:
            return {
                ...state,
                editID: action.payload
            };
        case ProductConstants.REMOVE_EDIT_ID:
            return {
                ...state,
                editID: null
            };
        default:
            return state;
    }
};