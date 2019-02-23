import React, {Component} from 'react'
import PropTypes from 'prop-types';

export default class DisplayQuestion extends Component {
    static propTypes = {
        question: PropTypes.object.isRequired
    };

    render() {
        return (
            <div className="level has-background-light py-1 px-1 is-marginless border-bottom">
                <div className="level-left">
                    question goes here
                </div>
                <div className="level-right">
                    something more
                </div>
            </div>
        );
    }
}