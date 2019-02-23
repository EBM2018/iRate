import React, {Component} from 'react'
import PropTypes from 'prop-types';

export default class DisplayQuestion extends Component {
    static propTypes = {
        question: PropTypes.object.isRequired
    };

    render() {
        const { question } = this.props;
        return (
            <div className="level has-background-light py-1 px-1 is-marginless border-bottom">
                <div className="level-left">
                    {question.title}
                </div>
                <div className="level-right">
                    Echelle: {question.scale}
                </div>
            </div>
        );
    }
}