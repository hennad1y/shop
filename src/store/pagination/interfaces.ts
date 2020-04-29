import {ActionType} from "typesafe-actions";
import * as actions from "./actions";

export type PaginationActions = ActionType<typeof actions>;

export interface IPagination {
    limit: number
    currentPage: number
}