import {combineReducers, createStore} from 'redux';
import {ProductsReducer} from './product/reducer';
import {IProducts} from './product/interfaces';
import {UserReducer} from "./user/reducer";
import {IUser} from "./user/interfaces";
import {IPagination} from "./pagination/interfaces";
import {PaginationReducer} from "./pagination/reducer";
import {IBasket} from "./basket/interfaces";
import {BasketReducer} from "./basket/reducer";
import {IFilter} from "./filter/interfaces";
import {FilterReducer} from "./filter/reducer";

export interface IRootState {
    products: IProducts
    user: IUser
    pagination: IPagination
    basket: IBasket
    filter: IFilter
}

const store = createStore<IRootState, any, any, any>(
    combineReducers({
        products: ProductsReducer,
        user: UserReducer,
        pagination: PaginationReducer,
        basket: BasketReducer,
        filter: FilterReducer
    })
);

export default store;