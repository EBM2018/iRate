import React, {Component} from 'react';
import PropTypes from 'prop-types';
export default class Error extends Component {
    static propTypes = {
        errors: PropTypes.object
    };

    render() {
        const { errors } = this.props;
        console.log(errors);
        // TODO: make it looks better and handle closing/fade out
        return (
            <div className="notification is-danger">
                <button className="delete"></button>
                Primar lorem ipsum dolor sit amet, consectetur
                adipiscing elit lorem ipsum dolor.
            </div>
        )
    }
}