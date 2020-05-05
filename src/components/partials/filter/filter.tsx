import React, {MouseEvent} from "react";
import "./filter.scss";
import Price from "./price";
import ModelList from "./model-list";
import {IProduct} from "../../../store/product/interfaces";
import {IFilter} from "../../../store/filter/interfaces";
import {useDispatch, useSelector} from "react-redux";
import {IRootState} from "../../../store";
import {initFilter} from "../../../store/filter/reducer";
import {resetFilter} from "../../../store/filter/actions";

export const filterFunc = (products: IProduct[], filter: IFilter) => {
    let filterProducts = [...products];

    if (filter.model) {
        filterProducts = filterProducts.filter(item => item.model === filter.model)
    }

    if (filter.name) {
        filterProducts = filterProducts.filter(item => item.name.toLowerCase().indexOf(filter.name) > -1)
    }


    filterProducts = filterProducts.filter(item => filter.price.min < item.price);
    filterProducts = filterProducts.filter(item => filter.price.max > item.price);

    return filterProducts;
};

const isEqual = (filter: any) => JSON.stringify(filter) === JSON.stringify(initFilter);

const Filter = () => {

    const dispatch = useDispatch();
    const filter = useSelector(({filter}: IRootState) => filter);

    const clearFilter = (e: MouseEvent) => {
        e.preventDefault();
        dispatch(resetFilter())
    };

    return (
        <div className="col s3">
            <div className="row">
                <ModelList/>
            </div>
            <div className="row">
                <Price/>
            </div>
            {
                !isEqual(filter)
                    ? <a href="!#" className="waves-effect waves-light btn"
                         onClick={(e) => clearFilter(e)}>Clear Filter</a>
                    : null
            }
        </div>
    )
};

export default Filter;