import React, {Component} from 'react';
import {Provider} from 'react-redux';

import './App.css';
import LayoutApp from './components/Layout/LayoutApp';
import store from '../redux/store';
class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <LayoutApp/>
                </div>
            </Provider>
        );
    }
}

export default App;
