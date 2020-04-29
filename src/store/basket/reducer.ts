import {IBasket, BasketActions} from "./interfaces";
import {BasketConstants} from "./constants";

const initBasket: IBasket = {
    id_user: '',
    products: [],
    total: 0
};

export const BasketReducer = (state: IBasket = initBasket, action: BasketActions): IBasket => {
    switch (action.type) {
        case BasketConstants.SET_USER_ID:
            return {...state, id_user: action.payload};
        case BasketConstants.ADD_ITEM_TO_BASKET:
            const currentProductsAdd = [...state.products];
            const indexAdd = currentProductsAdd.findIndex(item => item.id === action.payload.id);

            if (indexAdd > -1) currentProductsAdd[indexAdd] = action.payload;

            return {...state, products: indexAdd > -1 ? currentProductsAdd : [...currentProductsAdd, action.payload]};
        case BasketConstants.REMOVE_ITEM_FROM_BASKET:
            const currentProductsRemove = [...state.products];

            const indexRemove = currentProductsRemove.findIndex(item => item.id === action.payload);
            currentProductsRemove.splice(indexRemove, 1);

            return {...state, products: currentProductsRemove};
        case BasketConstants.CLEAR_BASKET:
            return initBasket;
        case BasketConstants.CHANGE_QUANTITY_ITEM:
            const {id, quantity} = action.payload;
            const currentProductsChange = [...state.products];

            const indexChange = currentProductsChange.findIndex(item => item.id === id);
            currentProductsChange[indexChange].basketQuantity = quantity;

            return {...state, products: currentProductsChange};
        default:
            return state;
    }
};