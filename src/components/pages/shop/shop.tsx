import React, {useEffect} from "react";
import "./shop.scss";

import Nav from "../../partials/nav/nav";
import Filter from "../../partials/filter";
import ProductList from "../../partials/product-list";
import UserModal from "../../partials/modals/user-modal";
import BasketModal from "../../partials/modals/basket-modal";
import Preloader from "../../partials/preloader/preloader";
import {useDispatch, useSelector} from "react-redux";
import {fetchUser} from "../../../store/user/async-actions";
import {IRootState} from "../../../store";

const Shop = () => {

    const dispatch = useDispatch();
    const {userInfo, error, loading} = useSelector(({user}: IRootState) => user);

    useEffect(() => {
        fetchUser(dispatch)
    }, [dispatch]);

    if(loading) return <Preloader />;
    if(error) return <div>Error...</div>;

    return (
        <div>
            <Nav name={userInfo.name}/>
            <div className="row">
                <Filter />
                <ProductList />
            </div>
            <UserModal />
            <BasketModal />
        </div>
    )
};

export default Shop;