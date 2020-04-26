import React, {useEffect} from "react";
import "./dropdown-content.scss";
import {Dropdown} from "materialize-css";

const DropdownContent = () => {

    useEffect(() => {
        const el: Element = document.querySelector('.dropdown-trigger')!;
        Dropdown.init(el);
    }, []);

    return (
        <ul id="dropdown" className="dropdown-content">
            <li>
                <a href="#user-modal" className="waves-effect waves-light modal-trigger">
                    <i className="material-icons left">settings</i>
                    Settings
                </a>
            </li>
            <li className="divider" />
            <li>
                <a href="/">
                    <i className="material-icons left">exit_to_app</i>
                    Exit
                </a>
            </li>
        </ul>
    )
};

export default DropdownContent;