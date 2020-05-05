import {action} from "typesafe-actions";
import {FilterConstants} from "./constants";

const setModel = (model: string) => action(FilterConstants.SET_MODEL, model);
const setMinPrice = (min: number) => action(FilterConstants.SET_MIN_PRICE, min);
const setMaxPrice = (max: number) => action(FilterConstants.SET_MAX_PRICE, max);
const setNameFilter = (name: string) => action(FilterConstants.SET_NAME, name);
const resetFilter = () => action(FilterConstants.RESET_FILTER);

export {
    setModel,
    setMinPrice,
    setMaxPrice,
    setNameFilter,
    resetFilter
}