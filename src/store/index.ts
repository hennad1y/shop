import {combineReducers, createStore} from 'redux';
import {ProductsReducer} from './product/reducer';
import {IProducts} from './product/interfaces';
import {UserReducer} from "./user/reducer";
import {IUser} from "./user/interfaces";
import {IPagination} from "./pagination/interfaces";
import {PaginationReducer} from "./pagination/reducer";

export interface IRootState {
    products: IProducts
    user: IUser
    pagination: IPagination
}

const store = createStore<IRootState, any, any, any>(
    combineReducers({
        products: ProductsReducer,
        user: UserReducer,
        pagination: PaginationReducer
    })
);

export default store;