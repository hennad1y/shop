import React, {useEffect} from "react";
import "./product-list.scss";

import ProductItem from "./product-item";
import Pagination from "../pagination/pagination";
import {fetchProducts} from "../../../store/product/async-actions";
import {useDispatch, useSelector} from "react-redux";
import {IRootState} from "../../../store";

const ProductList = () => {

    const dispatch = useDispatch();
    const {products, loading, error} = useSelector(({products}: IRootState) => products);
    const {currentPage, limit} = useSelector(({pagination}: IRootState) => pagination);

    useEffect(() => {
        fetchProducts(dispatch)
    }, [dispatch]);

    return (
        <div className="col s9">
            <Pagination/>

            {loading ? <div>Loading...</div> : null}
            {error ? <div>{error}</div> : null}
            {products && !loading && !error ?
                (
                    <div className="row">
                        {
                            products.length
                                ? [...products].splice(limit * (currentPage - 1), limit).map((item) => <div className="col s4" key={item.id}><ProductItem product={item}/></div>)
                                : <div>List empty</div>
                        }
                    </div>
                )
                : null
            }


        </div>
    )
};

export default ProductList;