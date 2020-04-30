import React from "react";
import "./table-basket-products.scss";
import {useDispatch} from "react-redux";
import {changeQuantityItem, removeItemFromBasket} from "../../../../../store/basket/actions";
import {IBasketProduct} from "../../../../../store/basket/interfaces";

const TableBasketProducts: React.FC<{products: IBasketProduct[], total: number}> = ({products, total}) => {

    const dispatch = useDispatch();

    const quantityProduct = (id: number | string, quantity: number) => {
        if (!quantity) {
            removeProduct(id);
            return;
        }

        dispatch(changeQuantityItem(id, quantity));
    };

    const removeProduct = (id: number | string) => dispatch(removeItemFromBasket(id));

    return (
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
                    <b>Total: ${total}</b>
                </td>
            </tr>
            </tbody>
        </table>
    )
};

export default TableBasketProducts;