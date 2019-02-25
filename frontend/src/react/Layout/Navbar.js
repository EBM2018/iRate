import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Navbar extends Component {

    static propTypes = {
        title: PropTypes.string.isRequired
    };

    render() {
        return (
            <nav id="navbar" className="navbar has-shadow is-spaced">
                <div className="container">
                    <div className="navbar-brand">
                        <a className="navbar-item" href="/">iRate</a>
                    </div>

                    <div id="navMenuDocumentation" className="navbar-menu">
                        <div className="navbar-start">Nav</div>
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="field is-grouped is-grouped-multiline">
                                <p className="control">

                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </nav>
        )
    }
}