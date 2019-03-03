import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

export default class Navbar extends Component {

    static propTypes = {
        title: PropTypes.string.isRequired
    };

    render() {
        return (
            <nav className="navbar is-white-important" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="https://bulma.io">
                        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"/>
                    </a>

                    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false"
                       data-target="navbarBasicExample">
                        <span aria-hidden="true"/>
                        <span aria-hidden="true"/>
                        <span aria-hidden="true"/>
                    </a>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        <Link to={'/home'} className="navbar-item">
                            Home
                        </Link>

                        <Link to={"/exams"} className="navbar-item">
                            Examens
                        </Link>

                        <Link to={"/newexam/instructions"} className="navbar-item">
                            Créer un examen
                        </Link>
                    </div>
                </div>
            </nav>
        )
    }
}
