import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import iRateLogo from '../../images/logo.png'

export default class Navbar extends Component {

    static propTypes = {
        title: PropTypes.string.isRequired
    };

    render() {
        return (
            <nav className="navbar is-white-important" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <Link to={'/'} className="navbar-item">
                        <img src={iRateLogo} alt="Vous trouverez ici le logo de notre app !"/>
                    </Link>

                    <button className="navbar-burger burger is-a-link-custom" aria-label="menu" aria-expanded="false"
                       data-target="navbarBasicExample">
                        <span aria-hidden="true"/>
                        <span aria-hidden="true"/>
                        <span aria-hidden="true"/>
                    </button>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">

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
