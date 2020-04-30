import React, {useEffect, MouseEvent} from "react";
import "./basket-modal.scss";
import {Modal} from "materialize-css";
import {useDispatch, useSelector} from "react-redux";
import {IRootState} from "../../../../store";
import {IBasket} from "../../../../store/basket/interfaces";
import {clearBasket} from "../../../../store/basket/actions";
import TableBasketProducts from "./table-basket-products";

const BasketModal = () => {

    const dispatch = useDispatch();
    const {id_user, products} = useSelector(({basket}: IRootState) => (basket));

    useEffect(() => {
        const el: Element = document.querySelector('.basket-modal')!;
        Modal.init(el);
    }, []);

    const total = () => {
        return products.length && products.reduce((sum, current) => {
            return sum += current.price * current.basketQuantity
        }, 0);
    };

    const order = (e: MouseEvent) => {
        e.preventDefault();
        if (!products.length) return;

        const order: IBasket = {
            id_user,
            products,
            total: total()
        };

        M.toast({
            html: 'Procurement processing',
            completeCallback: () => {
                alert(JSON.stringify(`You have ordered ${order.products.length} products. Total amount: $${order.total}`, null, 2))
                dispatch(clearBasket())
            }
        });
    };

    return (
        <div id="basket-modal" className="modal basket-modal">
            <div className="modal-content">
                <h4>List of products</h4>
                {
                    products.length ? <TableBasketProducts products={products} total={total()} /> : <div>List empty</div>
                }

            </div>
            <div className="modal-footer">
                <a href="#!"
                   className="modal-close waves-effect waves-green btn-flat"
                   onClick={order}>
                    {products.length ? 'Order' : 'Close'}
                </a>
            </div>
        </div>
    )
};

export default BasketModal;