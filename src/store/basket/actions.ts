import {action} from "typesafe-actions";
import {BasketConstants} from "./constants";
import {IBasketProduct} from "./interfaces";

const setUserID = (id: string | number) => action(BasketConstants.SET_USER_ID, id);
const addItemToBasket = (item: IBasketProduct) => action(BasketConstants.ADD_ITEM_TO_BASKET, item);
const removeItemFromBasket = (id: number | string) => action(BasketConstants.REMOVE_ITEM_FROM_BASKET, id);
const clearBasket = () => action(BasketConstants.CLEAR_BASKET);
const changeQuantityItem = (id: number | string, quantity: number) => action(BasketConstants.CHANGE_QUANTITY_ITEM, {id, quantity});

export {
    setUserID,
    addItemToBasket,
    removeItemFromBasket,
    clearBasket,
    changeQuantityItem
}