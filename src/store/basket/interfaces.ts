import {ActionType} from "typesafe-actions";
import * as actions from "./actions";
import {IProduct} from "../product/interfaces";

export type BasketActions = ActionType<typeof actions>;

export interface IBasketProduct extends Pick<IProduct, "id" | "price" | "name" | "quantity"> {
    basketQuantity: number
}

export interface IBasket {
    id_user: number | string,
    products: IBasketProduct[],
    total: number
}