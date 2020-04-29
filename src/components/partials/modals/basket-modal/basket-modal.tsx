import React, {useEffect, MouseEvent} from "react";
import "./basket-modal.scss";
import {Modal} from "materialize-css";
import {useDispatch, useSelector} from "react-redux";
import {IRootState} from "../../../../store";
import {IBasket} from "../../../../store/basket/interfaces";
import {changeQuantityItem, clearBasket, removeItemFromBasket} from "../../../../store/basket/actions";

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

    const quantityProduct = (id: number | string, quantity: number) => {
        if (!quantity) {
            removeProduct(id);
            return;
        }

        dispatch(changeQuantityItem(id, quantity));
    };

    const removeProduct = (id: number | string) => dispatch(removeItemFromBasket(id));

    return (
        <div id="basket-modal" className="modal basket-modal">
            <div className="modal-content">
                <h4>List of products</h4>
                {
                    products.length ? (
                        <table>
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Actions</th>
                                <th>Price</th>
                            </tr>
                            </thead>

                            <tbody>

                            {products.map((item, index) => (
                                <tr key={item.id}>
                                    <td>{index + 1}</td>
                                    <td>{item.name}</td>
                                    <td>
                                        <button type="button" className="btn-small grey"
                                                onClick={() => quantityProduct(item.id, item.basketQuantity - 1)}>
                                            <i className="material-icons">remove</i>
                                        </button>
                                        &nbsp;
                                        <button type="button"
                                                className={item.quantity === item.basketQuantity ? 'btn-small disabled' : 'btn-small'}
                                                onClick={() => quantityProduct(item.id, item.basketQuantity + 1)}>
                                            <i className="material-icons">add</i>
                                        </button>
                                        &nbsp;
                                        <button type="button" className="btn-small red"
                                                onClick={() => removeProduct(item.id)}>
                                            <i className="material-icons">delete</i>
                                        </button>
                                    </td>
                                    <td>${item.price} x {item.basketQuantity}</td>
                                </tr>
                            ))}

                            <tr>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>
                                    <b>Total: ${total()}</b>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    ) : <div>List empty</div>
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