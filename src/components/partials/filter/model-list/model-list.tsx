import React, {useEffect, useState} from "react";
import "./model-list.scss";
import {useDispatch, useSelector} from "react-redux";
import {IRootState} from "../../../../store";
import {IProducts} from "../../../../store/product/interfaces";
import {setModel} from "../../../../store/filter/actions";
import {changeCurrentPage} from "../../../../store/pagination/actions";

const ModelList = () => {

    const dispatch = useDispatch();
    const {products} = useSelector(({products}: IRootState): Pick<IProducts, "products"> => (products));
    const filter = useSelector(({filter}: IRootState) => filter);
    const [models, setModels] = useState<null | string[]>(null);

    useEffect(() => {
        if (!products.length) return;

        const result: string[] = [];

        products.forEach(item => {
            if (!result.includes(item.model)) result.push(item.model);
        });

        setModels(result);
    }, [products]);

    const handleSetModel = (model: string) => {
        dispatch(changeCurrentPage(1));
        dispatch(setModel(model))
    };

    if (!models) return null;

    return (
        <ul className="collection with-header">
            <li className="collection-header"><h5>Models</h5></li>
            {models.map((item, index) =>
                <li key={index}
                    onClick={() => handleSetModel(item)}
                    className={filter.model === item ? 'collection-item active' : 'collection-item'}>
                    {item}
                </li>
            )}
        </ul>
    )
};

export default ModelList;