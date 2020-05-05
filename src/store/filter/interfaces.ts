import {ActionType} from 'typesafe-actions';
import * as actions from './actions';

export type FilterActions = ActionType<typeof actions>

export interface IFilter {
    name: string
    model: string
    price: {
        min: number
        max: number
    }
}