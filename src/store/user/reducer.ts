import {IUser, UserActions} from "./interfaces";
import {UserConstants} from "./constants";

export const initUser: IUser = {
    userInfo: {
        name: '',
        credentials: {
            buy: false,
            edit: false
        }
    },
    loading: true,
    error: ''
};

export const UserReducer = (state: IUser = initUser, action: UserActions): IUser => {
    switch (action.type) {
        case UserConstants.REQUEST_USER_DATA:
            return {
                ...state,
                loading: true,
                error: ''
            };
        case UserConstants.REQUEST_USER_SUCCESS:
            return {
                userInfo: action.payload,
                loading: false,
                error: ''
            };
        case UserConstants.REQUEST_USER_ERROR:
            return {
                userInfo: initUser.userInfo,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};