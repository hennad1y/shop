import React, {useEffect, useState} from "react";
import "./product-item.scss";
import {IProduct} from "../../../../store/product/interfaces";
import {useDispatch, useSelector} from "react-redux";
import {IRootState} from "../../../../store";
import {ICredentials} from "../../../../store/user/interfaces";
import {addItemToBasket} from "../../../../store/basket/actions";
import {IBasketProduct} from "../../../../store/basket/interfaces";

const ProductItem: React.FC<{ product: IProduct }> = ({product}) => {

    const dispatch = useDispatch();
    const credentials = useSelector(({user}: IRootState): ICredentials => (user.userInfo.credentials));
    const basketProducts = useSelector(({basket}: IRootState): IBasketProduct[] => (basket.products));
    const [quantityInBasket, setQuantityInBasket] = useState(0);

    useEffect(() => {
        const index = basketProducts.findIndex(item => item.id === product.id);

        if (index > -1) {
            setQuantityInBasket(basketProducts[index].basketQuantity);
        } else {
            setQuantityInBasket(0)
        }
    }, [basketProducts, product.id]);

    const addToBasket = (product: IProduct) => {
        let basketQuantity = 1;
        const {id, price, name, quantity} = product;

        const index = basketProducts.findIndex(item => item.id === id);

        if (index > -1) {
            basketQuantity = basketProducts[index].basketQuantity + 1;
        }

        const basketProduct: IBasketProduct = {id, name, price, quantity, basketQuantity};
        dispatch(addItemToBasket(basketProduct))
    };

    return (
        <div className="card">
            <div className="card-image">
                <img src={product.image} alt={product.name}/>
                <span className="card-title">{product.name}</span>
            </div>
            <div className="card-content">
                <p>
                    {product.description}
                </p>
            </div>
            <div className="card-action">
                {
                    credentials.buy && (
                        <>
                            <small>${product.price} Quantity: {product.quantity - quantityInBasket}</small>
                            <button type="button"
                                    className={product.quantity - quantityInBasket ? 'btn btn-small right' : 'btn btn-small right disabled'}
                                    onClick={() => addToBasket(product)}>
                                Add to basket
                            </button>
                        </>
                    )
                }
                {
                    credentials.edit && <button type="button" className="btn btn-small margin-right">Edit</button>
                }
            </div>
        </div>
    )
};

export default ProductItem;