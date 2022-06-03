import React from 'react';
import './App.css';
import 'antd/dist/antd.min.css';

import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter/AppRouter";

import {Provider} from "react-redux";
import {store} from 'store/store';

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <AppRouter/>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
