import {action} from 'typesafe-actions';
import {IUserInfo} from "./interfaces";
import {UserConstants} from "./constants";

const requestUserData = () => action(UserConstants.REQUEST_USER_DATA);
const requestUserSuccess = (data: IUserInfo) => action(UserConstants.REQUEST_USER_SUCCESS, data);
const requestUserError = (error: string) => action(UserConstants.REQUEST_USER_ERROR, error);

export {
    requestUserData,
    requestUserSuccess,
    requestUserError,
}