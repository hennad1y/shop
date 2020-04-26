import {action} from 'typesafe-actions';
import {IProduct} from "./interfaces";
import {ProductConstants} from "./constants";

const requestProductsData = () => action(ProductConstants.REQUEST_PRODUCTS_DATA);
const requestProductsSuccess = (data: IProduct[]) => action(ProductConstants.REQUEST_PRODUCTS_SUCCESS, data);
const requestProductsError = (error: string) => action(ProductConstants.REQUEST_PRODUCTS_ERROR, error);

export {
    requestProductsData,
    requestProductsSuccess,
    requestProductsError
}