import {combineReducers, createStore} from 'redux';
import {ProductsReducer} from './product/reducer';
import {IProducts} from './product/interfaces';
import {UserReducer} from "./user/reducer";
import {IUser} from "./user/interfaces";

export interface IRootState {
    products: IProducts
    user: IUser
}

const store = createStore<IRootState, any, any, any>(
    combineReducers({
        products: ProductsReducer,
        user: UserReducer
    })
);

export default store;