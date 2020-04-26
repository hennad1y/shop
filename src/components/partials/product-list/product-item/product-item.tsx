import React from "react";
import "./product-item.scss";
import {IProduct} from "../../../../store/product/interfaces";
import {useSelector} from "react-redux";
import {IRootState} from "../../../../store";
import {ICredentials} from "../../../../store/user/interfaces";

const ProductItem: React.FC<{ product: IProduct }> = ({product}) => {

    const credentials = useSelector(({user}: IRootState): ICredentials => (user.userInfo.credentials));

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
                            <small>${product.price}</small>
                            <button type="button" className="btn btn-small right">Buy</button>
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