import React, {Component} from 'react';
//import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {getExam} from '../../redux/exams/actions/getSingle';
import Error from '../utils/Error';

class DisplayExam extends Component {

    static propTypes = {

    };

    componentDidMount() {
        this.props.fetchExam();
    }

    /*createExam = () => {
        this.props.postExam({
            title: 'This is a title from Redux',
            'reminders': 'This is a reminder from Redux',
            'instruction': 'These are some instructions'
        });
    }*/

    render() {
        const { id } = this.props.route.match.params;
        const { err, exam } = this.props;
        return(
            <>
                {(err||!exam) &&
                    <Error errors={err} />
                }
                <h1>{exam.title}</h1>
                <section id={`exam-${id}`} className="section">
                    <div className="box is-paddingless">
                        <div className="columns px-1">
                            <div className="column is-two-thirds">
                                <span className="title is-5">Module de l'épreuve:</span>
                            </div>
                            <div className="column is-one-third has-text-right">
                                <div>
                                    <div>
                                        <button className="button">
                                            <span>Dropdown button</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="level has-background-light py-1 px-1">
                            <div className="level-left">
                                Left
                            </div>
                            <div className="level-right">
                                right
                            </div>
                        </div>
                        <div className="columns px-1">
                            <div className="column is-two-thirds">
                            </div>
                            <div className="column is-one-third has-text-right">
                                <div>
                                    <div>
                                        <button className="button">
                                            <span>Répondre</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }

}

export default connect((state, ownProps) => ({
    exam: state.exams.exams,
    loading: state.exams.loading,
    err: state.exams.errorMessage
}), (dispatch, ownProps) => ({
    fetchExam: () => dispatch(getExam(ownProps.route.match.params.id))
}))(DisplayExam);
