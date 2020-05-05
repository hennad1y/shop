import {Dispatch} from "redux";
import {ProductActions} from "./interfaces";
import {requestProductsData, requestProductsError, requestProductsSuccess} from "./actions";
import data from "./data.json";

const fetchProducts = (dispatch: Dispatch<ProductActions>): void => {
    dispatch(requestProductsData());

    setTimeout(() => {
        .95 > Math.random()
            ? dispatch(requestProductsSuccess(data))
            : dispatch(requestProductsError('Something went wrong. Please, reload page'));
    }, 700)
};

export {
    fetchProducts
}