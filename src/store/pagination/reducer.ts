import {IPagination, PaginationActions} from "./interfaces";
import {PaginationConstants} from "./constants";

const initPagination: IPagination = {
    limit: 3,
    currentPage: 1
};

export const PaginationReducer = (state: IPagination = initPagination, action: PaginationActions): IPagination => {
    switch (action.type) {
        case PaginationConstants.CHANGE_CURRENT_PAGE:
            return {...state, currentPage: action.payload};
        case PaginationConstants.CHANGE_LIMIT:
            return {...state, limit: action.payload};
        default:
            return state;
    }
};