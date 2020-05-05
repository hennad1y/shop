import React, {ChangeEvent, useState, FocusEvent, useEffect} from "react";
import "./price.scss";
import {useDispatch, useSelector} from "react-redux";
import {IRootState} from "../../../../store";
import {IFilter} from "../../../../store/filter/interfaces";
import {setMaxPrice, setMinPrice} from "../../../../store/filter/actions";
import {changeCurrentPage} from "../../../../store/pagination/actions";
import {IProducts} from "../../../../store/product/interfaces";

const Price = () => {

    const dispatch = useDispatch();
    const {price} = useSelector(({filter}: IRootState): Pick<IFilter, "price"> => (filter));
    const {products} = useSelector(({products}: IRootState): Pick<IProducts, "products"> => (products));
    const [min, setMin] = useState<number | ''>(price.min);
    const [max, setMax] = useState<number | ''>(price.max);

    useEffect(() => {
        setMin(price.min);
        setMax(price.max);
    }, [dispatch, price]);

    const handleChangePrice = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const {target} = e;
        const value = +target.value;

        if (target.classList.contains('lower')) {
            if (!isNaN(value)) setMin(value);
        } else {
            if (!isNaN(value)) setMax(value);
        }
    };

    const handleFocusPrice = (e: FocusEvent<HTMLInputElement>) => {
        e.preventDefault();
        e.target.classList.contains('lower') ? setMin('') : setMax('')
    };

    const handleBlurPrice = (e: FocusEvent<HTMLInputElement>) => {
        e.preventDefault();

        const {target} = e;
        const classList = target.classList;
        const value = +target.value;

        dispatch(changeCurrentPage(1));

        if (classList.contains('lower')) {
            if (value > price.max) {
                dispatch(setMaxPrice(value));
                setMax(value)
            }
            dispatch(setMinPrice(value));
            return;
        }

        if (classList.contains('upper')) {
            if (price.min > value) {
                dispatch(setMinPrice(value));
                setMin(value)
            }
            dispatch(setMaxPrice(value));
            return;
        }

    };

    if (!products.length) return null;

    return (
        <div className="price-wrapper">
            <h5>Price</h5>
            <div className="col s6">
                <small>Min:</small>
                <input className="lower"
                       type="text"
                       onFocus={(e) => handleFocusPrice(e)}
                       onBlur={(e) => handleBlurPrice(e)}
                       onChange={(e) => handleChangePrice(e)}
                       value={min}/>
            </div>
            <div className="col s6">
                <small>Max:</small>
                <input className="upper"
                       type="text"
                       onFocus={(e) => handleFocusPrice(e)}
                       onBlur={(e) => handleBlurPrice(e)}
                       onChange={(e) => handleChangePrice(e)}
                       value={max}/>
            </div>
        </div>
    )
};

export default Price;