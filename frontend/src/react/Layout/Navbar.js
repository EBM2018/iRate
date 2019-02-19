import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Navbar extends Component {

    static propTypes = {
        title: PropTypes.string.isRequired
    };

    render() {
        //const { title } = this.props;
        return (
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="https://bulma.io">
                        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt="logo" />
                    </a>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">

                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">

                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}