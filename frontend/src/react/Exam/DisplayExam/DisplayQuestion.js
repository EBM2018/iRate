import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class DisplayQuestion extends Component {
    static propTypes = {
        question: PropTypes.object.isRequired,
        showScale: PropTypes.bool
    };

    static defaultProps = {
        showScale: true
    };

    render() {
        const { question, showScale } = this.props;
        return (
            <div className="level has-background-light py-1 px-1 is-marginless border-bottom">
                <div className="level-left">
                    {question.title}
                </div>
                {
                    showScale &&
                    (<div className="level-right">
                        Echelle: {question.scale}
                    </div>)
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        showScale: state.exams.exams.showScale
    };
};
export default connect(mapStateToProps)(DisplayQuestion);