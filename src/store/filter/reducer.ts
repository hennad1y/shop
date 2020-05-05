import {IFilter, FilterActions} from "./interfaces";
import {FilterConstants} from "./constants";

export const initFilter: IFilter = {
    name: '',
    model: '',
    price: {
        min: 0,
        max: 5000
    }
};

export const FilterReducer = (state: IFilter = initFilter, action: FilterActions): IFilter => {
    switch (action.type) {
        case FilterConstants.SET_NAME:
            return {...state, name: action.payload};
        case FilterConstants.SET_MODEL:
            return {...state, model: action.payload};
        case FilterConstants.SET_MIN_PRICE:
            return {...state, price: {...state.price, min: action.payload}};
        case FilterConstants.SET_MAX_PRICE:
            return {...state, price: {...state.price, max: action.payload}};
        case FilterConstants.RESET_FILTER:
            return initFilter;
        default:
            return state;
    }
};