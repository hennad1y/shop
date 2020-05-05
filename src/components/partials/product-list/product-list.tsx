import React, {useEffect, useState} from "react";
import "./product-list.scss";

import ProductItem from "./product-item";
import Pagination from "../pagination/pagination";
import {fetchProducts} from "../../../store/product/async-actions";
import {useDispatch, useSelector} from "react-redux";
import {IRootState} from "../../../store";
import {IProduct} from "../../../store/product/interfaces";
import NameInput from "../filter/name-input";
import {filterFunc} from "../filter/filter";

const ProductList = () => {

    const dispatch = useDispatch();
    const {products, loading, error} = useSelector(({products}: IRootState) => products);
    const filter = useSelector(({filter}: IRootState) => filter);
    const {currentPage, limit} = useSelector(({pagination}: IRootState) => pagination);
    const [productList, setProductList] = useState<null | IProduct[]>(null);

    useEffect(() => {
        fetchProducts(dispatch)
    }, [dispatch]);

    useEffect(() => setProductList(filterFunc(products, filter)), [filter, products]);

    return (
        <div className="col s9">
            <div className="row">
                <NameInput/>
                <Pagination/>
            </div>

            {loading ? <div>Loading...</div> : null}
            {error ? <div>{error}</div> : null}
            {productList && !loading && !error ?
                (
                    <div className="row">
                        {
                            productList && productList.length
                                ? [...productList].splice(limit * (currentPage - 1), limit).map((item) => <div
                                    className="col s4" key={item.id}><ProductItem product={item}/></div>)
                                : <div className="col s12">List empty</div>
                        }
                    </div>
                )
                : null
            }


        </div>
    )
};

export default ProductList;