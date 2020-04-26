import React from "react";
import "./nav.scss";

import DropdownContent from "./dropdown-content";
import Basket from "./basket";

const Nav: React.FC<{name: string}> = ({name}) => {
    return (
        <>
            <nav>
                <div className="nav-wrapper">
                    <a href="/" className="brand-logo">Logo</a>
                    <ul className="right hide-on-med-and-down">
                        <Basket />
                        <li>
                            <a className="dropdown-trigger" href="/" data-target="dropdown">
                                <i className="material-icons left">account_circle</i>
                                {name}
                                <i className="material-icons right">arrow_drop_down</i>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
            <DropdownContent />
        </>
    )
};

export default Nav;