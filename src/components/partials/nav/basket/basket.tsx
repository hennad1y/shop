import React from "react";
import "./basket.scss";
import {useSelector} from "react-redux";
import {IRootState} from "../../../../store";
import {ICredentials} from "../../../../store/user/interfaces";

const Basket = () => {
    const credentials = useSelector(({user}: IRootState): ICredentials => (user.userInfo.credentials));

    if (!credentials.buy) return null;

    return (
        <li>
            <a href="#basket-modal" className="waves-effect waves-light modal-trigger basket-wrapper">
                <span className="badge blue">0</span>
                <i className="material-icons">shopping_basket</i>
            </a>
        </li>
    )
};

export default Basket;