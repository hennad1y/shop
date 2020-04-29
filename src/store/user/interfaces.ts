import {ActionType} from "typesafe-actions";
import * as actions from './actions';

export type UserActions = ActionType<typeof actions>;

export interface ICredentials {
    buy: boolean
    edit: boolean
}

export interface IUserInfo {
    readonly id: number | string
    name: string
    credentials: ICredentials
}

export interface IUser {
    userInfo: IUserInfo
    loading: boolean
    error: string
}