import {Dispatch} from "redux";
import {UserActions} from "./interfaces";
import {requestUserData, requestUserError, requestUserSuccess} from "./actions";
import data from "./data.json";
import {UserConstants} from "./constants";

const getUserRole = () => {
    const role = sessionStorage.getItem(UserConstants.USER_ROLE);

    if(!role) {
        sessionStorage.setItem(UserConstants.USER_ROLE, 'user');
        return 'user';
    }

    return role;
};

const fetchUser = (dispatch: Dispatch<UserActions>): void => {
    dispatch(requestUserData());

    setTimeout(() => {
        const userRole = getUserRole();

        .99 > Math.random()
            ? dispatch(requestUserSuccess(userRole === 'user' ? data.user : data.manager))
            : dispatch(requestUserError('User not found'));
    }, 700)
};

export {
    fetchUser
}