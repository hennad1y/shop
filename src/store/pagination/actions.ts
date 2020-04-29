import {action} from "typesafe-actions";
import {PaginationConstants} from "./constants";

const changeCurrentPage = (page: number) => action(PaginationConstants.CHANGE_CURRENT_PAGE, page);
const changeLimit = (limit: number) => action(PaginationConstants.CHANGE_LIMIT, limit);

export {
    changeCurrentPage,
    changeLimit
}