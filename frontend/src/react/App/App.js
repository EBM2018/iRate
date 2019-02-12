import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {
    BrowserRouter,
    Route,
    Switch as RouterSwitch
} from 'react-router-dom';

import './App.css';
import LayoutApp from '../Layout/LayoutApp';
import store from '../../redux/store';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Provider store={store}>
                    <BrowserRouter>
                        <RouterSwitch>
                            <Route path="/:filter?" component={LayoutApp} />
                            <Route path="/joe" component={LayoutApp} />
                        </RouterSwitch>
                    </BrowserRouter>
                </Provider>
            </div>

        );
    }
}

export default App
