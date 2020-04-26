import React, {useEffect} from "react";
import "./basket-modal.scss";
import {Modal} from "materialize-css";

const BasketModal = () => {

    useEffect(() => {
        const el: Element = document.querySelector('.basket-modal')!;
        Modal.init(el);
    }, []);

    return (
        <div id="basket-modal" className="modal basket-modal">
            <div className="modal-content">
                <h4>Modal Header</h4>
                <p>A bunch of text</p>
            </div>
            <div className="modal-footer">
                <a href="#!" className="modal-close waves-effect waves-green btn-flat">Agree</a>
            </div>
        </div>
    )
};

export default BasketModal;