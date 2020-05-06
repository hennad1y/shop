import React, {useEffect, useState} from "react";
import "./edit-product-modal.scss";
import {Modal} from "materialize-css";
import {useSelector} from "react-redux";
import {IRootState} from "../../../../store";
import {IProduct, IProducts} from "../../../../store/product/interfaces";

const EditProductModal = () => {

    const {products, editID} = useSelector(({products}: IRootState): Pick<IProducts, "products" | "editID"> => (products));
    const [editProduct, setEditProduct] = useState<IProduct | null>(null);

    useEffect(() => {
        const el: Element = document.querySelector('.edit-product-modal')!;
        Modal.init(el);
    }, []);

    useEffect(() => {
        if (!editID) return;

        const product = products.find(item => item.id === editID);

        setEditProduct(product!)
    }, [editID, products]);

    useEffect(() => {
        M.updateTextFields();

        const textarea: Element = document.querySelector('#description')!;
        M.textareaAutoResize(textarea);
    }, [editProduct]);

    const handleEdit = () => {
        // TODO
        const el: Element = document.querySelector('.edit-product-modal')!;
        const instance = Modal.getInstance(el);

        alert(`Soon see`);
        instance.close();
    };

    return (
        <div id="edit-product-modal" className="modal edit-product-modal">
            <div className="modal-content">
                <h4>Edit {editProduct?.name}</h4>
                <form action="#">
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="name" type="text" className="validate" defaultValue={editProduct?.name}/>
                            <label htmlFor="name">Name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <textarea id="description" className="materialize-textarea validate"
                                      defaultValue={editProduct?.description}/>
                            <label htmlFor="description">Description</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="price" type="number" className="validate" defaultValue={editProduct?.price}/>
                            <label htmlFor="price">Price</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="quantity" type="number" className="validate"
                                   defaultValue={editProduct?.quantity}/>
                            <label htmlFor="quantity">Quantity</label>
                        </div>
                    </div>
                </form>
            </div>
            <div className="modal-footer">
                <button
                    type="button"
                    className="waves-effect waves-green btn-flat"
                    onClick={handleEdit}>
                    Edit
                </button>
            </div>
        </div>
    )
};

export default EditProductModal;