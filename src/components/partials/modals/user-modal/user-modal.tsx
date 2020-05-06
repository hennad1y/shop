import React, {useEffect, useState} from "react";
import "./user-modal.scss";
import {Modal} from "materialize-css";
import {UserConstants} from "../../../../store/user/constants";
import {requestUserSuccess} from "../../../../store/user/actions";
import data from "../../../../store/user/data.json";
import {useDispatch} from "react-redux";

const UserModal = () => {

    const dispatch = useDispatch();
    const [role, setRole] = useState(sessionStorage.getItem(UserConstants.USER_ROLE));
    const roles = ['user', 'manager'];

    useEffect(() => {
        const el: Element = document.querySelector('.user-modal')!;
        Modal.init(el, {onOpenStart: openModal});
    }, []);

    const openModal = () => setRole(sessionStorage.getItem(UserConstants.USER_ROLE));

    const handleSetRole = () => {
        const el: Element = document.querySelector('.user-modal')!;
        const instance = Modal.getInstance(el);

        const currentUser = sessionStorage.getItem(UserConstants.USER_ROLE);

        if (role !== currentUser) {
            sessionStorage.setItem(UserConstants.USER_ROLE, role!);
            setRole(role);
            dispatch(requestUserSuccess(role === 'user' ? data.user : data.manager))
        }

        instance.close();
    };

    return (
        <div id="user-modal" className="modal user-modal">
            <div className="modal-content">
                <h4>User Settings</h4>
                <p>Choose a role</p>
                <form action="#">
                    {
                        roles.map((item, index) => (
                            <p key={index}>
                                <label>
                                    <input
                                        name="role"
                                        type="radio"
                                        checked={role === item}
                                        value={item}
                                        onChange={(e) => setRole(e.target.value)}
                                    />
                                    <span>{item.charAt(0).toUpperCase() + item.slice(1)}</span>
                                </label>
                            </p>
                        ))
                    }
                </form>
            </div>
            <div className="modal-footer">
                <button
                    type="button"
                    className="waves-effect waves-green btn-flat"
                    onClick={handleSetRole}>
                    Ok
                </button>
            </div>
        </div>
    )
};

export default UserModal;