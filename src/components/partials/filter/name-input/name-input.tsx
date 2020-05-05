import React, {useEffect, useState} from "react";
import "./name-input.scss";
import {useDispatch, useSelector} from "react-redux";
import {IRootState} from "../../../../store";
import {setNameFilter} from "../../../../store/filter/actions";
import {changeCurrentPage} from "../../../../store/pagination/actions";
import {IProducts} from "../../../../store/product/interfaces";

const NameInput = () => {

    const dispatch = useDispatch();
    const filter = useSelector(({filter}: IRootState) => filter);
    const [name, setName] = useState(filter.name);
    const {products} = useSelector(({products}: IRootState): Pick<IProducts, "products"> => (products));

    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch(changeCurrentPage(1));
            dispatch(setNameFilter(name));
        }, 500);

        return () => clearTimeout(timer);
    }, [name, dispatch]);

    useEffect(() => {
        setName(filter.name);
        M.updateTextFields();
    }, [filter]);

    const handleChangeInput = (value: string) => setName(value.toLowerCase());

    if (!products.length) return null;

    return (
        <div className="input-field col s5">
            <i className="material-icons prefix">search</i>
            <input id="icon_prefix" type="text" className="validate" value={name}
                   onChange={(e) => handleChangeInput(e.target.value)}/>
            <label htmlFor="icon_prefix">Search</label>
        </div>
    )
};

export default NameInput;