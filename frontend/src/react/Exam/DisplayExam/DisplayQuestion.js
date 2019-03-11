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
                    (<div className="level-right field is-grouped is-grouped-multiline">
                        <div className="control">
                            <div className="tags has-addons">
                                <span className="tag is-dark">échelle</span>
                                <span className="tag is-success">{question.scale}</span>
                            </div>
                        </div>

                        <div className="control">
                            <div className="tags has-addons">
                                <span className="tag is-dark">temps est.</span>
                                <span className="tag is-success">{question.estimatedTime}</span>
                            </div>
                        </div>
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