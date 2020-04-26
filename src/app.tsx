import React from "react";
import "./app.scss";

import {Provider} from 'react-redux';
import store from './store'

import Shop from "./components/pages/shop";

const App = () => {
    return (
        <Provider store={store}>
            <div className="container">
                <Shop />
            </div>
        </Provider>
    )
};

export default App;