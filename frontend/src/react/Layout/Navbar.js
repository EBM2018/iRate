import React, {Component} from 'react';
import PropTypes from 'prop-types';
export default class Navbar extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired
    };

    render() {
        const { title } = this.props;
        return (
            <div className="navbar">
                <div className="hero">
                    <div className="hero-body pb-0">
                        <div className="container">
                            <h1 className="title">
                                {title}
                            </h1>
                            <h2 className="subtitle">
                                Hero subtitle
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}