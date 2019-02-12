import React, {Component} from 'react';
import {Provider, history} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

import './App.css';
import LayoutApp from '../Layout/LayoutApp';
import store from '../../redux/store';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <BrowserRouter>
                        <LayoutApp/>
                    </BrowserRouter>
                </div>
            </Provider>
        );
    }
}

export default App
