import React, {useEffect} from "react";
import "./basket.scss";
import {useDispatch, useSelector} from "react-redux";
import {IRootState} from "../../../../store";
import {ICredentials, IUserInfo} from "../../../../store/user/interfaces";
import {IBasketProduct} from "../../../../store/basket/interfaces";
import {setUserID} from "../../../../store/basket/actions";

const Basket = () => {

    const dispatch = useDispatch();
    const credentials = useSelector(({user}: IRootState): ICredentials => (user.userInfo.credentials));
    const basketProducts = useSelector(({basket}: IRootState): IBasketProduct[] => (basket.products));
    const {id} = useSelector(({user}: IRootState): Pick<IUserInfo, "id"> => (user.userInfo));

    useEffect(() => {
        dispatch(setUserID(id))
    }, [dispatch, id]);

    if (!credentials.buy) return null;

    return (
        <li>
            <a href="#basket-modal" className="waves-effect waves-light modal-trigger basket-wrapper">
                <span className="badge blue">{basketProducts.length}</span>
                <i className="material-icons">shopping_basket</i>
            </a>
        </li>
    )
};

export default Basket;