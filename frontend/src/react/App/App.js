import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {
    BrowserRouter,
    Route,
    Switch as RouterSwitch
} from 'react-router-dom';

import './App.css';
import store from '../../redux/store';
import Router from "../Router/Router";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Provider store={store}>
                    <BrowserRouter>
                        <div className="hero is-fullheight">
                            <Router/>
                        </div>
                    </BrowserRouter>
                </Provider>
            </div>

        );
    }
}

export default App
