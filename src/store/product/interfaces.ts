import {ActionType} from 'typesafe-actions';
import * as actions from './actions';

export type ProductActions = ActionType<typeof actions>;

export interface IProduct {
    readonly id: string | number
    name: string
    description: string
    image: string
    price: number
    model: string
    quantity: number
}

export interface IProducts {
    products: IProduct[],
    editID?: number | string | null
    loading: boolean,
    error: string
}